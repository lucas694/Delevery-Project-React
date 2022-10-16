import "./Cadastro.css"
import {Link} from 'react-router-dom'
import {FaArrowLeft} from "react-icons/fa";


const Cadastro = () =>{
    return(
        <div>
            <header id="headerCadastro">
                <Link to={"/#"} className="link">
                    <FaArrowLeft className="iconArrowCadastro"/>
                </Link>
            </header>
        
        <div id="Container-pai-Cadastro">
            <div id="Container-Cadastro">

                <div id="header-cadastro">
                    <h1>Cadastro</h1>
                    <p>Por favor, preencha os campos abaixo para criar sua conta na loja</p>
                </div>

                <div className="form-container">
                
                <div id="cadastro-pessoal">
                    <div className="title">
                        <p>Dados Pessoais</p>
                        <hr></hr>
                    </div>

                    <div className="form-row">
                        <div className="form-control form-half">
                            <label for="Email">E-Mail <span>*</span></label>
                            <input type="e-mail" name="email" placeholder="E-mail"/>
                        </div>

                        <div className="form-control form-half">
                            <label for="CPF">CPF <span></span>*</label>
                            <input type="text" name="cpf" placeholder="CPF"/>
                        </div>
                    </div>

                    <div className="form-control">
                        <label for="Nome">Nome Completo <span></span>*</label>
                        <input type="text" name="nome" placeholder=""/>
                    </div>

                    <div className="form-row">
                        <form className="form-control form-half">
                            <label for="Nome">Data de nascimento: <span></span>*</label>
                            <input className="genero-dataN"type="date" name="nascimento"/>
                        </form> 

                        <div className="form-control form-half">
                            <label for="Genero">Gênero <span>*</span></label>
                            <select className="genero-dataN" id="Genero" name="Genero"><option value="">Selecione...</option>
                                <option value="2">Feminino</option>
                                <option value="1">Masculino</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-control form-half">
                            <label for="Senha">Informe a Senha <span></span>*</label>
                            <input type="password" name="senha" placeholder=""/>
                        </div>

                        <div className="form-control form-half">
                            <label for="confirma Senha">Confirme a Senha <span></span>*</label>
                            <input type="password" name="senha" placeholder=""/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-control form-half">
                            <label for="Telefone">Telefone Principal<span></span>*</label>
                            <input type="tel" name="Telefone" placeholder=""/>
                        </div>

                        <div className="form-control form-half">
                            <label for="Telefone">Telefone Secundario<span></span>*</label>
                            <input type="tel" name="Telefone" placeholder=""/>
                        </div>
                    </div>
                </div>

                <div id="cadastro-endereco">
                    <div className="title">
                        <p>Dados Pessoais</p>
                        <hr></hr>
                    </div>

                    <div className="form-row">
                        <div className="form-control form-full" >
                            <label for="Nome">Endereço <span></span>*</label>
                            <input type="text" name="Endereço" placeholder=""/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-control form-half">
                            <label for="CEP">CEP <span></span>*</label>
                            <input type="text" name="CEP" placeholder=""/>
                        </div>

                        <div className="form-control form-half">
                            <label for="numero">Numero:  <span></span>*</label>
                            <input type="text" name="Numero" placeholder=""/>
                        </div>
                    </div>

                    <button className="form-button">
                        Cadastrar
                    </button>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cadastro;