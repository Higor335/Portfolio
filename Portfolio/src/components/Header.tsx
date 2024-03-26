import "../styles/Header.scss"

export default function Header(){

    function scroLento(target: string){
        const headerHeight = 125;
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
            <a className="botaoGHUB" target="_blank" href="https://github.com/Higor335/"><img src="src\assets\github-icon1.png" alt="logo" className="logo"/><p className="nomeHeader">Higor Vital Lopo</p></a>
            <hr className="hrHeader"/>
            <div className="botoesCabecalho">
                <button onClick={() => scroLento('#inicio')}>INICIO</button>
                <button onClick={() => scroLento('#sobre')}>SOBRE</button>
                <button onClick={() => scroLento('#projetos')}>PROJETOS</button>
                <button onClick={() => scroLento('#contatos')}>CONTATOS</button>
            </div>
        </header>
    )
}