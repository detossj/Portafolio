import { ProyectsList } from "../components/ProyectsList"
import '../styles/proyects/proyects.css'


export const Proyects = ({data}) => {
  return (
    <div className="proyects">
        <h1 className="title">Proyects</h1>
        <ProyectsList data={data}/>
    </div>
  )
}
