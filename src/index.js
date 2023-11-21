import React from 'react';
import {createRoot} from 'react-dom/client';
import {createElement, generateId} from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  list: [
    {code: generateId(), selectedTimes: 0, title: 'Название элемента'},
    {code: generateId(), selectedTimes: 0, title: 'Некий объект'},
    {code: generateId(), selectedTimes: 0, title: 'Заголовок'},
    {code: generateId(), selectedTimes: 0, title: 'Очень длинное название элемента из семи слов'},
    {code: generateId(), selectedTimes: 0, title: 'Запись'},
    {code: generateId(), selectedTimes: 0, title: 'Шестая запись'},
    {code: generateId(), selectedTimes: 0, title: 'Седьмая запись'},
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store}/>);
});

// Первый рендер приложения
root.render(<App store={store}/>);
