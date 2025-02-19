import { ProyectsCard } from "./ProyectsCard";


export const ProyectsList = ({ data }) => {
  return (
    <div>
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
