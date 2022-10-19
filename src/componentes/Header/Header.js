import "./Header.css"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { useState } from "react";


// Import img
import Pizza from "../assets/pizza2.png"
import Moto from "../assets/moto.png"

const Header = () =>{
    const [open, setOpen] = useState(false)
    const openMenu = () =>{
        setOpen(!open)
    }
    return(
        <div>
            <header id="headerSabores">
                <div className="container">
                    <div id="logos">
                        <img alt={"LogoPizza"} className="logo-pizza" src={Pizza} />
                        <img alt={"LogoMoto"} className="logo-moto" src={Moto} />
                    </div>

                    {/* NavBar Mobile*/}
                    <div className="menu">
                        <button className={"btnIcon"} onClick={openMenu} >
                            <FaBars className="NavIcon"/>
                        </button>
                    </div>

                    <div className={`NavBarMobile ${open ? "NavOpen" : "NavClose"}`}>
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
                    </div>

                    {/* NavBar Desktop*/}
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
                </div>

            </header>
        </div>
    )
};

export default Header