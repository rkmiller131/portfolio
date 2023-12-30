import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const node = document.getElementById('root');
const root = createRoot(node);

root.render(<App />);