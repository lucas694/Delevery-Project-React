import ModalEndereco from "./ModalEndereco";
import ModalInf from "./ModalInf";
import ModalPagamento from "./ModalPagamento";
import ModalCpf from "./ModalCpf";
import ModalButton from "./ModalButton";

const ModalInputs = () =>{
    return(
        <div>
            {/*input endereço*/}
            <ModalEndereco/>

            {/*total pedido*/}
            <div id="container-total">
                <ModalInf nome="Subtotal" valor="R$55,00" />
                <ModalInf nome="Taxa de Entrega" valor="R$5,00" />
                <ModalInf nome="Total" valor="R$60,00" />
            </div>

            {/*forma de pagamento*/}
            <ModalPagamento/>

            {/*cpf do pedido*/}
            <ModalCpf/>

            {/*botao finalização*/}
            <ModalButton/>
        </div>
    )
}
export default ModalInputs