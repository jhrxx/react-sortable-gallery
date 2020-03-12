import { hot } from 'react-hot-loader/root';
import React from 'react';
import data from './mock';

const App = () => {
  const imageUrl = (index) => {
    let id = index % 36 + 1
    id = id < 10 ? `0${id}` : `${id}`
    return `../images/art_veider_${id}.jpg`
  }
  const galleryItems = data.list.map((item, index) =>
    <li className="gallery-item" key={item.id}>
      <i>{index + 1}</i>
      <img src={imageUrl(index)} alt={item.title} />
      {/* <span title={item.desc}>{item.title}</span> */}
    </li>
  );

  return (
    <article className="App">
      <section className="playground">
        <header>Playground</header>
        <ul className="gallery-list">
          {galleryItems}
        </ul>
      </section>
    </article>
  );
}

export default hot(App);
