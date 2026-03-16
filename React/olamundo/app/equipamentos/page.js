function Equipamentos() {

     const listaEquipamentos = [
        {
            id: 0, 
            nome: "Chave de fenda",
            valor: "8.5"
        },
         {
            id: 1, 
            nome: "Serrote",
            valor: "29,90"
        },
         {
            id: 2, 
            nome: "Martelo",
            valor: "15,25"
        },
        
        
    ]

    return (  

       
        <div>
            <h1>Listagem de equipamentos</h1>
            <ul>
            <li><strong>Item:</strong> Chave de fenda R${listaEquipamentos[0].valor} (Serve para por em fendas)</li>
            <li><strong>Item:</strong> serrote R${listaEquipamentos[1].valor} (Serra coisas que terminam com 'ote')</li>
            <li><strong>Item:</strong> Martelo R${listaEquipamentos[2].valor} (Martela o martelão)</li>
            </ul>
        </div>
        
    );
}

export default Equipamentos;