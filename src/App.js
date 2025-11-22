import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import Gallery from "./components/GoodsGallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Image />
      <h2 style={{ textAlign: "center" }}>Завдання 2</h2>
      <Gallery />
    </div>
  );
}

export default App;
