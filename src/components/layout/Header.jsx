import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <NavLink to="/" className="logo">
                    <span className="logo-box">K</span>
                    <span className="logo-text">
                        Krauft<sup>™</sup>
                    </span>
                </NavLink>

                <nav className="nav">
                    <AnimatedLink to="/">Servicios</AnimatedLink>
                    <AnimatedLink to="/nosotros">Nosotros</AnimatedLink>
                </nav>

                <NavLink to="/nosotros#contacto" className="btn-primary">
                    Contacto
                </NavLink>

            </div>
        </header>
    );
}

function AnimatedLink({ to, children }) {
    return (
        <NavLink to={to} className="nav-link">
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
