import { FaGithub } from 'react-icons/fa'
import '../styles/aboutMe/aboutMe.css'

export const AboutMe = () => {
  return (
    
    <div className='about'>
        <h1 className='title'>About Me</h1>

        <p className='content'>
          I am a student of civil computer engineering
          and I'm midway through my studies. As a frontend developer, 
          I am passionate about creating efficient and elegant solutions, 
          and I’ve worked on developing applications using various technologies. 
          Right now, I'm focusing on exploring React alongside other cutting-edge tools. When I’m not coding, 
          I enjoy working out, playing video games, and discovering new technologies.
          
        </p>

        <div className='github'>
          <a href='https://github.com/detossj' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={40} color="white" />
          </a>
        </div>

    </div>
  )
}
