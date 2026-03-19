'use client'
import supabase from "@/app/conexao/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ConsultaVendas() {


    const params = useParams()

    const [listaVendas, alteraListaVendas] = useState([])

    async function buscaVendas() {

        const { data, error } = await supabase
            .from('vendas')
            .select(`
                *,
                id_usuario(*),
                id_livro(*)
                `)
            .eq('id', params.id)

        alteraListaVendas(data)
    }

    useEffect(() => {
        buscaVendas()
    }, [])


    return (
        <div>
            <h1>Consulta de vendas</h1>
            <hr></hr>

            {listaVendas.map(
                item =>
                <div>

                    <p>ID da venda é: {item.id}</p>
                    <p>Comprador:  {item.id_usuario.nome}</p>
                    <p>Produto: {item.id_livro.titulo}</p>
                    <p>Quantidade: {item.quantidade}</p>
                    <p>Data da Compra: {item.created_at}</p>


                </div>
            )}



        </div>

    );
}

export default ConsultaVendas;