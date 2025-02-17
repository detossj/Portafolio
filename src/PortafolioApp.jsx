import { useRef } from "react"
import { AboutMe } from "./pages/AboutMe"
import { ContactMe } from "./pages/ContactMe"
import { LanguagesAndTools } from "./pages/LanguagesAndTools"
import { Presentation } from "./pages/Presentation"
import { Proyects } from "./pages/Proyects"


export const PortafolioApp = () => {

    const contactRef = useRef( null );

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <section style={{ height: '100vh'}} >
                <Presentation onClick={ scrollToContact }/>
            </section>

            <section style={{ height: '100vh', backgroundColor: 'lightgreen' }} >
                <AboutMe/>
            </section>

            <section style={{ height: '100vh', backgroundColor: 'lightcoral' }} >
                <LanguagesAndTools/>
            </section>

            <section style={{ height: '100vh', backgroundColor: 'lightyellow' }} >
                <Proyects/>
            </section>

            <section style={{ height: '100vh', backgroundColor: 'lightblue' }}>
                <ContactMe ref={ contactRef }/>
            </section>

        </div>
  )
}
