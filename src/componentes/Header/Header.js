import "./Header.css"
import { Link } from 'react-router-dom'

// Import img
import Pizza from "../assets/pizza2.png"
import Moto from "../assets/moto.png"


const Header = () =>{
    return(
        <div>
            <header id="headerSabores">
                <div id="logos">
                    <img alt={"LogoPizza"} className="logo-pizza" src={Pizza} />
                    <img alt={"LogoMoto"} className="logo-moto" src={Moto} />
                </div>

                <ul>
                    
                    <li>
                        <Link className="homeC link" to="/">HOME</Link> 
                    </li>
                    <li>
                        <Link className="link" to="/Sabores">SABORES</Link>
                    </li>
                    <li><a className="link" href="#">CONTATO</a></li>
                    <li><a className="link" href="#">PEDIDOS</a></li>
                    <li>
                        <Link className="homeC link" to="/Cadastro">CADASTRO</Link> 
                    </li>
                    <li>
                        <Link className="pedirAgr link" to="/PedirAgora">PEDIR AGORA</Link> 
                    </li>
                </ul>
            </header>
        </div>
    )
};

export default Header