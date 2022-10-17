import {Link} from 'react-router-dom'
function CardPizzaSabores(props) {
  return (
    <div>
        <div class="box-model">

            <div class="imgModel">
                <img alt={"ImgCard"} className="pizza-Layout" src={props.image}/>
                <p className="descModel">{props.Descricao}</p>
                
                <div class="infModel">
                    <h3>{props.Sabor}</h3>
                    <h3 class="price">{props.Preco}</h3>
                
                    <a className="carLink">
                      <Link to="/PedirAgora"><img alt=" ImgCarLink" src={props.carLink} className="carImg"/></Link>
                    </a>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default CardPizzaSabores