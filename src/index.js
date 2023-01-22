import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App(){

  return (<div className='songs'>

  <iframe  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4npDJDFDYLg?utm_source=generator" title="alan" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  <iframe  src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4nBpII?utm_source=generator" title="green" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  <iframe  src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2YqUuI?utm_source=generator" title="imagine" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  <iframe  src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2LLaKs?utm_source=generator" title="hardy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  <iframe  src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWxPM4nWdhyI?utm_source=generator" title="alan" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className='top'>
    <h2>Playlists</h2>
    <App />
    <h3>. . . . . .</h3>
    </div>
  </React.StrictMode>
);
