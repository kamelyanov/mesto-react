import '../index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <div className="page__cover"></div>
      </div>

      <article className="popup edit-form-popup">
        <div className="edit-form">
          <h2 className="edit-form__title">Редактировать профиль</h2>
          <form className="form edit-form__form" novalidate>
            <fieldset className="form__set">
              <label className="form__field">
                <input type="text" name="name" placeholder="Имя" className="edit-form__input edit-form__input_type_name"
                  minlength="2" maxlength="40" id="name-input" required />
                <span className="edit-form__input-error" id="name-input-error"> </span>
              </label>
              <label className="form__field">
                <input type="text" name="about" placeholder="Профессия"
                  className="edit-form__input edit-form__input_type_description" minlength="2" maxlength="200"
                  id="description-input" required />
                <span className="edit-form__input-error" id="description-input-error"> </span>
              </label>
              <label className="form__field">
                <button className="popup__btn-save" type="submit">Сохранить</button>
              </label>
            </fieldset>
          </form>
          <button className="popup__button-glose edit-form__button-glose" type="button"></button>
        </div>
      </article>

      <article className="popup add-card-popup">
        <div className="add-card edit-form">
          <button className="popup__button-glose add-card__button-glose" type="button"></button>
          <h2 className="edit-form__title">Новое Место</h2>
          <form className="form add-card__form" novalidate>
            <fieldset className="form__set">
              <label className="form__field">
                <input type="text" name="name" placeholder="Название"
                  className="edit-form__input add-card__input-type-namePhoto" minlength="2" maxlength="30" id="namePhoto"
                  required />
                <span className="edit-form__input-error" id="namePhoto-error"> </span>
              </label>
              <label className="form__field">
                <input type="url" name="link" placeholder="Ссылка на картинку"
                  className="edit-form__input add-card__input-type-linkPhoto" id="linkPhoto" required />
                <span className="edit-form__input-error" id="linkPhoto-error"> </span>
              </label>
              <label className="form__field">
                <button className="popup__btn-save popup__btn-save-add-card" type="submit">Создать</button>
              </label>
            </fieldset>
          </form>
        </div>
      </article>

      <article className="popup update-avatar-popup">
        <div className="edit-form update-avatar">
          <button className="popup__button-glose update-avatar__button-glose" type="button"></button>
          <h2 className="edit-form__title">Обновить аватар</h2>
          <form className="form update-avatar__form" novalidate>
            <fieldset className="form__set">
              <label className="form__field">
                <input type="url" name="avatar" placeholder="Ссылка на новый аватар"
                  className="edit-form__input edit-form__input-type-linkNewAvatar" id="avatar" required />
                <span className="edit-form__input-error" id="avatar-error"> </span>
              </label>
              <label className="form__field">
                <button className="popup__btn-save popup__btn-save-update-avatar" type="submit">Сохранить</button>
              </label>
            </fieldset>
          </form>
        </div>
      </article>

      <article className="popup confirm-popup">
        <div className="edit-form confirm">
          <button className="popup__button-glose confirm-popup__button-glose" type="button"></button>
          <h2 className="confirm-popup__title">Вы уверены?</h2>
          <form className="form confirm-popup__form" novalidate>
            <fieldset className="form__set">
              <label className="form__field">
                <button className="popup__btn-save popup__btn-confirm" type="submit">Да</button>
              </label>
            </fieldset>
          </form>
        </div>
      </article>

      <article className="image-popup-view popup">
        <div className="image-popup">
          <img src="#" alt="" className="image-popup__photo" />
          <p className="image-popup__title"></p>
          <button className="popup__button-glose image-popup__button-glose" type="button"></button>
        </div>
      </article>
    </body>
  );
}

export default App;
