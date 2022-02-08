import React from 'react';
import { Toggle } from './component/Toggle';
import { Modal } from './component/Modal';
import { Tag } from './component/Tag';
import { Tab } from './component/Tab';
import { AutoComplete } from './component/AutoComplete';
import { ClickToEdit } from './component/ClickToEdit';
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <div className='title'>Toggle</div>
        <div className='box'>
          <Toggle />
        </div>
        <div className='title'>Modal</div>
        <div className='box'>
          <Modal />
        </div>
        <div className='title'>Tab</div>
        <div className='box'>
          <Tab />
        </div>
        <div className='title'>Tag</div>
        <div className='box'>
          <Tag />
        </div>
        <div className='title'>AutoComplete</div>
        <div className='box'>
          <AutoComplete />
        </div>
        <div className='title'>ClickToEdit</div>
        <div className='box'>
          <ClickToEdit />
        </div>
      </div>
    </>
  );
}

export default App;
