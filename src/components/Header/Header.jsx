import React, { useState } from 'react';
import './Header.css'
import logo from  '../../images/logo.svg'
import { Link } from 'react-router-dom';
import { Modal } from '../Login/Modal';
import man from '../../images/man.png'

const Header = () => {
    const [modalButton , setModalButton] = useState(false);
    console.log(modalButton);
    const [bur , setBur] = useState(false)
    function burger(){
        setBur(!bur);        
    }

    const [showModal , setShowModal] = useState(false)

    const openModal = () =>{
        setShowModal(element => !element);
    }    

    return (
        <header>
            <a className='burger' onClick={burger}>
                <i id='burger' className={bur?'fa fa-times':'fa fa-bars'}></i>
            </a>
            <a href="#" className='logo-header'><img src={logo} alt="" /></a>
            <ul className={bur? 'topnav active': 'topnav'}>
                <li><Link to="/#">Всепотоки</Link> </li>
                <li><Link to="/developments">Разработки</Link></li>
                <li><Link to="/administration">Администрирование</Link></li>
                <li><Link to="/design">Дизайн</Link></li>
                <li><Link to="/management">Менеджмент</Link></li>
                <li><Link to="/marketing">Маркетинг</Link></li>
                <li><Link to="/nauchpop">Научпоп</Link></li>
            </ul>

            {(modalButton?<button style={{backgroundColor: 'white'}} type='button' onClick={openModal}><img src={man} alt="" /></button>:<button type='button' onClick={openModal} >Войти</button>)}
            <Modal showModal={showModal} setShowModal={setShowModal} modalButton={modalButton} setModalButton={setModalButton} />
        </header>
    );
}

export default Header;
