const fs = require('fs');
const path = require('path');
const libs = new Set();
function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.ts') || p.endsWith('.tsx')) {
      const c = fs.readFileSync(p, 'utf8');
      const ms = c.matchAll(/from\s+['"]([^'"]+)['"]/g);
      for (const m of ms) {
        if (!m[1].startsWith('.') && !m[1].startsWith('@/')) {
          let lib = m[1].split('/')[0];
          if (lib.startsWith('@')) {
            lib = m[1].split('/').slice(0, 2).join('/');
          }
          libs.add(lib);
        }
      }
    }
  });
}
walk('./src');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const deps = Object.keys(pkg.dependencies || {});
const missing = Array.from(libs).filter(l => !deps.includes(l));
console.log('Missing dependencies:', missing);
