'use client'
import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";
supabase


function Vendas() {


    const [listaVendas, alteraListaVendas] = useState([])

    async function buscaTodos() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`
                *,
                id_usuario(*)
                id_livro(*)
                `)
                
                console.log(data)
                
                    
                

        alteraListaVendas(data)
    }

    function formataData(data){
        let data_Formatada = new Date(data)
        data_Formatada = data_Formatada.toLocaleDateString()
        return data_Formatada

    }

    function formataHoras(horas){
        let horas_Formatadas = new Date(horas)
        horas_Formatadas = horas_Formatadas.toLocaleDateString()
        return horas_Formatadas

    }



    useEffect(() => {
        buscaTodos()
    }, [])







    return (
        <div>

            <h1>Vendas</h1>
            <hr />

            <table class="table">
                <tr>
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
                            item => <tr>
                                <td> {item.id_usuario.nome} </td>
                                <td> {item.id_livro.nome} </td>
                                <td> {item.quantidade}</td>
                                <td>{item.pagamento}</td>
                                <td>{item.created_at}</td>
                            </tr>
                        )
                }


            </table>




        </div>
    );
}

export default Vendas;