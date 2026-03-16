import "./listagem.css"

function Listagem() {

    const listaAves = [
        {
            nome: "Arara Azul",
            cor: "Azul e amarelo",
            especie: "Anodorhynchus hyacinthinus",
            habitat: "Pantanal e Cerrado",
            alimentacao: "Frutas, sementes e castanhas"
        },
        {
            nome: "Tucano",
            cor: "Preto com bico laranja",
            especie: "Ramphastos toco",
            habitat: "Florestas tropicais",
            alimentacao: "Frutas, insetos e pequenos animais"
        },
        {
            nome: "Bem-te-vi",
            cor: "Amarelo, branco e preto",
            especie: "Pitangus sulphuratus",
            habitat: "Áreas urbanas e campos abertos",
            alimentacao: "Insetos e frutas"
        },
        {
            nome: "Coruja-buraqueira",
            cor: "Marrom com manchas claras",
            especie: "Athene cunicularia",
            habitat: "Campos e pastagens",
            alimentacao: "Insetos e pequenos roedores"
        },
        {
            nome: "Pardal",
            cor: "Marrom e cinza",
            especie: "Passer domesticus",
            habitat: "Áreas urbanas",
            alimentacao: "Grãos e restos de alimento"
        },
        {
            nome: "Flamingo",
            cor: "Rosa",
            especie: "Phoenicopterus chilensis",
            habitat: "Lagos e lagoas salinas",
            alimentacao: "Algas e pequenos crustáceos"
        },
        {
            nome: "Águia-careca",
            cor: "Marrom com cabeça branca",
            especie: "Haliaeetus leucocephalus",
            habitat: "Próximo a rios e lagos",
            alimentacao: "Peixes e pequenos mamíferos"
        },
        {
            nome: "Canário",
            cor: "Amarelo",
            especie: "Serinus canaria",
            habitat: "Áreas abertas e domésticas",
            alimentacao: "Sementes"
        },
        {
            nome: "Pinguim",
            cor: "Preto e branco",
            especie: "Aptenodytes forsteri",
            habitat: "Regiões polares",
            alimentacao: "Peixes e krill"
        },
        {
            nome: "Garça-branca",
            cor: "Branca",
            especie: "Ardea alba",
            habitat: "Áreas alagadas e rios",
            alimentacao: "Peixes e anfíbios"
        },
        {
            nome: "João-de-barro",
            cor: "Marrom e bege",
            especie: "Furnarius rufus",
            habitat: "Campos abertos e áreas urbanas",
            alimentacao: "Insetos e larvas"
        },
        {
            nome: "Sabiá-laranjeira",
            cor: "Marrom com peito alaranjado",
            especie: "Turdus rufiventris",
            habitat: "Jardins e florestas",
            alimentacao: "Frutas e insetos"
        },
        {
            nome: "Andorinha",
            cor: "Azul-escuro e branco",
            especie: "Progne chalybea",
            habitat: "Áreas urbanas e campos",
            alimentacao: "Insetos"
        },
        {
            nome: "Gavião-carijó",
            cor: "Cinza e branco rajado",
            especie: "Rupornis magnirostris",
            habitat: "Matas e áreas urbanas",
            alimentacao: "Pequenos vertebrados"
        },
        {
            nome: "Beija-flor",
            cor: "Verde metálico",
            especie: "Chlorostilbon lucidus",
            habitat: "Jardins e florestas",
            alimentacao: "Néctar e pequenos insetos"
        },
        {
            nome: "Maritaca",
            cor: "Verde",
            especie: "Psittacara leucophthalmus",
            habitat: "Florestas e áreas urbanas",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Papagaio-verdadeiro",
            cor: "Verde com detalhes amarelos",
            especie: "Amazona aestiva",
            habitat: "Florestas tropicais",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Curió",
            cor: "Preto e marrom",
            especie: "Sporophila angolensis",
            habitat: "Campos e bordas de mata",
            alimentacao: "Sementes"
        },
        {
            nome: "Cardeal",
            cor: "Vermelho",
            especie: "Paroaria coronata",
            habitat: "Campos e áreas abertas",
            alimentacao: "Sementes e insetos"
        },
        {
            nome: "Pica-pau",
            cor: "Preto, branco e vermelho",
            especie: "Colaptes campestris",
            habitat: "Campos e florestas",
            alimentacao: "Insetos"
        },
        {
            nome: "Albatroz",
            cor: "Branco e cinza",
            especie: "Diomedea exulans",
            habitat: "Oceanos",
            alimentacao: "Peixes e lulas"
        },
        {
            nome: "Gaivota",
            cor: "Branco e cinza",
            especie: "Larus dominicanus",
            habitat: "Regiões costeiras",
            alimentacao: "Peixes e restos orgânicos"
        },
        {
            nome: "Cisne",
            cor: "Branco",
            especie: "Cygnus olor",
            habitat: "Lagos e rios",
            alimentacao: "Plantas aquáticas"
        },
        {
            nome: "Falcão-peregrino",
            cor: "Cinza e branco",
            especie: "Falco peregrinus",
            habitat: "Montanhas e áreas urbanas",
            alimentacao: "Outras aves"
        },
        {
            nome: "Urubu",
            cor: "Preto",
            especie: "Coragyps atratus",
            habitat: "Áreas abertas e urbanas",
            alimentacao: "Carcaças"
        },
        {
            nome: "Ema",
            cor: "Cinza",
            especie: "Rhea americana",
            habitat: "Campos e cerrados",
            alimentacao: "Plantas e insetos"
        },
        {
            nome: "Periquito",
            cor: "Verde",
            especie: "Brotogeris tirica",
            habitat: "Florestas e cidades",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Corvo",
            cor: "Preto",
            especie: "Corvus corax",
            habitat: "Diversos ambientes",
            alimentacao: "Onívoro"
        },
        {
            nome: "Calopsita",
            cor: "Cinza com amarelo",
            especie: "Nymphicus hollandicus",
            habitat: "Regiões áridas (Austrália)",
            alimentacao: "Sementes"
        },
        {
            nome: "Arara-vermelha",
            cor: "Vermelho, azul e amarelo",
            especie: "Ara chloropterus",
            habitat: "Florestas tropicais",
            alimentacao: "Frutas e castanhas"
        },
        {
            nome: "Pelicano",
            cor: "Branco e cinza",
            especie: "Pelecanus occidentalis",
            habitat: "Regiões costeiras",
            alimentacao: "Peixes"
        },
        {
            nome: "Rolinha",
            cor: "Cinza e marrom",
            especie: "Columbina talpacoti",
            habitat: "Áreas urbanas e campos",
            alimentacao: "Sementes"
        },
        {
            nome: "Pomba",
            cor: "Cinza",
            especie: "Columba livia",
            habitat: "Cidades",
            alimentacao: "Grãos"
        },
        {
            nome: "Garça-azul",
            cor: "Azulada",
            especie: "Egretta caerulea",
            habitat: "Manguezais e rios",
            alimentacao: "Peixes"
        },
        {
            nome: "Tangará",
            cor: "Colorido",
            especie: "Chiroxiphia caudata",
            habitat: "Mata Atlântica",
            alimentacao: "Frutas e insetos"
        },
        {
            nome: "Saíra",
            cor: "Azul e verde",
            especie: "Tangara seledon",
            habitat: "Florestas",
            alimentacao: "Frutas"
        },
        {
            nome: "Mutum",
            cor: "Preto",
            especie: "Crax fasciolata",
            habitat: "Florestas",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Quero-quero",
            cor: "Cinza, branco e preto",
            especie: "Vanellus chilensis",
            habitat: "Campos e áreas abertas",
            alimentacao: "Insetos"
        },
        {
            nome: "Tico-tico",
            cor: "Marrom e bege",
            especie: "Zonotrichia capensis",
            habitat: "Jardins e campos",
            alimentacao: "Sementes"
        },
        {
            nome: "Cacatua",
            cor: "Branca",
            especie: "Cacatua alba",
            habitat: "Florestas tropicais",
            alimentacao: "Frutas e sementes"
        }
    ];


    return (
        <div>
            <h1>Listagem de aves bonitas</h1>

            <hr></hr>

            {
                listaAves.map(
                    item => <p>{item.nome} da espécie {item.especie} vive em {item.habitat} e se alimenta de {item.alimentacao}</p>
                )
            }

        </div>
    );
}

export default Listagem;