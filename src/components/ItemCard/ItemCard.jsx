import { useContext } from "react";

import "./ItemCard.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUserId = useContext(CurrentUserContext)._id;

  const isLiked = item.likes.some((id) => id === currentUserId);

  const isOwn = item.owner === currentUserId;

  const cardLikeClassName = `card__like ${isOwn ? "" : "card__like_hidden"} ${
    isLiked ? "card__like_liked" : ""
  } `;

  const _handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked: isLiked });
  };
  return (
    <li className="card">
      <div className="card__info">
        <h2 className="card__name">{item.name}</h2>
        <button
          className={cardLikeClassName}
          type="button"
          onClick={handleLike}
        />
      </div>
      <img
        onClick={_handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
