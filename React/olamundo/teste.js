function App(){
const [numero, setNumero] = useState(0);

function aumentar(){
 setNumero((prevState) => prevState + 1)
}

function diminuir(){
    setNumero((prevState) => prevState - 1)

}

return(
    <div className="App">
        <header className="App-header">
    <h1>{numero}</h1>
    <button>+</button>
    <button>-</button>
        </header>
    </div>
)

}

export default App;