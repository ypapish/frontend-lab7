import React, { Component } from "react";
import "./Content.css";


class Content extends Component {
  state = {
    fourthState: 0,
    fifthState: 0
  };

  toggleState = (key) => {
    this.setState(prev => ({
      [key]: prev[key] === 0 ? 1 : prev[key] === 1 ? 2 : 1
    }));
  };

  render() {
    const { fourthState, fifthState } = this.state;

    const hobbies = [
      "Розмальовувати картини по номерах",
      "Дивитись фільми/серіали",
      "Гуляти на свіжому повітрі"
    ];

    const movies = [
      "Маленькі жінки, 2019",
      "Гаррі Поттер і Дари Смерті: Частина 2, 2011",
      "Зелена книга, 2018"
    ];

    return (
      <div className="content">
        <p>
          Освіта: 2012-2023рр. - Одрадокам'янський ліцей Тягинської сільської ради.<br />
          2023р - зараз - Київський політехнічний інститут імені Ігоря Сікорського
        </p>

        <p
          className={`hobbies-title state-${fourthState}`}
          onClick={() => this.toggleState("fourthState")}
        >
          Мої хобі:
        </p>

        <ul>
          {hobbies.map((hobby, index) => (
            <li
              key={index}
              className={index === 0 ? `first-hobby state-${fifthState}` : ""}
              onClick={index === 0 ? () => this.toggleState("fifthState") : undefined}
            >
              {hobby}
            </li>
          ))}
        </ul>

        <p>Мої улюблені фільми:</p>
        <ol>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ol>

        <p>
          Моє улюблене місто - Київ.<br />
          Воно поєднує в собі багатовікову історію та сучасний ритм життя.<br />
          Старовинні вулиці Подолу, величні собори та затишні парки створюють особливу атмосферу.<br />
          Водночас Київ є динамічним мегаполісом із сучасними будівлями, розвиненою інфраструктурою та безліччю культурних подій.<br />
          Це місто, де минуле і сучасність гармонійно поєднуються, створюючи унікальний характер, який неможливо забути.
        </p>
      </div>
    );
  }
}

export default Content;