

export const ProyectsCard = ({
  name, 
  url,
  img,
  description,
  repository,
  status,
  category

}) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <button>
        <a href={url}><img className="imgpage" src={img} alt={name} /></a>
      </button>
      <p>{description}</p>
      <a href={repository}>Repository</a>
      <h4>Status: {status}</h4>
      <h4>{category}</h4>
    </div>
  )
}
