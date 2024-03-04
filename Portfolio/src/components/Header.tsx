import "../styles/Header.scss"

function Header(){
    return(
        <>
            <header>
                <img src="" alt="logo" className="logo"/>
                <div className="botoesCabecalho">
                    <button>Inicio</button>
                    <button>Sobre</button>
                    <button>Projetos</button>
                    <button>Contatos</button>
                </div>
            </header>
        </>
    )
}

export default Header;