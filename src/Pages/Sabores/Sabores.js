import { FaArrowLeft } from "react-icons/fa";
import {Link} from 'react-router-dom'

import "./Sabores.css"
//Imgs Pizzas
import Marguerita from "../../componentes/assets/pizzas/marguerida.png"
import Calabresa from "../../componentes/assets/pizzas/calabresa.jpg"
import Queijos from "../../componentes/assets/pizzas/4queijos.jpg"
import Catupiry from "../../componentes/assets/pizzas/ctupiry.jpg"
import Portuguesa from "../../componentes/assets/pizzas/portuguesa.jpg"
import Vegan from "../../componentes/assets/pizzas/vegan.png"
import Car from "../../componentes/assets/pizzas/Green.png"
//Layout Pizza SABORES
import CardPizzaSabores from "./CardPizzaSabores"


const Sabores = () => {
    return(
            <div id="Container-pai-Sabores">
              <div className={"IconDiv"}>
                <Link to={"/#"} className="link"><FaArrowLeft className="iconArrow"/></Link>
              </div>

                <div id="Container-Sabores">
                <CardPizzaSabores Sabor="Pizza de Marguerita" 
                    Preco={55 + "$"}  image={Marguerita} carLink={Car}
                    Descricao={"Uma deliciosa Pizza de Marguerita"} />
                
                <CardPizzaSabores Sabor="Pizza de Calabresa" 
                    Preco={55 + "$"}  image={Calabresa} carLink={Car}
                    Descricao={"Uma deliciosa Pizza de Calabresa"} />
                
                <CardPizzaSabores Sabor="Pizza 4 Queijos" 
                    Preco={55 + "$"}  image={Queijos} carLink={Car}
                    Descricao={"Uma deliciosa Pizza 4 Queijos"} />

                <CardPizzaSabores Sabor="Pizza Catupiry" 
                    Preco={55 + "$"}  image={Catupiry} carLink={Car}
                    Descricao={"Uma deliciosa Pizza de Catupiry"} />
                
                <CardPizzaSabores Sabor="Pizza Portuguesa" 
                    Preco={55 + "$"}  image={Portuguesa} carLink={Car}
                    Descricao={"Uma deliciosa Pizza Portuguesa"} />
                
                <CardPizzaSabores Sabor="Pizza Vegan" 
                    Preco={55 + "$"}  image={Vegan} carLink={Car}
                    Descricao={"Uma deliciosa Pizza Vegan"} />
                    </div>

            </div>
    )
};

export default Sabores;