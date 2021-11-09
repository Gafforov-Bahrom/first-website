import React from 'react';
import './Footer.css'
import logo from  '../../images/logo.svg'
const Footer = () => {
    return (
    <div className='footer'>
        <footer>
            <div className='logo'>
                <a href="#" className='bold'><img src={logo} alt="" /> </a>
                <p className='logo-text'>Помощник в публикации статей, журналов. 
                    Список популярных международных конференций.
                    Всё для студентов и преподавателей.</p>
                <p  className='pos'>Copyright © 2020. LogoIpsum. All rights reserved.</p>
            </div>
            <ul>
                <li><a className='bold' href="">Ресурсы</a></li>
                <li><a href="">Статьи</a></li>
                <li><a href="">Журналы</a></li>
                <li><a href="">Газеты</a></li>
                <li><a href="">Диплом</a></li>
            </ul>

            <ul>
                <li><a className='bold' href="">О нас</a></li>
                <li><a href="">Контакты</a></li>
                <li><a href="">Помощь</a></li>
                <li><a href="">Заявки</a></li>
                <li><a href="">Политика</a></li>            
            </ul>

            <div className='help'>
                <a href="#" className='bold'>Помощь</a>
                <p>Часто задаваемые вопросы</p>
            </div>
        </footer>
    </div>
    );
}

export default Footer;
