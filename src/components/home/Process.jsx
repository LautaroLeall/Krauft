// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Process.css";

const steps = [
    {
        number: "01",
        title: "Análisis del mercado",
        desc: "Estudiamos tu zona, competencia y tipo de propiedad para definir la mejor estrategia.",
    },
    {
        number: "02",
        title: "Definición de estrategia",
        desc: "Diseñamos un plan claro de captación y posicionamiento inmobiliario.",
    },
    {
        number: "03",
        title: "Diseño & Branding",
        desc: "Creamos piezas visuales alineadas a tu identidad y a la conversión.",
    },
    {
        number: "04",
        title: "Automatización",
        desc: "Implementamos sistemas que responden consultas y califican leads 24/7.",
    },
    {
        number: "05",
        title: "Optimización",
        desc: "Medimos resultados y ajustamos campañas para mejorar el rendimiento.",
    },
    {
        number: "06",
        title: "Escalado",
        desc: "Potenciamos lo que funciona para vender más propiedades.",
    },
];

export default function Process() {
    return (
        <section className="process" id="process">
            <div className="process-container">
                <motion.div
                    className="process-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-tag">Nuestro método</span>
                    <h2>
                        Proceso claro. <br />
                        <span>Resultados reales.</span>
                    </h2>
                </motion.div>

                <div className="process-grid">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="process-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="process-number">{step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
