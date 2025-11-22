import React, { useState } from "react";
import "./Image.css";


function Image() {
  const [images, setImages] = useState([{ id: 1, width: 500 }]);
  const [nextId, setNextId] = useState(2);

  const handleAdd = () => {
    setImages([...images, { id: nextId, width: 500 }]);
    setNextId(nextId + 1);
  };

  const handleIncrease = () => {
    setImages(prevImages => {
      if (prevImages.length === 0) return prevImages;
      const newImages = [...prevImages];
      const lastIndex = newImages.length - 1;
      newImages[lastIndex].width += 50;
      return newImages;
    });
  };

  const handleDecrease = () => {
    setImages(prevImages => {
      if (prevImages.length === 0) return prevImages;
      const newImages = [...prevImages];
      const lastIndex = newImages.length - 1;
      newImages[lastIndex].width = Math.max(50, newImages[lastIndex].width - 50);
      return newImages;
    });
  };

  const handleRemove = () => {
    setImages(prevImages => {
      if (prevImages.length === 0) return prevImages;
      const newImages = [...prevImages];
      newImages.pop();
      return newImages;
    });
  };

  return (
    <div className="image-section">
      <div id="image-container">
        {images.map(img => (
          <a
            key={img.id}
            href="https://kyivcity.gov.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://tripmydream.cc/travelhub/travel/region/27/6/276.jpg"
              alt="Київ"
              width={img.width}
            />
          </a>
        ))}
      </div>

      <div className="buttons">
        <button onClick={handleAdd}>Додати</button>
        <button onClick={handleIncrease}>Збільшити</button>
        <button onClick={handleDecrease}>Зменшити</button>
        <button onClick={handleRemove}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
