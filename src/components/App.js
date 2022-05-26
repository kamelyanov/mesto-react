import '../index.css';
import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectCard, setSelectCard] = React.useState(null)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectCard(null)
  }

  function onCardClick(card) {
    setSelectCard(card)
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={onCardClick}
      />
      <Footer />
      <div className="page__cover"></div>


      <PopupWithForm
        name='edit-form'
        title='Редактировать профиль'
        onEditProfile=''
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__field">
          <input type="text" name="name" placeholder="Имя" className="popup__input edit-form__input_type_name"
            minLength="2" maxLength="40" id="name-input" required />
          <span className="popup__input-error" id="name-input-error"> </span>
        </label>
        <label className="form__field">
          <input type="text" name="about" placeholder="Профессия"
            className="popup__input edit-form__input_type_description" minLength="2" maxLength="200"
            id="description-input" required />
          <span className="popup__input-error" id="description-input-error"> </span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='add-card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__field">
          <input type="text" name="name" placeholder="Название"
            className="popup__input add-card__input-type-namePhoto" minLength="2" maxLength="30" id="namePhoto"
            required />
          <span className="popup__input-error" id="namePhoto-error"> </span>
        </label>
        <label className="form__field">
          <input type="url" name="link" placeholder="Ссылка на картинку"
            className="popup__input add-card__input-type-linkPhoto" id="linkPhoto" required />
          <span className="popup__input-error" id="linkPhoto-error"> </span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='update-avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__field">
          <input type="url" name="avatar" placeholder="Ссылка на новый аватар"
            className="popup__input popup__input-type-linkNewAvatar" id="avatar" required />
          <span className="popup__input-error" id="avatar-error"> </span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='confirm'
        title='Вы уверены?'
      />

      <ImagePopup
        card={selectCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
