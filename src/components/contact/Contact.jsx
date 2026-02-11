import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Instagram, Send } from "lucide-react";
import "./Contact.css";

export default function Contact() {
    // Estado para controlar si el mensaje fue enviado
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita recarga de la página

        const form = e.target;
        const formData = new FormData(form);

        try {
            await fetch("https://formsubmit.co/ajax/bykrauft@gmail.com", {
                method: "POST",
                body: formData,
            });

            setSent(true); // Muestra mensaje de éxito
            form.reset();  // Limpia el formulario
        } catch (error) {
            console.error("Error enviando formulario:", error);
            alert("Error al enviar el formulario. Intentá nuevamente.");
        }

    };

    return (
        <section className="contact-section" id="contacto">
            <div className="grid-bg"></div>

            <motion.div
                className="contact-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="contact-card-wrapper">
                    <div className="glow-corner"></div>

                    {!sent ? (
                        <>
                            <div className="contact-header">
                                <h2>Conecta con Krauft</h2>
                                <p>¿Listo para llevar tu inmobiliaria al siguiente nivel?</p>
                            </div>

                            {/* Redes / Contacto directo */}
                            <div className="social-grid">
                                <a
                                    href="mailto:bykrauft@gmail.com"
                                    className="social-card group"
                                >
                                    <Mail className="social-icon" size={32} />
                                    <span className="social-label">Email</span>
                                    <span className="social-value">bykrauft@gmail.com</span>
                                </a>

                                <a
                                    href="https://instagram.com/bykrauft"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-card group"
                                >
                                    <Instagram className="social-icon" size={32} />
                                    <span className="social-label">Instagram</span>
                                    <span className="social-value">@bykrauft</span>
                                </a>
                            </div>

                            {/* Formulario */}
                            <form className="contact-form" onSubmit={handleSubmit}>
                                {/* Configuración FormSubmit */}
                                <input
                                    type="hidden"
                                    name="_subject"
                                    value="Nuevo contacto desde Web Krauft"
                                />
                                <input
                                    type="hidden"
                                    name="_captcha"
                                    value="false"
                                />

                                <div className="form-row">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        placeholder="NOMBRE"
                                        required
                                    />

                                    <input
                                        type="text"
                                        name="company"
                                        className="form-input"
                                        placeholder="EMPRESA / INMOBILIARIA"
                                    />
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="CORREO ELECTRÓNICO"
                                    required
                                />

                                <textarea
                                    name="message"
                                    rows="4"
                                    className="form-input"
                                    placeholder="¿EN QUÉ PODEMOS AYUDARTE?"
                                    required
                                />

                                <button type="submit" className="btn-submit">
                                    Enviar Consulta <Send size={18} />
                                </button>
                            </form>
                        </>
                    ) : (
                        /* Mensaje de éxito */
                        <motion.div
                            className="success-message"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <h3 className="success-title">¡Mensaje Enviado!</h3>
                            <p className="success-desc">
                                Gracias por contactarnos. Te responderemos a la brevedad.
                            </p>

                            <button
                                onClick={() => setSent(false)}
                                className="btn-submit"
                                style={{ maxWidth: "200px", margin: "2rem auto 0" }}
                            >
                                Enviar otro
                            </button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
