import "./PedirAgora.css";
import {Link} from 'react-router-dom'
import CardPizzaPedirAgr from "./CardPizzaPedirAgr";
import ReactModal from 'react-modal';
import { useState } from 'react';
import Modal from "../../componentes/Modal/Modal";

//imgs cards
import Marguerita from "../../componentes/assets/pizzas/marguerida.png"
import Calabresa from "../../componentes/assets/pizzas/calabresa.jpg"
import Queijos from "../../componentes/assets/pizzas/4queijos.jpg"
import Catupiry from "../../componentes/assets/pizzas/ctupiry.jpg"
import Portuguesa from "../../componentes/assets/pizzas/portuguesa.jpg"
import Vegan from "../../componentes/assets/pizzas/vegan.png"
import Promocao from "../../componentes/assets/pizzas/promocao.jpg"
import {FaArrowLeft} from "react-icons/fa";

//Layout Pizza SABORES
ReactModal.setAppElement('#root');

const PedirAgora = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [pizzaSelecionada, setPizzaSelecionada] = useState(null);

    function openModal(pizza) {
        setPizzaSelecionada(pizza );
        setModalIsOpen(true);
    };

    function closeModal() {
        setModalIsOpen(false);
        setPizzaSelecionada(null);
    };

    const pizzas = [
        {sabor: "Marguerita" ,image: Marguerita, descricao:"PIZZA GRANDE DE MARGUERITA", preco:"A partir de R$ 62,00", id: 2},
        {sabor: "Calabresa" ,image: Calabresa, descricao:"PIZZA GRANDE DE CALABRESA", preco:"A partir de R$ 62,00", id: 3},
        {sabor: "Portuguesa" ,image: Portuguesa, descricao:"PIZZA GRANDE PORTUGUESA", preco:"A partir de R$ 62,00", id: 4},
        {sabor: "Catupiry" ,image: Catupiry, descricao:"PIZZA GRANDE DE CATUPIRY", preco:"A partir de R$ 62,00", id: 5},
        {sabor: " 4 Queijos" ,image: Queijos, descricao:"PIZZA GRANDE DE 4 QUEIJOS", preco:"A partir de R$ 62,00", id: 6},
        {sabor: "Vegana" ,image: Vegan, descricao:"PIZZA GRANDE VEGANA", preco: "A partir de R$ 62,00", id: 7}
    ];

    const promoPizza = [
        {sabor: "Promoção" ,image: Promocao, descricao:"PIZZA GRANDE E COCA COLA", preco:"A partir de R$ 62,00", id: 1},
    ]

    return(
        <div >
            <header className="header-PedirAgr">
                <Link to={"/#"} className="link">
                    <FaArrowLeft className="iconArrowPedirAgora"/>
                </Link>
                    <p >Realize seu Pedido</p>
            </header>

            <div id="container-PedirAgora">
                <div id="promoBox">
                    <div id="promoTitle">
                        <h3>Promoções</h3>
                    </div>
                    {/*Card PROMOÇÃO */}
                    {promoPizza.map((pizzasPromo) => (
                        <div onClick={() => openModal(pizzasPromo)}>
                            <CardPizzaPedirAgr
                                descricao={pizzasPromo.descricao}
                                preco={pizzasPromo.preco}
                                image={pizzasPromo.image}/>
                            <hr></hr>
                        </div>
                    ))}

                </div>

                <div id="pizzaBox">
                    <div id="pizzaTitle">
                        <h3>Pizzas</h3>
                    </div>

                    {pizzas.map((pizza) => (
                        <div onClick={() => openModal(pizza)}>
                            <CardPizzaPedirAgr
                                descricao={pizza.descricao}
                                preco={pizza.preco}
                                image={pizza.image}/>
                            <hr></hr>
                        </div> ))}
                </div>


            </div>

            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                >
                <Modal closeModal={closeModal} pizza={pizzaSelecionada}/>
            </ReactModal>

        </div>
    );
};
export default PedirAgora;
