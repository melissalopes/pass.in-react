import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="NLW Unite" />

      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-zinc-300">
          Eventos
        </a>
        <a href="" className="font-medium text-sm">
          Participantes
        </a>
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  );
}
