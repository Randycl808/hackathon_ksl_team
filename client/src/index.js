import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css"
import App from './App'
import reportWebVitals from "./reportWebVitals";
import Home from './pages/Home'
import Monsters from './pages/Monsters'
import MonsterShow from './pages/MonsterShow'
import MonsterForm from './pages/MonsterForm'
import About from './pages/About'
import Jobs from './pages/Jobs'
import Item from './components/Item'
import ItemForm from './components/ItemForm'
import DataProvider from './providers/DataProvider';

// import your route components too

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="monsters" element={<Monsters />} />
        <Route path="monsters/:id" element={<MonsterShow />} />
        <Route path="monsters/new" element={<MonsterForm />} />
        <Route path="monsters/:id/edit" element={<MonsterForm />} />
        <Route path="about" element={<About />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path ="item" element={<Item />}></Route>
        <Route path ="itemform" element={<ItemForm />}></Route>
        <Route path ="item/:id/edit" element={<ItemForm />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
</DataProvider>,

document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
