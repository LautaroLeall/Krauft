// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import "./About.css";

export default function About() {
    const [sent, setSent] = useState(false);

    return (
        <section className="about" id="contacto">
            <motion.div
                className="about-container"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1>Quiénes somos</h1>

                <p className="about-text">
                    Somos una agencia de <strong>marketing inmobiliario</strong> enfocada
                    en ayudar a inmobiliarias a vender más y posicionarse mejor.
                </p>

                <p className="about-text">
                    Estrategia, automatización y diseño trabajando juntos para generar
                    resultados reales.
                </p>

                {!sent ? (
                    <form
                        className="contact-form"
                        action="https://formsubmit.co/bykrauft@gmail.com"
                        method="POST"
                        onSubmit={() => setSent(true)}
                    >
                        <input
                            type="hidden"
                            name="_subject"
                            value="Nuevo contacto desde Krauft™"
                        />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="form-group">
                            <input type="text" name="name" placeholder="Nombre" required />
                        </div>

                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" required />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Contanos sobre tu proyecto"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary">
                            Enviar mensaje
                        </button>
                    </form>
                ) : (
                    <motion.div
                        className="form-success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <h3>Mensaje enviado ✔</h3>
                        <p>
                            Gracias por contactarnos. Te vamos a responder a la brevedad.
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}
