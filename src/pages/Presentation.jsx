import { ParticlesBackground } from "../components/ParticlesBackground";
import '../styles/presentation/presentation.css';

import Typewriter from 'typewriter-effect';

export const Presentation = ({ onClick }) => {
  return (
    <div>
      <ParticlesBackground />
      <div className="header">
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ['Hi I am Jorge Rubilar'],
              autoStart: true,
              loop: true,
              delay: 50,  // velocidad al escribir
              deleteSpeed: 50,  // velocidad al borrar
            }}
          />
        </div>
        <h4 className="subtitle">A software developer from Chile</h4>

        <button className="buttonPresentation" onClick={ onClick }>Contact Me</button>
      </div>
    </div>
  );
}
