import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Instagram, Send } from "lucide-react";
import "./Contact.css";

export default function Contact() {
    const [sent, setSent] = useState(false);

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
                    {/* Decoración Esquina */}
                    <div className="glow-corner"></div>

                    {!sent ? (
                        <>
                            <div className="contact-header">
                                <h2>Conecta con Krauft</h2>
                                <p>¿Listo para llevar tu inmobiliaria al siguiente nivel?</p>
                            </div>

                            <div className="social-grid">
                                {/* Email Card */}
                                <a href="mailto:bykrauft@gmail.com" className="social-card group">
                                    <Mail className="social-icon" size={32} />
                                    <span className="social-label">Email</span>
                                    <span className="social-value">bykrauft@gmail.com</span>
                                </a>

                                {/* Instagram Card */}
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
                            <form
                                className="contact-form"
                                action="https://formsubmit.co/bykrauft@gmail.com"
                                method="POST"
                                onSubmit={() => setSent(true)}
                            >
                                <input type="hidden" name="_subject" value="Nuevo contacto desde Web Krauft" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value={window.location.href} />

                                <div className="form-row">
                                    <input type="text" name="name" className="form-input" placeholder="NOMBRE" required />
                                    <input type="text" name="company" className="form-input" placeholder="EMPRESA / INMOBILIARIA" />
                                </div>

                                <input type="email" name="email" className="form-input" placeholder="CORREO ELECTRÓNICO" required />

                                <textarea
                                    name="message"
                                    rows="4"
                                    className="form-input"
                                    placeholder="¿EN QUÉ PODEMOS AYUDARTE?"
                                    required
                                ></textarea>

                                <button type="submit" className="btn-submit">
                                    Enviar Consulta <Send size={18} />
                                </button>
                            </form>
                        </>
                    ) : (
                        // Mensaje de Éxito
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
                                style={{ maxWidth: '200px', margin: '2rem auto 0' }}
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