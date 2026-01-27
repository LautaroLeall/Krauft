import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>
                    © {new Date().getFullYear()} Krauft™ — Marketing Inmobiliario
                </p>

                <div className="footer-links">
                    <a href="mailto:bykrauft@gmail.com">Email</a>
                    <a
                        href="https://instagram.com/bykrauft"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}
