import Hero from "./Hero";
import Services from "./Services";
import Process from "./Process";
import Manifesto from "./Manifesto";
import CTA from "./CTA";

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Process />
            <Manifesto />
            <CTA />
        </main>
    );
}
