import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import logoP from '../assets/images/data-pilot.svg'
import menu from '../assets/images/menu.svg'
import close from '../assets/images/close.svg'
import './nav.scss'

const links = [
  { id: 1, title: 'Главная', target: 'main' },
  { id: 2, title: 'Преимущества использования DataPilot c КриптоПро', target: 'section_1' },
  { id: 3, title: 'Решение задач с помощью Модуля наложения подписи', target: 'section_2' },
  { id: 4, title: 'Технические преимущества', target: 'section_3' },
  { id: 5, title: 'Сценарии использования', target: 'section_4' },
  { id: 6, title: 'Покупка DataPilot', target: 'section_5' },
]

export const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const onScrollHandler = (event, target) => {
    const hero = document.getElementById(target);
    event.preventDefault();
    hero && hero.scrollIntoView({
      behavior: "smooth"
    });
    setToggle(false);
  }

  return (
    <>
      <div className='nav-logo'>
        <img src={logo} alt='' />
      </div>

      <div className='nav-menu-button' onClick={() => setToggle(true)}>
        <img src={menu} alt='' />
      </div>

      {toggle && (
        <ul className='nav-menu'>
          <img className='nav-menu-close' src={close} alt='' onClick={() => setToggle(false)} />
         
          {links.map((link) => (
            <li
              key={link.id}
              onClick={(e) => onScrollHandler(e, link.target)}
            >
              {link.title}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
