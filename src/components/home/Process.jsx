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
            <section className="process-section" id="proceso">
                <div className="process-container">

                    {/* HEADER */}
                    <motion.div
                        className="process-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-tag">Nuestro método</span>
                        <h2 className="process-title">
                            PROCESO CLARO. <br />
                            <span>RESULTADOS REALES.</span>
                        </h2>
                    </motion.div>

                    {/* TIMELINE */}
                    <div className="timeline">
                        {steps.map((step, index) => {
                            const isEven = (index + 1) % 2 === 0; // Identificar si es par
                            return (
                                <motion.div
                                    key={index}
                                    className={`timeline-item ${isEven ? "even" : "odd"}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >

                                    {/* CONTENIDO */}
                                    <div className="timeline-content-box">
                                        <h3 className="step-title">{step.title}</h3>
                                        <p className="step-desc">{step.desc}</p>
                                    </div>

                                    {/* MARCADOR */}
                                    <div className="timeline-marker">
                                        <span className="marker-number">{step.number}</span>
                                    </div>

                                    {/* ESPACIADOR */}
                                    <div className="timeline-spacer"></div>

                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </section>
    );
}