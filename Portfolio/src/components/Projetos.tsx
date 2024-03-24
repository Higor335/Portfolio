import "../styles/Projetos.scss"
import ProjetoBloco from "./project objects/ProjetoBloco"

export default function Projetos(){
    return (
        <div id="projetos">
            <h2>MEUS PROJETOS</h2>
            <br /><hr /><br />

            <div className="conteudo">

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/BooksCorumba.png"}
                    titulo={"BOOKS CORUMBÁ"}
                    descricao={"Loja digital de livros, com tecnologias de front e back-end!"} 
                    detalhes={'Site feito mesclando conhecimentos em FRONT-END e BACK-END, sendo o Front feito em React+Vite, Typescript, HTML, SASS. Enquanto o Back-end foi feito utilizando Node-JS e Javascript, junto ao mongoDB. Site sem fins lucrativos. Todos os direitos autorais dos livros utilizados pertencem aos seus respectivos proprietários.'}
                    link={"https://higor335.github.io/BooksCorumba/"}
                />
               
                <ProjetoBloco 
                    imagem={"src/assets/Projetos/Receitas.png"}
                    titulo={"REPOSITÓRIO DE RECEITAS"}
                    descricao={"Repositório web com mais de 235 receitas!"} 
                    detalhes=""
                    link={"https://higor335.github.io/REpoCIPES/"}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/Sputfy.png"}
                    titulo={"SPUTFY"}
                    descricao={"Projeto de player de músicas!"} 
                    detalhes=""
                    link={"https://higor335.github.io/Site-Teste_SPUTFY/"}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/SpaceKiller2D.png"}
                    titulo={"SPACE KILLER 2D"}
                    descricao={"Jogo 2D feito em unity para desktop!"} 
                    detalhes=""
                    link={"https://itch.io/embed-upload/9315862?color=000044"}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/jogoDaForca1.png"}
                    titulo={"JOGO DA FORCA"}
                    descricao={"Jogo para celular feito no Android Studio!"} 
                    detalhes=""
                    link={""}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/EnigmaDungeon.png"}
                    titulo={"ENIGMA DUNGEON"}
                    descricao={"Jogo 3D feito em unity para desktop!"} 
                    detalhes=""
                    link={""}
                />
            </div>
        </div>
    )
}