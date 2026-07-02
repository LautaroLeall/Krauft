import { motion } from "framer-motion";
import { CONTACT } from "../../config/constants";
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
                href={CONTACT.WHATSAPP_URL}
                aria-label="Contactar por WhatsApp"
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
                <FaWhatsapp className="whatsapp-icon" size={24} />
            </motion.a>
        </div>
    );
}