import { Container } from './styles'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg'

export function Sidebar() {

  const [menuOpen, setMenuOpen] = useState(false)

  function handleToggleMenu (){
    setMenuOpen(!menuOpen)

  }
  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='' />
      </button>

      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <BurguerIcon />
              <span>Hamburgueres</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='pizzas'>
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='drinks'>
              <SodaIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='ice-creams'>
              <IceCreamIcon />
              <span>Sobremesas</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
