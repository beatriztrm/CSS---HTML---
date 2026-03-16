'use client'

import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
const supabase = createClient('https://ryfogxyfmugjobgnjzcj.supabase.co', 'sb_publishable_3IFQXfW3St8AFaR-QOrgMQ_4Xnbv6Kv')

function Livros() {

    const [nome, alteraNome] = useState("")
    const [categoria, alteraCategoria] = useState("")
    const [autor, alteraAutor] = useState("")
    const [preco, alteraPreco] = useState()
    const [editora, alteraEditora] = useState("")

    const [livros, alteraLivros] = useState([])

    async function buscar() {
        const { data, error } = await supabase
            .from('livros')
            .select()
        console.log(data)
        alteraLivros(data)
    }

    async function salvar() {

        const objeto = {
            nome: nome,
            categoria: categoria,
            preco: preco.replaceAll(",","."),
            editora: editora,
            autor: autor


        }

        const { error } = await supabase
            .from('livros')
            .insert(objeto)

        console.log(error)

        if(error == null){
            alert("Livro cadastrado com sucesso!")
            alteraNome("")
            alteraAutor("")
            alteraEditora("")
            alteraPreco("")
            alteraCategoria("")

        }else alert("Dados inválidos, verifique os campos e tente novamente...")

    }

    return (
        <div>
            <h1>Livros</h1>
            <p>Dados dos livros que vieram o banco</p>
            <hr></hr>

            <p>Digite o nome do Livro:</p>
            <input value={nome} onChange={e => alteraNome(e.target.value)} />
            <br></br>
            <p>Digite a categoria do Livro:</p>
            <input value={categoria} onChange={e => alteraCategoria(e.target.value)} />
            <p>Digite o autor do Livro:</p>
            <input value={autor} onChange={e => alteraAutor(e.target.value)} />
            <br></br>
            <p>Digite o preço do Livro:</p>
            R$ <input value={preco} onChange={e => alteraPreco(e.target.value)} />
            <br></br>
            <p>Digite a editora do Livro:</p>
            <input value={editora} onChange={e => alteraEditora(e.target.value)} />
            <br></br>

            <button onClick={salvar}>Salvar</button>


            <button onClick={buscar}>Carregar livros</button>

            <ul>
                {
                    livros.map(
                        item => <li>Título: {item.nome} no preço {item.preco}</li>
                    )
                }
            </ul>

        </div>

    );
}

export default Livros;