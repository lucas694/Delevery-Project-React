//imports
import "./Modal.css"
import ModalInputs from "./ModalInputs";
import CardPizzaPedirAgr from "../../Pages/PedirAgora/CardPizzaPedirAgr";


const Modal = ({ closeModal, pizza}) =>{
    return (
        <div>
                 {/*Modal content */}
                <div className="modal-content" id="img01">
                    <span onClick={closeModal} className="close">&times;</span>
                    {pizza && (
                        <div>
                            <CardPizzaPedirAgr
                                descricao={pizza.descricao}
                                preco={pizza.preco}
                                image={pizza.image}/>
                            <hr></hr>
                        </div>
                        )}
                    <ModalInputs/>
            </div>
        </div>
    );
};

export default Modal;
