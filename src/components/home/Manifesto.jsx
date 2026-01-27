// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Manifesto.css";

const statements = [
    "No vendemos humo.",
    "Los datos importan.",
    "Cada lead tiene un costo.",
    "El diseño también vende.",
    "La estrategia es primero.",
];

export default function Manifesto() {
    return (
        <section className="manifesto">
            <div className="manifesto-container">
                {statements.map((text, i) => (
                    <motion.h2
                        key={i}
                        className="manifesto-line"
                        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                    >
                        {text}
                    </motion.h2>
                ))}
            </div>
        </section>
    );
}
