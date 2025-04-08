import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import './styles.scss';

const root = document.getElementById('root');
createRoot(root).render(<App />);

