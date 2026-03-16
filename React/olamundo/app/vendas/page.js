import { useState } from "react";
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



    return (
        <div>

            <h1>Vendas</h1>
            <hr />




        </div>
    );
}

export default Vendas;