import '../index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <body>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <div className="page__cover"></div>
      </div>

      <PopupWithForm
        name='edit-form'
        title='Редактировать профиль'
      >
        <label className="form__field">
          <input type="text" name="name" placeholder="Имя" className="popup__input edit-form__input_type_name"
            minlength="2" maxlength="40" id="name-input" required />
          <span className="popup__input-error" id="name-input-error"> </span>
        </label>
        <label className="form__field">
          <input type="text" name="about" placeholder="Профессия"
            className="popup__input edit-form__input_type_description" minlength="2" maxlength="200"
            id="description-input" required />
          <span className="popup__input-error" id="description-input-error"> </span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='add-card'
        title='Новое место'
      >
        <label className="form__field">
          <input type="text" name="name" placeholder="Название"
            className="popup__input add-card__input-type-namePhoto" minlength="2" maxlength="30" id="namePhoto"
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

      <ImagePopup/>

    </body> 
  );
}

export default App;
