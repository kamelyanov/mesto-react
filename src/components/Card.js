function Card(props) {
  return (
    <article className="card">
      <img src={props.card.link} alt={props.card.name} className="card__photo"/>
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes">
          <button type="button" className="card__like"></button>
          <span className="card__likeCounter">{props.card.likes.length}</span>
        </div>
      </div>
      <button type="button" className="card__delete"></button>
    </article>
  )
}

export default Card;