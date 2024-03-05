import "../styles/Header.scss"

export default function Header(){
    return(
        <header>
            <a href=""><img src="src\assets\icone.png" alt="logo" className="logo"/></a>
            <div className="botoesCabecalho">
                <button>Inicio</button>
                <button>Sobre</button>
                <button>Projetos</button>
                <button>Contatos</button>
            </div>
        </header>
    )
}