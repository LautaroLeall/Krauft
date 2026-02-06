import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import "./Header.css";

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">

                <NavLink to="/" className="logo">
                    <span className="logo-box">K</span>
                    <span className="logo-text">
                        Krauft<sup>™</sup>
                    </span>
                </NavLink>

                {/* Botón Mobile */}
                <button
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                {/* Navegación */}
                <nav className={`nav ${open ? "open" : ""}`}>

                    <AnimatedLink to="/" onClick={() => setOpen(false)}>
                        Servicios
                    </AnimatedLink>

                    <AnimatedLink to="/nosotros" onClick={() => setOpen(false)}>
                        Nosotros
                    </AnimatedLink>

                    <NavLink
                        to="/nosotros#contacto"
                        className="btn-primary mobile-btn"
                        onClick={() => setOpen(false)}
                    >
                        Contacto
                    </NavLink>

                </nav>

                {/* Botón Desktop */}
                <NavLink
                    to="/nosotros#contacto"
                    className="btn-primary desktop-btn"
                >
                    Contacto
                </NavLink>

            </div>
        </header>
    );
}


function AnimatedLink({ to, children, onClick }) {

    return (
        <NavLink to={to} className="nav-link" onClick={onClick}>

            {({ isActive }) => (

                <motion.span
                    initial={false}
                    animate={{
                        color: isActive ? "#ccff00" : "#9ca3af",
                    }}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {children}
                    {isActive && <span className="active-dot" />}
                </motion.span>

            )}

        </NavLink>
    );
}
