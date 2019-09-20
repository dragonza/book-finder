import React from "react";

function BookItem(props) {
  const { book } = props;
  const volumeInfo = book.get("volumeInfo");
  return (
    <div className="book">
      <h3 className="book__title">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={volumeInfo.get("previewLink")}
          className="book__link"
        >
          {volumeInfo.get("title")}
        </a>
      </h3>
      <div className="book__info">
        <div className="book__image">
          {volumeInfo.getIn(["imageLinks", "thumbnail"]) ?
            <img
              src={volumeInfo.getIn(["imageLinks", "thumbnail"])}
              alt="book__image"
            /> : <div>No image available</div>
          }
        </div>
        <div className="book__content">
          <div className="book__description">
            <span className="book__label">Description</span>
            <span>{volumeInfo.get("description") || 'None'}</span>
          </div>
          <div className="book_published">
            <span className="book__label">Published</span>
            <span>{volumeInfo.get("publishedDate")}</span>
          </div>
          <div className="book_publisher">
            <span className="book__label">Publisher</span>
            <span>{volumeInfo.get("publisher") || 'None'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
