import React from 'react';
import './App.css';
import MainMint from './MainMint';


export default function MainPage(props) {

  return (
    <div>
      <div>
        <MainMint accounts={props.accounts} setAccounts={props.setAccounts}/>
      </div>
      <div className='moving-background-one'></div>
    </div>
  )
}
