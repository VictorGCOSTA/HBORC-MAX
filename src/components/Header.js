import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header (){
    
    let navegar = useNavigate();
    const changeRouteLogin = () => {
        let path = `/login`;
        navegar(path);
    }
    return(
        <div  className='theHeader' >
            <header>
                <div className='appTitleDiv'>
                    <h1 className='appTitle'>HB'Orc - MAX</h1>
                </div>
                <div className='divButton'>
                    <button className='loginButton' onClick={changeRouteLogin}>
                        Login
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header