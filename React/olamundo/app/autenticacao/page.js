'use client'
import { useState } from "react";

function Autenticacao() {

    const [autenticado, alteraAutenticado] = useState(false)

    const [email, alteraEmail] = useState("")
    const [senha, alteraSenha] = useState("")

    function autenticar(e) {
        e.preventDefault()

        const objeto = {
            email: email,
            senha: senha,
        }

        console.log(objeto)

        if (objeto.email.length < 3) {
            alert("Usuário muito curto")
            return
        }
        if (objeto.email.length > 100) {
            alert("Usuário muito longo!")
            return
        }
        if (objeto.email.includes("@") == false || objeto.email.includes(".") == false) {
            alert("o E-mail deve ter @ e um ponto")
            return

        }
        if (objeto.email == "admin@admin.com" && objeto.senha == "123123") {
            //alert("Parabéns! voce foi conectado com sucesso!")
            alteraAutenticado(true)
        } else {
            alert("E-mail ou senha invalidos....")
        }
    }
    return (
        <div>

            <h1>Login</h1>
            <hr></hr>

            <form onSubmit={autenticar}>


                <p> Digite seu E-mail:</p>
                <input onChange={e => alteraEmail(e.target.value)} />
                <p>Digite sua senha:</p>
                <input onChange={e => alteraSenha(e.target.value)} type="password" />
                <br></br>
                <button>Entrar</button>

            </form>
            <hr></hr>

            {
                //OPERADOR TERNÁRIO
                autenticado == true ?
                    <div>
                        <h1>Painel administrativo</h1>
                        <p>Voce está logado lindamente</p>
                        <button onClick={ ()=>alteraAutenticado(false)}>Sair</button>
                    </div>
                :
                    <p>Você ainda não está logado..</p>
        }





        </div>
    );
}

export default Autenticacao;

