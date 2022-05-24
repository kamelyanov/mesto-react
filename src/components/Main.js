function Main() {
  
  function handleEditAvatarClick() {
    document.querySelector('.update-avatar-popup').classList.add('popup_opened')
  }

  function handleEditProfileClick() {
    document.querySelector('.edit-form-popup').classList.add('popup_opened')
  }

   function handleAddPlaceClick() {
    document.querySelector('.add-card-popup').classList.add('popup_opened')
  }
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
          <div className="profile__info-name">
            <h1 className="profile__name-title"></h1>
            <p className="profile__info-description"></p>
          </div>
          <button className="profile__name-edit" type="button" onClick={handleEditProfileClick}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="cards">
      </section>
    </main>
  )
}

export default Main