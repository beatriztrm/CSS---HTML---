'use client'
import { useEffect, useState } from "react";

function Carros() {

    const [autenticado, alteraAutenticado] = useState(false)
    const [exibeListagem, alteraExibeListagem] = useState(true)

    const [nome, alteraNome] = useState("")
    const [marca, alteraMarca] = useState("")
    const [valor, alteraValor] = useState()


    const [listaCarros, alteraListaCarros] = useState([
        {
            nome: "Civic",
            marca: "Honda",
            cor: "Preto",
            valor: 120000
        },
        {
            nome: "Corolla",
            marca: "Toyota",
            cor: "Branco",
            valor: 115000
        },
        {
            nome: "Onix",
            marca: "Chevrolet",
            cor: "Prata",
            valor: 75000
        },
        {
            nome: "HB20",
            marca: "Hyundai",
            cor: "Vermelho",
            valor: 80000
        },
        {
            nome: "Gol",
            marca: "Volkswagen",
            cor: "Cinza",
            valor: 65000
        },
        {
            nome: "Renegade",
            marca: "Jeep",
            cor: "Azul",
            valor: 135000
        },
        {
            nome: "Compass",
            marca: "Jeep",
            cor: "Preto",
            valor: 160000
        },
        {
            nome: "Kwid",
            marca: "Renault",
            cor: "Branco",
            valor: 60000
        },
        {
            nome: "Fiesta",
            marca: "Ford",
            cor: "Prata",
            valor: 55000
        },
        {
            nome: "Argo",
            marca: "Fiat",
            cor: "Vermelho",
            valor: 70000
        }
    ])


    function salvar(e) {
        e.preventDefault()

        const objeto = {
            nome: nome,
            marca: marca,
            cor: "Preto",
            valor: valor,

        }

        alteraListaCarros(listaCarros.concat(objeto))

    }
    useEffect(() => {

        const logado = localStorage.getItem("logado")
        if (logado == "true") {
            alteraAutenticado(true)
        }

    }, [])
    return (
        <div>

            <h1>Lista de carros</h1>
            <hr></hr>
            <button onClick={() => alteraExibeListagem(true)} className="btn btn-success">LISTAGEM</button>

        {
            autenticado == true ?
            <div>

                <button onClick={() => alteraExibeListagem(false)} className="btn btn-primary mx-4">CADASTRO</button>
            </div>
            :
            <div></div>
        }
            


            {
                exibeListagem == true ?
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Cor</th>
                            <th scope="col">Valor</th>
                        </tr>
                        </thead>
                        
                        
                        <tbody>

                            {
                                listaCarros.map(

                                    item => <tr>

                                        <td scope="row ">{item.nome}</td>
                                        <td>{item.marca}</td>
                                        <td>{item.cor}</td>
                                        <td> R$ {item.valor}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    :
                    <form onSubmit={salvar}>

                        <p>Digite o nome do Carro: </p>
                        <input onChange={e => alteraNome(e.target.value)} />
                        <p>Digite a marca: </p>
                        <input onChange={e => alteraMarca(e.target.value)} />
                        <p>Digite o valor: </p>
                        <input onChange={e => alteraValor(e.target.value)} />
                        <br></br>

                        <button>Salvar</button>



                    </form>


            }





        </div >
    )
};


export default Carros;