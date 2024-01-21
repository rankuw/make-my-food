import logo from "../logo.jpeg"

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header;