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
      <div id='container'>
        <div className='box'>
          <div className='sub_title'>Toggle</div>
          <Toggle />
        </div>
        <div className='box'>
          <div className='sub_title'>Modal</div>
          <Modal />
        </div>
        {/* <div className='box'>
          <div className='sub_title'>Tab</div>
          <Tab />
        </div>
        <div className='box'>
          <div className='sub_title'>Tag</div>
          <Tag />
        </div>
        <div className='box'>
          <div className='sub_title'>AutoComplete</div>
          <AutoComplete />
        </div>
        <div className='box'>
          <div className='sub_title'>ClickToEdit</div>
          <ClickToEdit />
        </div> */}
      </div>
    </>
  );
}

export default App;
