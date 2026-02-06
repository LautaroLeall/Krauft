// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Services.css";

const services = [
    {
        title: "Email Marketing Inmobiliario",
        desc: "Campañas personalizadas para convertir consultas en operaciones reales.",
    },
    {
        title: "Chatbot Inmobiliario",
        desc: "Asistente automatizado 24/7 que responde consultas y capta interesados.",
    },
    {
        title: "Leads Calificados",
        desc: "Meta Ads y Google Ads optimizados para atraer compradores reales.",
    },
    {
        title: "Estrategia & Branding",
        desc: "Acompañamiento integral para posicionar tu inmobiliaria como referente.",
    },
];

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="services-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="services-header"
                >
                    <span className="section-tag">Nuestra propuesta</span>
                    <h2>
                        Marketing inmobiliario <br />
                        <span>pensado para vender</span>
                    </h2>
                    <p>
                        Combinamos estrategia, automatización y diseño para generar
                        resultados medibles.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="service-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="service-index">
                                {(i + 1).toString().padStart(2, "0")}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
