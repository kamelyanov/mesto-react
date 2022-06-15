import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);  

  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch((err) => console.log(err))
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      setCards(cards.filter((item) => item !== card))
    })
    .catch((err) => console.log(err))
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} onClick={props.onEditAvatar}></div>
          <div className="profile__info-name">
            <h1 className="profile__name-title">{currentUser.name}</h1>
            <p className="profile__info-description">{currentUser.about}</p>
          </div>
          <button className="profile__name-edit" type="button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        {
          props.cards.map((card) => <Card 
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />)
        }
      </section>
    </main>
  )
}

export default Main