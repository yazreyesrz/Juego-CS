import React, { Component } from "react";
import Tarjeta from "../components/Tarjeta/Tarjeta";
import "./Memorama.css";
import Imagen1 from "../memorama/image1.jpg";
import Imagen2 from "../memorama/image2.jpg";
import Imagen3 from "../memorama/image3.jpg";
import Imagen4 from "../memorama/image4.jpg";
import Imagen5 from "../memorama/image5.jpg";
import Imagen6 from "../memorama/image6.jpg";
import Back from "../memorama/back.jpg";

class Memorama extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: this.generateCards(),
      flippedCards: [],
      points: 0,
    };
  }

  generateCards() {
    const images = [Imagen1, Imagen2, Imagen3, Imagen4, Imagen5, Imagen6];

    const cards = [];

    for (let i = 0; i < images.length; i++) {
      cards.push({ id: i * 2, image: images[i], matched: false });
      cards.push({ id: i * 2 + 1, image: images[i], matched: false });
    }

    return cards.sort(() => Math.random() - 0.5);
  }

  handleCardClick = (id) => {
    const { flippedCards, cards, points } = this.state;

    if (flippedCards.length === 2) {
      return;
    }

    const newFlippedCards = [...flippedCards, id];
    this.setState({ flippedCards: newFlippedCards });

    if (newFlippedCards.length === 2) {
      setTimeout(() => {
        this.checkMatch(newFlippedCards);
      }, 1000);
    }
  };

  checkMatch(flippedCards) {
    const [firstCard, secondCard] = flippedCards;
    const { cards, points } = this.state;

    if (cards[firstCard].image === cards[secondCard].image) {
      this.setState((prevState) => ({
        flippedCards: [],
        points: prevState.points + 1,
      }));
    } else {
      setTimeout(() => {
        this.setState({ flippedCards: [] });
      }, 500);
    }
  }

  resetGame = () => {
    this.setState({
      cards: this.generateCards(),
      flippedCards: [],
      points: 0,
    });
  };

  render() {
    const { cards, flippedCards, points } = this.state;

    return (
      <div className="back-memorama">
        <div className="game-info">
          <p>Puntos: {points}</p>
        </div>
        <div>
          <button className="btn-reiniciar" onClick={this.resetGame}>
            Reiniciar Juego
          </button>
        </div>
        <div className="game-board">
          {cards.map((card, index) => (
            <Tarjeta
              key={index}
              card={card}
              onClick={this.handleCardClick}
              flipped={flippedCards.includes(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Memorama;
