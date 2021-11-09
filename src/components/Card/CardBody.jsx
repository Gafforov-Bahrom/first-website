import React from 'react';
// import Data from '../../data';
import cardBody from '../../images/cardbody-1.png'
import sm1 from '../../images/cardsm-1.png'
import sm2 from '../../images/cardsm-2.png'
import sm3 from '../../images/cardsm-3.png'
import eye from '../../images/eye.png'
import girl from '../../images/girl.png'
import cls from './card.module.css'
import { Link , useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect , useState } from 'react';

const Cardbody = () => {

    const [posts , setPosts] = useState(null);
    const params = useParams();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((res)=>{
                setPosts(res.data);
                console.log('test'+res.data);
            })
            .catch((err) => console.error(err))
    }, []);
    return (
        <div style={{marginTop: '64px'}} className={cls.card}>
            <div className={cls.avatar}>
                <div>
                    <img className={cls.bigImage} src={cardBody} alt="" />
                    <p style={{color:'grey'}}><i>Фото: Dilorom Alieva</i></p>
                    <div className={`${cls.dflex} ${cls.mt}` }>
                        <p className={cls.textGrey}>18:26  11.01.2021 |</p>
                        <img src={eye} style={{width: '20px' , height: 'fit-content' , marginTop: '2.5px' ,marginLeft: '16px'} } alt="" />
                        <p className={`${cls.textGrey} ${cls.ml}`}>365</p>
                    </div>
                    <h1 className={cls.top}>{posts?.title}</h1>
                    <p className={`${cls.content} ${cls.top}`}>
                        {posts?.body}
                    </p>
                    <div className={`${cls.dflex} ${cls.top}`} style={{marginBottom: '105px'}}>
                        <img src={girl} alt="" />
                        <p style={{color: 'grey' , marginLeft: '14px'}}><i>Автор: Dilorom Alieva</i></p>
                    </div>
                </div>

                <div className={cls.left}>
                    <h1>ЛУЧШИЕ БЛОГИ</h1>
                    <div className={`${cls.dflex}  ${cls.top} ${cls.height}`}>
                        <img className={cls.right} src={sm1} alt="" />
                        <div>
                            <h2>
                                Целое поколение молодежи столкнулось с серьезными препятств....
                            </h2>
                            <div className={`${cls.dflex} ${cls.mt}` }>
                                <p className={`${cls.textGrey} ${cls.widthText}`}>18:26  11.01.2021 |</p>
                                <img src={eye} style={{width: '20px' , height: 'fit-content' , marginTop: '2.5px' ,marginLeft: '16px'} } alt="" />
                                <p className={`${cls.textGrey} ${cls.ml}`}>365</p>
                            </div>
                            
                        
                        </div>
                    </div>

                    <div className={`${cls.dflex}  ${cls.top} ${cls.height}`}>
                        <img className={cls.right} src={sm2} alt="" />
                        <div>
                            <h2>
                            Целое поколение молодежи столкнулось с серьезными препятств....
                            </h2>
                            <div className={`${cls.dflex} ${cls.mt}` }>
                                <p className={`${cls.textGrey} ${cls.widthText}`}>18:26  11.01.2021 |</p>
                                <img src={eye} style={{width: '20px' , height: 'fit-content' , marginTop: '2.5px' ,marginLeft: '16px'} } alt="" />
                                <p className={`${cls.textGrey} ${cls.ml}`}>365</p>
                            </div>
                            
                        
                        </div>
                    </div>

                    <div className={`${cls.dflex}  ${cls.top} ${cls.height}`}>
                        <img className={cls.right} src={sm3} alt="" />
                        <div>
                            <h2>
                            Целое поколение молодежи столкнулось с серьезными препятств....
                            </h2>
                            <div className={`${cls.dflex} ${cls.mt}` }>
                                <p className={`${cls.textGrey} ${cls.widthText}`}>18:26  11.01.2021 |</p>
                                <img src={eye} style={{width: '20px' , height: 'fit-content' , marginTop: '2.5px' ,marginLeft: '16px'} } alt="" />
                                <p className={`${cls.textGrey} ${cls.ml}`}>365</p>
                            </div>
                            
                        
                        </div>
                    </div>

                    <div className={`${cls.dflex}  ${cls.top} ${cls.height}`}>
                        <img className={cls.right} src={sm3} alt="" />
                        <div>
                            <h2>
                            Целое поколение молодежи столкнулось с серьезными препятств....
                            </h2>
                            <div className={`${cls.dflex} ${cls.mt}` }>
                                <p className={cls.textGrey}>18:26  11.01.2021 |</p>
                                <img src={eye} style={{width: '20px' , height: 'fit-content' , marginTop: '2.5px' ,marginLeft: '16px'} } alt="" />
                                <p className={`${cls.textGrey} ${cls.ml}`}>365</p>
                            </div>
                            
                        
                        </div>
                    </div>
                    
                </div>
            </div>
                
        </div>
    );
}

export default Cardbody;
