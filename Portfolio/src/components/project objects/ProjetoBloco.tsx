import "../../styles/Projetos.scss"

interface Bloco{
    imagem:string, 
    titulo:string,
    descricao:string,
    detalhes:string,
    link:string
}


function toggleContent(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = event.currentTarget as HTMLDivElement;
    element.classList.toggle('flipped');
    const content = element.querySelector('.conteudoOculto') as HTMLElement;
    content.classList.toggle('hidden');
}



function ProjetoBloco({imagem, titulo, descricao, detalhes, link}:Bloco){
    
    return(        
        <div className="blocos" onClick={toggleContent}>

            <img className="capa" src={imagem} alt={titulo} />
            <h3>{titulo}</h3><hr />
            <p className="desc">{descricao}</p>
            <a className="botao" href={link} target="_blank"><button>Ver Projeto</button></a>
            
            <div className="conteudoOculto">
                <img src={imagem} alt={titulo} />
                <p>{detalhes}</p>
                <a href={link} target="_blank"><button>Ver Projeto</button></a>
            </div>
        </div>


    
    )
}

export default ProjetoBloco;