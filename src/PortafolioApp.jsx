import { AboutMe } from "./components/AboutMe"
import { ContactMe } from "./components/ContactMe"
import { LanguagesAndTools } from "./components/LanguagesAndTools"
import { Presentation } from "./components/Presentation"
import { Proyects } from "./components/Proyects"


export const PortafolioApp = () => {
  return (
    <div>
        <section style={{ height: '100vh'}} >
            <Presentation/>
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
            <ContactMe/>
        </section>

    </div>
  )
}
