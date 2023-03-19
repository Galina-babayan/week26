import "./HeroeCard.css";
import star from "./Assets/Images/sprite.svg#star2";

export default function HeroeCard(props) {
  let { url, name, universe, alterego, occupation, friends, superpowers } =
    props;
  return (
    <div className="marvel__column">
      <article className="marvel-item">
        <div className="marvel-item__image">
          <img src={url} alt="" />
        </div>
        <p className="marvel-item__name">{name}</p>
        <div className="marvel-item__period">
          <span className="marvel-item__p">Вселенная:</span>
          <span className="marvel-item__period">{universe}</span>
        </div>
        <div className="marvel-item__period">
          <span className="marvel-item__p">Альтер-эго:</span>
          <span className="marvel-item__period">{alterego}</span>
        </div>
        <div className="marvel-item__period">
          <span className="marvel-item__p">Род деятельности:</span>
          <span className="marvel-item__period">{occupation}</span>
        </div>
        <div className="marvel-item__period">
          <span className="marvel-item__p">Друзья:</span>
          <span className="marvel-item__period">{friends}</span>
        </div>
        <div className="marvel-item__period">
          <span className="marvel-item__p">Суперсила:</span>
          <span className="marvel-item__period">{superpowers}</span>
        </div>
        <div className="marvel__vote">
          <label className="marvel__label" htmlFor="vote"></label>
          <input
            className="marvel__result"
            type="text"
            name="vote"
            id="vote"
            placeholder="Оцени героя:"
          />
        </div>
        <form action="" className="marvel__star" id={name}>
          <label htmlFor="rating" className="marvel__label">
            <svg className="marvel__icon">
              <use href={star}></use>
            </svg>
            <input
              type="radio"
              className="marvel__total"
              value={1}
              name="rating"
              id="rating"
            />
          </label>
          <label htmlFor="rating" className="marvel__label">
            <svg className="marvel__icon">
              <use href={star}></use>
            </svg>
            <input
              type="radio"
              className="marvel__total"
              value={2}
              name="rating"
              id="rating"
            />
          </label>
          <label htmlFor="rating" className="marvel__label">
            <svg className="marvel__icon">
              <use href={star}></use>
            </svg>
            <input
              type="radio"
              className="marvel__total"
              value={3}
              name="rating"
              id="rating"
            />
          </label>
          <label htmlFor="rating" className="marvel__label">
            <svg className="marvel__icon">
              <use href={star}></use>
            </svg>
            <input
              type="radio"
              className="marvel__total"
              value={4}
              name="rating"
              id="rating"
            />
          </label>
          <label htmlFor="rating" className="marvel__label">
            <svg className="marvel__icon">
              <use href={star}></use>
            </svg>
            <input
              type="radio"
              className="marvel__total"
              value={5}
              name="rating"
              id="rating"
            />
          </label>
        </form>
        <div className="marvel-item__buttons">
          <div
            onClick={Vote}
            className="marvel-item__button marvel-item__button_beige"
          >
            Голосуй
          </div>
        </div>
        <div className="marvel__mark">Ваша оценка: </div>
      </article>
    </div>
  );
}

function Vote() {
  console.log("++++");
}
