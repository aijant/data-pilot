import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/menu.svg'
import './nav.scss'

export const Nav = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className='nav-logo'>
        <img src={logo} alt='' />
      </div>

      <div className='nav-menu-button' onClick={() => setToggle(!toggle)}>
        <img src={menu} alt='' />
      </div>

      {toggle && (
        <ul className='nav-menu'>
          <img src={logo} alt='' />
          <li>Главная</li>
          <li>Преимущества использования DataPilot c КриптоПро</li>
          <li>Решение задач с помощью Модуля наложения подписи</li>
          <li>Технические преимущества</li>
          <li>Сценарии использования</li>
          <li>Покупка DataPilot</li>
        </ul>
      )}
    </>
  )
}
