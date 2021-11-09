import React from 'react';
import avatar from '../../images/avatar.png'
import cls from './Avatar.module.css'
import Card from '../Card/Card.jsx'

const Avatar = () => {
    return (
        <div>
            <div className={cls.main}>
                <div className={cls.dflex}>
                    <img className={cls.imgA} src={avatar} alt="" />
                    <div className={`${cls.left}`}>
                        <h1>Дилором Алиева</h1>
                        <table className={cls.customers}>
                            <tbody>
                            <tr><td>Карьера</td><td>Писатель</td></tr>
                            <tr><td>Дата рождения</td><td>2 ноября, 1974  ( 46 лет)</td></tr>
                            <tr><td>Место рождения</td><td>Черняховск, СССР (Россия)</td></tr>
                            </tbody>
                        </table>

                    </div>    
                </div>
                <h2 className={cls.title}>ПУБЛИКАЦИИ</h2>
            </div>

            <Card/>
        </div>
    );
}

export default Avatar;
