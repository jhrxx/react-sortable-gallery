import React from 'react';
// import './App.css';
import data from './mock';


function App() {
  const galleryItems = data.list.map((item) =>
    <li className="gallery-item" key={item.id}>
      <img src={item.image} alt={item.title} />
    </li>
  );

  return (
    <article className="App">
      <ul>
        <li class="badge">default</li>
        <li class="badge badge--primary">primary</li>
        <li class="badge badge--secondary">secondary</li>
        <li class="badge badge--dark">dark</li>
        <li class="badge badge--success">success</li>
        <li class="badge badge--warning">warning</li>
        <li class="badge badge--error">error</li>
      </ul>
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
