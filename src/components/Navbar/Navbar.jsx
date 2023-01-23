import React from 'react'

const Navbar = () => {
  return (
    <header>
      <navbar class="navbar">

        <a href="/" class="logo">Sutsiki</a>

        <div class="nav-links">
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Projet</a></li>
            <li><a href="#">Infos</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

      </navbar>
    </header>
  )
}

export default Navbar