import "./CardPizzaPedirAgr.css"


const CardPizzaPedirAgr = (props) => {
  return (
    <div>
        <div className="infBox">
            <div className="leftInf">
                <img  alt={"ImgCard"} className="imgPizza"src={props.image}/>
                <h3> {props.descricao}</h3>
            </div>

            <div className="rightInf">
                <h1>{props.preco}</h1>
            </div>
        </div>
        
    </div>
  )
}

export default CardPizzaPedirAgr