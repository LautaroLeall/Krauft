// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import "./BtnWhatsapp.css";

export default function BtnWhatsapp() {
    return (
        <div className="whatsapp-container">
            {/* Tooltip */}
            <span className="tooltip-text">Hablemos</span>

            {/* Anillo de pulso animado */}
            <div className="pulse-ring"></div>

            {/* Botón */}
            <motion.a
                href="https://wa.me/+5493816436944"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1.5
                }}
                whileHover={{ rotate: 15 }}
            >
                <svg
                    className="whatsapp-icon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <FaWhatsapp size={24} />
                </svg>
            </motion.a>
        </div>
    );
}