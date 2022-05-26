function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar" onClick={props.onEditAvatar}></div>
          <div className="profile__info-name">
            <h1 className="profile__name-title"></h1>
            <p className="profile__info-description"></p>
          </div>
          <button className="profile__name-edit" type="button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
      </section>
    </main>
  )
}

export default Main