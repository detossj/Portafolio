import { ProyectsCard } from "./ProyectsCard";


export const ProyectsList = ({ data }) => {
  return (
    <div className="proyects-container">
      {
        data.map( page => (
          <ProyectsCard
            key={page.id}  
            {...page}     
          />
        ))
      }
    </div>
  );
};
