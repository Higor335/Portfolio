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
                    descricao={"Site Completo simulando uma loja de livros!"} 
                    link={"https://higor335.github.io/BooksCorumba/"}
                />
               
                <ProjetoBloco 
                    imagem={"src/assets/Projetos/Receitas.png"}
                    titulo={"REPOSITÓRIO DE RECEITAS"}
                    descricao={"Repositório web com mais de 235 receitas!"} 
                    link={"https://higor335.github.io/REpoCIPES/"}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/Sputfy.png"}
                    titulo={"SPUTFY"}
                    descricao={"Projeto de player de músicas!"} 
                    link={"https://higor335.github.io/Site-Teste_SPUTFY/"}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/SpaceKiller2D.png"}
                    titulo={"SPACE KILLER 2D"}
                    descricao={"Jogo 2D feito em unity para desktop!"} 
                    link={"https://itch.io/embed-upload/9315862?color=000044"}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/jogoDaForca1.png"}
                    titulo={"JOGO DA FORCA"}
                    descricao={"Jogo para celular feito no Android Studio!"} 
                    link={""}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/EnigmaDungeon.png"}
                    titulo={"ENIGMA DUNGEON"}
                    descricao={"Jogo 3D feito em unity para desktop!"} 
                    link={""}
                />
            </div>
        </div>
    )
}