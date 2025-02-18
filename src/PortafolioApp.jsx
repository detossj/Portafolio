import { useEffect, useRef, useState } from "react"
import { AboutMe } from "./pages/AboutMe"
import { ContactMe } from "./pages/ContactMe"
import { LanguagesAndTools } from "./pages/LanguagesAndTools"
import { Presentation } from "./pages/Presentation"
import { Proyects } from "./pages/Proyects"


export const PortafolioApp = () => {

    const [data, setData] = useState({})
    
    const getData = async () => {
        try {
            const resp = await fetch('https://raw.githubusercontent.com/detossj/Portafolio/refs/heads/main/public/pages.json');
    
            if (!resp.ok) {
                throw new Error(`HTTP error! Status: ${resp.status}`);
            }
            else{
                console.log('datos cargados correctamente')
            }
    
            return await resp.json();
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            return {}; // Devuelve un objeto vacío para evitar errores
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const datas = await getData();
            setData(datas);
        }
        fetchData();
    }, [])
    
    
    const contactRef = useRef( null );

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <section style={{ height: '100vh'}} >
                <Presentation onClick={ scrollToContact }/>
            </section>

            <section style={{ height: '100vh' }} >
                <AboutMe/>
            </section>

            <section style={{ height: '100vh' }} >
                <LanguagesAndTools/>
            </section>

            <section style={{ height: '100vh', backgroundColor: 'lightyellow' }} >
                <Proyects datas={data}/>
            </section>

            <section style={{ height: '100vh', backgroundColor: 'lightblue' }}>
                <ContactMe ref={ contactRef }/>
            </section>

        </div>
  )
}
