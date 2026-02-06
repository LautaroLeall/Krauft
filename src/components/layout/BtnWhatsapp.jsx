// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import "./BtnWhatsapp.css";

export default function BtnWhatsapp() {
    return (
        <motion.a
            href="https://wa.me/+5493816436944"
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
        >
            <span className="btn-whatsapp-text">
                <FaWhatsapp />
            </span>
        </motion.a>
    );
}