'use client'
import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";
import "./vendas.css"
supabase


function Vendas() {

    const [usuario, alteraUsuario] = useState()
    const [livro, alteraLivro] = useState()
    const [quantidade, alteraQuantidade] = useState()
    const [pagamento, alteraPagamento] = useState()
    const [observacao, alteraObservacao] = useState()


    const [editando, alteraEditando] = useState(null)

    const [listaVendas, alteraListaVendas] = useState([])
    const [listaUsuarios, alteraListaUsuarios] = useState([])
    const [listaLivros, alteraListaLivros] = useState([])

    const [inputpesquisaPagamento, alteraInputPesquisaPagamento] = useState()
    const [inputpesquisaObservacao, alteraInputPesquisaObservacao] = useState()
    const [inputPesquisaData, alteraInputPesquisaData] = useState()
    const [inputpesquisaUsuario, alteraInputPesquisaUsuario] = useState()
    const [inputpesquisaProduto, alteraInputPesquisaProduto] = useState()




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

    async function excluir(id) {
        const opcao = confirm("Tem certeza que deseja excluir?..")
        if (opcao == false) {
            return
        }

        const response = await supabase.from('vendas').delete().eq('id', id)

    }

    function editar(objeto) {

        //colocar um altera para cada editar e add value ao lado do input
        //colocar o operador ternario para se tornar automatico e aparecer o botão atualizar
        //trocar o true para quando for editar e colocar objeto.id

        alteraEditando(objeto.id)

        alteraQuantidade(objeto.quantidade)
        alteraPagamento(objeto.pagamento)
        alteraObservacao(objeto.observacao)


    }

    function cancelaEdicao() {
        alteraEditando(null)

        alteraQuantidade("")
        alteraPagamento("")
        alteraObservacao("")

    }

    async function atualizar() {

        const objeto = {
            quantidade: quantidade,
            pagamento: pagamento,
            observacao: observacao,
        }

        const { error } = await supabase
            .from('vendas')
            .update(objeto)
            .eq('id', editando)

        if (error == null) {
            alert("Atualização realizada com sucesso!")
            cancelaEdicao() //para limpar o formulario depois de atualizar, colocar depois do alert para ficar de forma automatica 
            buscaTodos() //colocar para ver a atualização na tabela
        } else {
            alert("Dados inválidos! Verifique os campos e tente novamente...")
        }

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
        //essas informações vão para o banco - colocar igual ao banco de dados
        const objeto = {
            id_usuario: usuario,
            id_livro: livro,
            quantidade: quantidade,
            pagamento: pagamento,
            observacao: observacao,
        }
        console.log(objeto)

        const { error } = await supabase.from('vendas').insert(objeto)
        console.log(error)

        buscaTodos()
    }

    //para guarddar a pesquisa criar a const e colocar no eq - lá embaixo colocar "Altera"

    //FUNÇÕES DE PESQUISA
    async function pesquisaPagamento() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*,id_usuario(*),id_livro(*)')
            .eq('pagamento', inputpesquisaPagamento)
        alteraListaVendas(data)

    }
    async function pesquisaObservacao() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*,id_usuario(*),id_livro(*)')
            .ilike('observacao', '%' + inputpesquisaObservacao + '%') //colocar % para pesquisar palavras parecidas
        alteraListaVendas(data)

    }
    async function pesquisaData() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*,id_usuario(*),id_livro(*)')
            .gt('created_at', inputPesquisaData + " 00:00:00+00")
            .lt('created_at', inputPesquisaData + " 23:59:00+00")

        alteraListaVendas(data)




    }
    async function pesquisaUsuario() {


        const { data, error } = await supabase
            .from('vendas')
            .select('*,id_usuario(*),id_livro(*)')
            .eq('Usuario', inputpesquisaUsuario)
        alteraListaVendas(data)


    }
    async function pesquisarProduto() {

        const { data, error } = await supabase
            .from('vendas')
            .select('*,id_usuario(*),id_livro(*)')
            .eq('Produto', inputpesquisaProduto)
        alteraListaVendas(data)



    }
    async function pesquisaVenda() {


        const { data, error } = await supabase
            .from('vendas')
            .select('*,id_usuario(*),id_livro(*)')
            .order('quantidade', { ascending: false }) //para colocar em ordem a partir do mais vendido
            .limit(1) //colocar para limiter a quantidade mostrada -- por ex. o item mais vendido
        alteraListaVendas(data)



    }
    async function pesquisaVendaHoje() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*,id_usuario(*),id_livro(*)')
            .gt('created_at', new Date().toISOString().split("T")[0] + " 00:00:00+00")
            .lt('created_at', new Date().toISOString().split("T")[0] + " 23:5:00+00")

        alteraListaVendas(data)



    }


    useEffect(() => {
        buscaTodos()
        buscaUsuarios()
        buscaLivros()
    }, [])


    return (
        <div>

            <a href="https://api.whatsapp.com/?phone=5516997441251&text=Olá, vim pelo site e gostaria de saber sobre os livros">

                <img class="whatsapp" src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png" />
            </a>

            <h1>Vendas</h1>
            <hr />

            <form onSubmit={salvar}>
                <p>Selecione o usuário</p>

                <select disabled={editando != null} onChange={e => alteraUsuario(e.target.value)}>
                    <option>Selecione...</option>

                    {
                        listaUsuarios.map(
                            item => <option value={item.id}>{item.nome}</option>
                        )
                    }
                </select>
                <p>Selecione o Livro</p>

                <select disabled={editando != null} onChange={e => alteraLivro(e.target.value)}>
                    <option>Selecione...</option>
                    {
                        listaLivros.map(
                            item => <option value={item.id}>{item.titulo}</option>
                        )
                    }
                </select>


                <p>Digite a quantidade</p>
                <input value={quantidade} onChange={e => alteraQuantidade(e.target.value)} />
                <p>Digite o pagamento</p>
                <input value={pagamento} onChange={e => alteraPagamento(e.target.value)} />
                <p>Digite uma observação</p>
                <input value={observacao} onChange={e => alteraObservacao(e.target.value)} />
                <br></br>
                <br></br>



                {
                    editando != null ?
                        <div>
                            <button onClick={atualizar}>Atualizar</button>
                            <button onClick={() => cancelaEdicao(false)}>Cancelar</button>
                        </div>
                        :
                        <button>Salvar</button>
                }

            </form>


            <h2>Filtros</h2>


            <p>Pesquisar o pagamento<input onChange={e => alteraInputPesquisaPagamento(e.target.value)} /> <button onClick={pesquisaPagamento}>Pesquisar</button></p>
            <p>Pesquisar observação<input onChange={e => alteraInputPesquisaObservacao(e.target.value)} /> <button onClick={pesquisaObservacao}>Pesquisar</button></p>
            <p>Pesquisar a data <input onChange={e => alteraInputPesquisaData(e.target.value)} type="date" /> <button onClick={pesquisaData}>Pesquisar</button></p>
            <p>Pesquisar pelo ID do usuario<input onChange={e => alteraInputPesquisaUsuario(e.target.value)} /> <button onClick={pesquisaUsuario}>Pesquisar</button></p>
            <p>Pesquisar pelo ID do produto<input onChange={e => alteraInputPesquisaProduto(e.target.value)} /> <button onClick={pesquisarProduto}>Pesquisar</button></p>
            <p>Filtrar por maiores vendas <button onClick={pesquisaVenda}>Pesquisar</button></p>
            <p>Ver vendas de hoje <button onClick={pesquisaVendaHoje}>Pesquisar</button></p>



            <table class="table table-hover">
                <tr>
                    <td>#</td>
                    <td>Nome</td>
                    <td>Livro</td>
                    <td>Quantidade</td>
                    <td>Forma de pagamento</td>
                    <td>observação</td>
                    <td>Data</td>
                    <td>Ações</td>

                </tr>

                {
                    listaVendas.length == 0 ?
                        <p>Carregando..</p>
                        :
                        listaVendas.map(
                            (item, index) => <tr >
                                <td>{index}</td>
                                <td> {item.id_usuario.nome} </td>
                                <td> {item.id_livro.titulo} </td>
                                <td> {item.quantidade}</td>
                                <td>{formataPagamento(item.pagamento)}</td>
                                <td>{item.observacao}</td>
                                <td>{formataData(item.created_at)} às {formataHoras(item.created_at)}</td>
                                <td><button onClick={() => location.href = "/vendas/" + item.id}>Ver</button><button onClick={() => excluir(item)}>Excluir</button><button onClick={() => editar(item)}>Editar</button></td>
                            </tr>
                        )
                }


            </table>




        </div>
    );
}

export default Vendas;

//usar o value para editar
//<button onClick={()=> alteraEditando(false)}>Cancelar</button> - para que o botão suma quando voce apertar cancelar
//colocar o async apenas quando for enviar para o banco
//disabled={false} - o campo select fica desbloqueado para edição
// disabled={true} - campo fica bloqueado paraedição
//<a href="https://api.whatsapp.com/?phone=5516997441251&text=Olá, vim pelo site e gostaria de saber sobre os livros"> img class="whatsapp" src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png" />
//usar para conectar o whatsapp com o site