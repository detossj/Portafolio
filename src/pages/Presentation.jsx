import { ParticlesBackground } from "../components/ParticlesBackground";
import '../styles/presentation/presentation.css';
import { Typewriter } from "react-simple-typewriter";

export const Presentation = ({ onClick }) => {
  return (
    <div>
      <ParticlesBackground id="particles1" />
      <div className="header">
        <div className="typewriter-container">
          <Typewriter
            words={["Hi, I'm Jorge Rubilar"]}  // Texto a escribir
            loop={true}                       // Repetir el efecto
            autoStart={true}                  // Iniciar automáticamente
            delay={50}                        // Velocidad al escribir (en ms)
            deleteSpeed={50}                  // Velocidad al borrar (en ms)
            cursor={true}                     // Mostrar el cursor
          />
        </div>
        <h4 className="subtitle">A software developer from Chile</h4>

        <button className="buttonPresentation" onClick={onClick}>Contact Me</button>
      </div>
    </div>
  );
}
