import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ tone = "dark", compact = false }: { tone?: "dark" | "light"; compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center" aria-label="HFPC — home">
      <img 
        src={logoImg} 
        alt="HFPC Logo" 
        className={`w-auto object-contain transition-all duration-500 ${compact ? "h-10" : "h-14"}`} 
      />
    </Link>
  );
}
