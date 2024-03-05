import "../styles/Header.scss"

export default function Header(){

    function scroLento(target: string){
        const headerHeight = 95;
        const element = document.querySelector(target);
        if (element) {
            const topOffset = (element as HTMLElement).offsetTop - headerHeight;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    }

    return(
        <header>
            <a href=""><img src="src\assets\icone.png" alt="logo" className="logo"/></a>
            <div className="botoesCabecalho">
                <button onClick={() => scroLento('#inicio')}>Inicio</button>
                <button onClick={() => scroLento('#sobre')}>Sobre</button>
                <button onClick={() => scroLento('#projetos')}>Projetos</button>
                <button onClick={() => scroLento('#contatos')}>Contatos</button>
            </div>
        </header>
    )
}