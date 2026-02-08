// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Bot, Target, TrendingUp } from "lucide-react";
import "./Services.css";

// --- DATOS DEL SERVICIO ---
const services = [
    {
        icon: <Mail size={24} />,
        title: "Email Marketing Inmobiliario",
        desc: "Diseñamos campañas personalizadas que fortalecen la relación con tus clientes y aumentan la conversión de consultas en operaciones reales.",
    },
    {
        icon: <Bot size={24} />,
        title: "Chatbot Inmobiliario",
        desc: "Implementamos un asistente automatizado que centraliza todas tus propiedades, disponible 24/7 para responder consultas y captar interesados.",
    },
    {
        icon: <Target size={24} />,
        title: "Leads Calificados",
        desc: "Optimizamos campañas en Meta Ads y Google Ads para atraer prospectos con alto potencial de compra o inversión, maximizando el retorno.",
    },
    {
        icon: <TrendingUp size={24} />,
        title: "Asesoramiento Estratégico",
        desc: "Acompañamos la creación y expansión de tu inmobiliaria o constructora desde la estrategia de marketing hasta el diseño de identidad.",
    },
];

export default function Services() {
    return (
        <section className="services-section" id="servicios">
            <div className="services-container">

                {/* HEADER SECCIÓN */}
                <div className="services-header">
                    <div className="title-group">
                        <h2>Nuestra Propuesta</h2>
                        <motion.div
                            className="accent-line"
                            initial={{ width: 0 }}
                            whileInView={{ width: "8rem" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                    </div>
                    <p className="header-desc">
                        Soluciones diseñadas para revolucionar el mercado inmobiliario moderno.
                    </p>
                </div>

                {/* GRID TARJETAS */}
                <div className="services-grid">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="icon-box">
                                {item.icon}
                            </div>
                            <h3 className="service-title">{item.title}</h3>
                            <p className="service-desc">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}