'use client'
import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";
supabase


function Vendas() {

    const [usuario, alteraUsuario] = useState()
    const [livro, alteraLivro] = useState()
    const [quantidade, alteraQuantidade] = useState()
    const [pagamento, alteraPagamento] = useState()

    const [listaVendas, alteraListaVendas] = useState([])
    const [listaUsuarios, alteraListaUsuarios] = useState([])
    const [listaLivros, alteraListaLivros] = useState([])


    async function buscaLivros() {

        const { data, error } = await supabase
            .from('livros')
            .select()
        alteraListaLivros(data)
    }



    async function buscaUsuarios() {

        const { data, error } = await supabase
            .from('usuarios')
            .select()
        alteraListaUsuarios(data)
    }



    async function buscaTodos() {




        const { data, error } = await supabase
            .from('vendas')
            .select(`
                *,
                id_usuario(*),
                id_livro(*)
                `)

        console.log(data)




        alteraListaVendas(data)
    }

    function formataData(data) {
        let data_Formatada = new Date(data)
        data_Formatada = data_Formatada.toLocaleDateString()
        return data_Formatada

    }

    function formataHoras(horas) {
        let horas_Formatadas = new Date(horas)
        horas_Formatadas = horas_Formatadas.toLocaleTimeString()
        return horas_Formatadas

    }

    function formataPagamento(pagamento) {

        if (pagamento == "Pix") {
            return <span class="badge bg-success">PIX</span>
        }


        if (pagamento == "Cartão de Crédito") {
            return <span class="badge bg-danger">Cartão de Crédito</span>
        }


        if (pagamento == "Boleto") {
            return <span class="badge bg-secondary">Boleto</span>
        }


        if (pagamento == "Cartão de Débito") {
            return <span class="badge bg-danger">Cartão de Débito</span>
        }

        if (pagamento == "Dinheiro") {
            return <span class="badge bg-warning text-dark">Dinheiro</span>
        }


    }
    async function salvar(e) {
        e.preventDefault()

        const objeto = {
            id_usuario: usuario,
            id_livro: livro,
            quantidade: quantidade,
            pagamento: pagamento,
        }
        console.log(objeto)

        const { error } = await supabase.from('vendas').insert(objeto)
        console.log(error)
    }




    useEffect(() => {
        buscaTodos()
        buscaUsuarios()
        buscaLivros()
    }, [])


    return (
        <div>

            <h1>Vendas</h1>
            <hr />

            <form onSubmit={salvar}>
                <p>Selecione o usuário</p>
                <select onChange={e => alteraUsuario(e.target.value)}>
                    {
                        listaVendas.map(
                            item => <option value={item.id_usuario.id}>{item.id_usuario.nome}</option>
                        )
                    }
                </select>
                <p>Selecione o Livro</p>

                <select onChange={e => alteraLivro(e.target.value)}>
                    {
                        listaVendas.map(
                            item => <option value={item.id_livro.id}>{item.id_livro.titulo}</option>
                        )
                    }
                </select>

                <p>Digite a quantidade</p>
                <input onChange={e => alteraQuantidade(e.target.value)} />
                <p>Digite o pagamento</p>
                <input onChange={e => alteraPagamento(e.target.value)} />
                <br></br>
                <br></br>
                <button>Salvar</button>

            </form>

            <hr></hr>

            <table class="table">
                <tr>
                    <td>#</td>
                    <td>Nome</td>
                    <td>Livro</td>
                    <td>Quantidade</td>
                    <td>Forma de pagamento</td>
                    <td>Data</td>
                </tr>

                {
                    listaVendas.length == 0 ?
                        <p>Carregando..</p>
                        :
                        listaVendas.map(
                            (item, index) => <tr>
                                <td>{index}</td>
                                <td> {item.id_usuario.nome} </td>
                                <td> {item.id_livro.titulo} </td>
                                <td> {item.quantidade}</td>
                                <td>{formataPagamento(item.pagamento)}</td>
                                <td>{formataData(item.created_at)} às {formataHoras(item.created_at)}</td>
                            </tr>
                        )
                }


            </table>




        </div>
    );
}

export default Vendas;