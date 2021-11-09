import React from 'react';
// import cls from './Card.module.css'
import './Card.css'
import eye from '../../images/eye.png'
import card1 from '../../images/card-1.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect , useState, useRef } from 'react';
import grid from '../../images/grid.png'



const Card = () => {
    const [posts , setPosts] = useState([]);
    const ref = useRef();
    console.log(ref);

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setPosts(res.data);
            // console.log('response => ' , res.data);
        })
    }, []);
    


    return (
        <main>
            <div className='buttons' style={{display: 'flex' , justifyContent: 'start', marginTop: '30px'}}>
               <button onClick={()=>{ref.current.classList.add("active")}} className={'change'}><i><img src={grid} alt="" /></i></button>
               <button onClick={()=>{ref.current.classList.remove("active")}} style={{width:'58px'}} className={'change'}><i  className='fa fa-bars'></i></button>
            </div>
        
        <div ref={ref}>
                    {
                posts.map(element => (
                    // {id, title, }
                    // className={cls.card}
                    <div className='card' key={element.id}>
                        <div><img className="big" src={card1} alt="" /></div>
                        <div className='card-body'>
                            <h1>{element.title}</h1>
                            <div>
                                <div className='d-flex'>
                                    <div className="text-grey">18:26 11.01.2021 |  </div>
                                    <div className='eye'><img  src={eye} alt="" /></div><div className='text-grey'>365</div>
                                    <div> <a className='card-link' href="#">Права человека</a> </div>
                                </div>

                                <p className='content'> <b>{element.body}</b> Посланник Генерального секретаря ООН по делам молодежи Джаятма Викраманаяке приняла 
                                участие в презентации созданной по инициативе Узбекистана Группе друзей по правам молодежи.
                                </p>
                            </div>
                            <button className='card-button'><Link to={`/posts/${element.id}`}>Читать</Link></button>
                        </div>
                        
                    </div>
                ))
            }
            </div>

        </main>
    );
}

export default Card;
