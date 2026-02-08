import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Bloquear scroll cuando el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "unset";
    }, [open]);

    // Función para navegación suave
    const handleNav = (e, targetId) => {
        e.preventDefault();

        // Si estamos en home, scroll suave
        if (location.pathname === "/") {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } else {
            // Si no estamos en home, navegar a home y luego scroll (simplificado)
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
        setOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">

                {/* LOGO */}
                <NavLink to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="logo-box">
                        <img
                            src="/icon-nav.png"
                            alt="icono-krauft"
                            className="k-icon"
                        />
                    </div>

                    <div className="logo-text-container">
                        <span className="logo-text">
                            krauft<span className="text-lime">.</span>
                        </span>
                        <span className="logo-tagline">
                            mkt inmobiliario
                        </span>
                    </div>
                </NavLink>

                {/* BOTÓN MOBILE */}
                <button
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X /> : <Menu />}
                </button>

                {/* NAV */}
                <nav className={`nav ${open ? "open" : ""}`}>
                    <div className="nav-links-wrapper">
                        <button onClick={(e) => handleNav(e, 'propuesta')} className="nav-item btn-ghost">
                            PROPUESTA
                        </button>
                        <button onClick={(e) => handleNav(e, 'servicios')} className="nav-item btn-ghost">
                            SERVICIOS
                        </button>
                        <button onClick={(e) => handleNav(e, 'proceso')} className="nav-item btn-ghost">
                            PROCESO
                        </button>
                        <button onClick={(e) => handleNav(e, 'manifiesto')} className="nav-item btn-ghost">
                            MANIFIESTO
                        </button>

                        <NavLink
                            to="/contacto"
                            className="btn-primary"
                            onClick={() => setOpen(false)}
                        >
                            CONTACTO
                        </NavLink>
                    </div>
                </nav>
            </div>

            {/* OVERLAY */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="mobile-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    />
                )}
            </AnimatePresence>
        </header>
    );
}