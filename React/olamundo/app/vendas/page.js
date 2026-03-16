'use client'
import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";
supabase


function Vendas() {


    const [listaVendas, alteraListaVendas] = useState([])

    async function buscaTodos() {
        const { data, error } = await supabase
            .from('vendas')
            .select()
        console.log(error)

        alteraListaVendas(data)
    }

        useEffect(()=>{
            buscaTodos()
        },[])


    return (
        <div>

            <h1>Vendas</h1>
            <hr />

            <table class="table">
                <tr>
                    <td>Nome</td>
                    <td>Produtp</td>
                    <td>Quantidade</td>
                    <td>Forma de pagamento</td>
                    <td>Data</td>
                </tr>

            </table>




        </div>
    );
}

export default Vendas;