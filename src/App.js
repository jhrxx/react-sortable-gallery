import React from 'react';
// import './App.css';
import './style.scss';
import data from './mock';

function App() {
  console.log('data: ', data.list)
  const galleryItems = data.list.map((item) =>
    <li className="gallery-item" key={item.id}>
      <img src={item.image} alt={item.title}/>
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

export default App;
