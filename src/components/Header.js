import './Header.css';

function Header (){
    return(
        <div  className='theHeader' >
            <header>
                <div className='appTitleDiv'>
                    <h1 className='appTitle'>HB'Orc - MAX</h1>
                </div>
                    
                <div className='divButton'>
                    <button className='loginButton'>
                        Login
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header