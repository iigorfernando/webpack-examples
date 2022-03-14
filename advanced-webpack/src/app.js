import React from "react";
import { Menu } from './menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from '@loadable/component';

const Home = loadable(() => import('./pages/home'));
const About = loadable(() => import('./pages/about'));

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <h1>Eu sou uma aplicação react com Webapck</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
};