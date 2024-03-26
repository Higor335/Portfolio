import "../../styles/Projetos.scss"
import SETA from "../../assets/seta.png"

interface Bloco{
    imagem:string, 
    titulo:string,
    descricao:string,
    detalhes:string,
    link:string,
    item:string
}


function toggleContent(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = event.currentTarget as HTMLDivElement;
    element.classList.toggle('flipped');
    const content = element.querySelector('.conteudoOculto') as HTMLElement;
    content.classList.toggle('hidden');
}



function ProjetoBloco({imagem, titulo, descricao, detalhes, link, item}:Bloco){
    
    let botaodesc="";

    switch (item){
        case "projeto":
            botaodesc="Ver Projeto";
            break;
        case "jogo2D":
            botaodesc="Jogar"
            break;
        case "jogo3D":
        case "android":
            botaodesc="Baixar"
            break;
        case "github":
            botaodesc="Ver Projetos"
            break;        
        default:
            botaodesc="Ver Projeto"
            break;
    }

    return(        
        <div className="blocos" onClick={toggleContent}>
            <img className="capa" src={imagem} alt={titulo} />
            <h3>{titulo}</h3><hr />
            <p className="desc">{descricao}</p>
            <div className="botoesFrente">
                <a className="botao" href={link} target="_blank" download={item === "android" ? true : undefined}><button>{botaodesc}</button></a>
                <img className="seta" src={SETA} alt="seta" />
            </div>

            <div className="conteudoOculto">                
                <img src={imagem} alt={titulo} className="imgCapa"/>                                
                <p>SOBRE O PROJETO: <br /><br />{detalhes}</p>
                <a href={link} target="_blank"><button>{botaodesc}</button></a>
            </div>
        </div>


    
    )
}

export default ProjetoBloco;