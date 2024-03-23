import "../../styles/Projetos.scss"

interface Bloco{
    imagem:string, 
    titulo:string,
    descricao:string,
    link:string
}

function ProjetoBloco({imagem, titulo, descricao, link}:Bloco){
    return(        
        <div className="blocos">
                <img src={imagem} alt={titulo} />
                <h3>{titulo}</h3><hr />
                <p>{descricao}</p>
                <a href={link} target="_blank"><button>Ver Projeto</button></a>
        </div>        
    )
}

export default ProjetoBloco;