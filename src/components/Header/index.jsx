import './style.css';
import * as React from 'react'
import {BiSearch} from 'react-icons/bi'
import logo from '../../assets/images/logo-trail.svg'

const Header = () => {
  const [filter, setFilter] = React.useState('');

  const hundleChange = (e) => {
    setFilter(e.target.value);
  }

  return (
    <header className="header">
      
        <img className='header__logo___img' src={logo} alt="Logo do site" />

      <form action="" className="header__search">
        <input type="text" name="filter" value={filter} onChange={hundleChange}
        id="search" placeholder="Pesquisar"/>
        <button type="submit" className="search__btn">
          <BiSearch/>
        </button> 
      </form>
      <button className="header__access___btn">Cadastro / Login</button>
    </header>
  );
}

export default Header;