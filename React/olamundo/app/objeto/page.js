'use client'
import { Alert } from "bootstrap";

function Objetos() {


    const listaNumeros = [3, 10, 9 ,7, 821 -9999]
    const listaNomes = ["Luan", "Marcio","Alex","Tanan"]

    const usuario = {
        nome: "Beatriz",
        dataNascimento: "24/01/1998",
        idade: 30,
        admin: true
    }
    
    const listaUsuarios = [
        {
            id: 7, 
            nome: "Quati",
            email: "quati.voador@patinete.br"
        },
        {
            id: 32, 
            nome: "Boro",
            email: "boro.chocorate@patinete.br"
        },
        {
            id: 32, 
            nome: "Ornitorrinco",
            email: "o_lojista@patinete.br"
        }
    ]

    

    return (
        <div>
            <h1>Objetos em JavaScript</h1>
            <p>Conhecendo o famoso Jason, a estrutura mais usada na programação</p>
            
            <p>Seja bem-vindo {usuario.nome}, voce nasceu em {usuario.dataNascimento} e tem {usuario.idade} anos</p>
            <p> Top 5 Melhores numeros: {listaNumeros[1]}</p>
            <p>Top 3 bichos: {listaUsuarios[2].nome}</p>

        </div>

    );
}

export default Objetos;

