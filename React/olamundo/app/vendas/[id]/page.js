'use client'
import supabase from "@/app/conexao/supabase";
import { useParams } from "next/navigation";

async function ConsultaVendas() {


    const params = useParams()

    const { data, error } = await supabase
        .from('vendas')
        .select()
        .eq('id', params.id)

    return (
        <div>
            <h1>Consulta de vendas</h1>
            <hr></hr>
            <p>ID da venda é: {params.id}</p>
            <p>comprador:  {params.usuario}</p>
            <p>Produto: {params.livro}</p>
            <p>Quantidade: {params.quantidade}</p>
            <p>Data da Compra: {params.created.id}</p>

        </div>

    );
}

export default ConsultaVendas;