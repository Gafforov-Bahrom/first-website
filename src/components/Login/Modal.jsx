import React , { useState , useRef, useEffect , useCallback} from 'react'
import {useSpring , animated} from 'react-spring'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import camera from '../../images/card-2.png'
import LoginForm from './LoginForm'
import { Link , Route , useHistory } from 'react-router-dom'


const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0 ,0 ,0 ,0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`

const  ModalWrapper = styled.div`
    width: fit-content;
    // height: fp;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    width: 32px;
    height: 32px;
    right: 20px;
    padding: 0;
    z-index: 10;
`




export const Modal = ({ showModal , setShowModal , modalButton , setModalButton}) => {
//Login
    const adminUser = {
        email: 'admin@admin.com',
        password : 'admin123'
      }
      
      const history = useHistory();

      const [user , setUser] = useState({name:'', email: ''});
      const [error , setError] = useState('');
    
      const Login = details =>{
        console.log(details);
        if(details.email == adminUser.email && details.password == adminUser.password){
          console.log('login')
          setModalButton(!modalButton)
          setUser({
            name: details.name,
            email: details.email
          });
          history.push('/home');
          setShowModal(false);
          localStorage.setItem('modal', true);
        } else {
          console.log('Details do not match')
          setError('Details do not match')
        }
      }
    
      const Logout = () =>{
        console.log('Logout');
        history.push('/')
        setModalButton(!modalButton);
        setShowModal(false);
        setUser({name:'', email: ''})
      }

 //Modal     
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1:0,
        transform: showModal ? `traslateY(0%)` : 'translateY(-100%)'

    })

    const closeModal = e => {
        if(modalRef.current == e.target){
            setShowModal(false)
        }
    }

    const keyPress = useCallback(e =>{
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    },[keyPress]
    )

    return (
        <div>
        {showModal? (<Background ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
            <ModalWrapper showModal={showModal} >
                <div className="App">
        {(user.email !='')? (
        <div className='welcome'>
          <button onClick={Logout}>Logout</button>
        </div>
        ):(
          <LoginForm Login={Login} error={error}/>
                    )}
                </div>
                <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(element => !element)} />
            </ModalWrapper>
            </animated.div>
            </Background>)
        : null}
        </div>
    )
}

