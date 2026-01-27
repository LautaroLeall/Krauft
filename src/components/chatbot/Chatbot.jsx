import { useMemo, useState } from "react";
import { chatbotData } from "../../data/chatbotData";
import "./Chatbot.css";

const DEFAULT_BOT =
    "Buena pregunta. Para responderte fino, contame: ciudad/zona + tipo de propiedad (casa/depto/terreno) + objetivo (vender/alquilar).";

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hola 👋 Soy el asistente de Krauft™. ¿Qué estás buscando mejorar en tu inmobiliaria?" },
    ]);
    const [input, setInput] = useState("");

    const kb = useMemo(() => chatbotData, []);

    const getBotResponse = (text) => {
        const lower = text.toLowerCase();
        const match = kb.find((item) => item.keywords.some((k) => lower.includes(k)));
        return match?.answer || DEFAULT_BOT;
    };

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        setMessages((prev) => [...prev, { from: "user", text: trimmed }]);

        const response = getBotResponse(trimmed);
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "bot", text: response }]);
        }, 450);

        setInput("");
    };

    return (
        <>
            <button className="chatbot-toggle" onClick={() => setOpen((v) => !v)} aria-label="Abrir chatbot">
                💬
            </button>

            {open && (
                <div className="chatbot" role="dialog" aria-label="Chatbot Krauft">
                    <div className="chatbot-header">
                        <span>Asistente Krauft™</span>
                        <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Cerrar">
                            ✕
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((m, i) => (
                            <div key={i} className={`msg ${m.from}`}>
                                {m.text}
                            </div>
                        ))}
                    </div>

                    <div className="chatbot-input">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribí tu pregunta..."
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button onClick={handleSend} aria-label="Enviar">
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
