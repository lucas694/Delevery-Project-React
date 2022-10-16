const ModalInf = ({nome,valor}) => {
    return(
        <div id="subtotal">
            <p>{nome} </p>
            <p className="rightInf" id="preco">{valor}</p>
        </div>

    )
}
export default ModalInf
