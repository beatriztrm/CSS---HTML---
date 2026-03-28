'use client'
import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";

function Painel() {

    const id_usuario = localStorage.getItem("id_usuario")

   

    async function buscaUsuario() {
        const {data, error } = await supabase
        .from("usuarios")
        .select()
        .eq("id", id_usuario)

        console.log(data)
        
    }
    useEffect(()=>{
        buscaUsuario()
    },[] )

    return (
        <div>
            <h1> Painel de usuario</h1>
            <p>Seja bem-vindo</p>
            <button>Cadastrar novo funcionário</button>
        </div>


    );
}

export default Painel;