'use client'
import { useState } from "react";

function Estados () {

    //const nome = "Beatriz"

    const [nome, alteraNome] = useState("")
    const [senha, alteraSenha] = useState("")
    const [email, alteraEmail] = useState("")

    function salvar(){
        alert("O nome é "+nome+" e a senha é "+senha+" e o seu e-mail é: "+email)
    }

   

    return ( 
        <div>
            <h1>Programação em React com estados</h1>
            <p>Digite o seu nome:</p>
            <input onChange={ e => alteraNome(e.target.value) } /> 

             <p>Digite sua senha:</p>
            <input type="password" onChange={ e => alteraSenha(e.target.value) } />

            <p>Digite sua senha:</p>
            <input type="email" onChange={ e => alteraEmail(e.target.value) } />

            <button onClick={salvar}>Salvar</button>
            
        </div>
     );
}

export default Estados;

