import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import App from './App';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
