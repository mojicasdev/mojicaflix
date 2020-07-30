import React from 'react';
import { Link } from 'react-router-dom';
import logoNova from '../../assets/img/logoNova.png';
import './Menu.css'
import Button from '../Button';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logoNova} alt="logoMain" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu; //comando para permitir o import do Menu 
