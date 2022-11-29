import "./BoxMessage.css"
import { Link } from "react-router-dom";

//img
import Flag from "../assets/faixinha.png"

const BoxMessage = () =>{
    return(
        <div>
            <div id="box-message">
                <img alt={"FlagImg"} className="flag" src={Flag} />

                <div id="text-box">
                    <h1 className="txt1">O jeitinho Brasileito</h1>
                    <h2 className="txt2">com quem entende</h2>
                    <h2 className="txt3">DO BRASIL</h2>
                </div>

                <img alt={"FlagImg"} className="flag" src={Flag} />
                <Link to="/PedirAgora" className={""}>
                    <button className="btn1">
                         <h1 className="h1-btn">PEDIR AGORA</h1>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BoxMessage