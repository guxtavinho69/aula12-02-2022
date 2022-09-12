import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
function Header() {
    return (
        <div>
            <header>
                <h1>Cabeçalhoo</h1>
                <Link className='logo' to="/">AppFilmes</Link>
                <Link className='favoritos' to="/favoritos">Meus Filmes </Link>
            </header>
        </div>
    );
}

export default Header;