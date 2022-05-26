import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';


function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

 
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name)
        setUserDescription(user.about)
        setUserAvatar(user.avatar)
        setCards(cards)
      })
      .catch((err) => console.log(err))    
    }, [])
        

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar}></div>
          <div className="profile__info-name">
            <h1 className="profile__name-title">{userName}</h1>
            <p className="profile__info-description">{userDescription}</p>
          </div>
          <button className="profile__name-edit" type="button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        {
          cards.map((card) => <Card key={card._id}
            card={card}
            onCardClick={props.onCardClick}
          />)
        }
      </section>
    </main>
  )
}

export default Main