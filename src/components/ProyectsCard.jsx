export const ProyectsCard = ({
  name, 
  url,
  img,
  description,
  repository,
  status
}) => {
  return (
    <div className="proyect-card">
      <h1>{name}</h1>
      <button className="proyect-button">
        <a href={url}>
          <img className="proyect-img" src={img} alt={name} />
        </a>
      </button>
      <p className="proyect-description">{description}</p>
      <a href={repository} className="proyect-repository">Repository</a><br />
      <a href={url} className="proyect-link">Go to site</a>
      <h4 className="proyect-status">Status: {status}</h4>
    </div>
  )
}
