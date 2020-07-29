import React from 'react';
import logoNova from '../../assets/img/logoNova.png';
import './Menu.css'
import Button from '../Button';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logoNova} alt="logoMain" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu; //comando para permitir o import do Menu 
