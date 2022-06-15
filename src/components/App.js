import '../index.css';
import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectCard, setSelectCard] = React.useState(null)

  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCards(cards)
        setCurrentUser(user)
      })
      .catch((err) => console.log(err))    
    }, [])

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

  function handleUpdateUser(userData) {
    api.setUserInfo(userData)
    .then((data) => {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch((err) => console.log(err))
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={onCardClick}
        cards={cards}
       />
      <Footer />
      <div className="page__cover"></div>


      <EditProfilePopup 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups} 
      onUpdateUser={handleUpdateUser}
      />

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

    </CurrentUserContext.Provider>
  );
}

export default App;
