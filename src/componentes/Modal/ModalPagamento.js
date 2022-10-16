const ModalPagamento = () => {
    return(
        <div id="pagamento">
            <h3>Selecione a forma de pagamento</h3>
            <select className="select-input">
                <option value="0" disabled="" selected="">Forma de Pagamento</option>

                <option value="2">Pagar com dinheiro</option>
                <option value="3">Pagar na Maquininha</option>
            </select>
        </div>
    )
}

export default ModalPagamento;