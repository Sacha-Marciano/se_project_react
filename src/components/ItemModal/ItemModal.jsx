import "./ItemModal.css";

function ItemModal({ isOpen, selectedCard, closePopup }) {
  return (
    <div className={`modal  ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal-item__content">
        <button
          className="modal-item__button_type_close"
          type="button"
          onClick={closePopup}
        />
        <img
          className="modal-item__image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal-item__info">
          <p className="modal-item__name">{selectedCard.name}</p>
          <p className="modal-item__weather-type">
            Weather: {selectedCard.weather}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
