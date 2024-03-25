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
                    detalhes={'Site feito mesclando conhecimentos em FRONT-END (React+Vite, Typescript, HTML, SASS, Cache) e BACK-END  (Node-JS, Javascript e mongoDB). Site sem fins lucrativos. Todos os direitos autorais dos livros utilizados pertencem aos seus respectivos proprietários.'}
                    link={"https://higor335.github.io/BooksCorumba/"}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/CartaoDeVisitas.png"}
                    titulo={"CARTÃO DE VISITAS"}
                    descricao={"Projeto WEB de cartões de Visitas e Contatos"} 
                    detalhes="Projeto FRONT-END de cartões de Visitas/Contatos, com listagem, busca e exclusão de elementos, feito com REACT+VITE e TypeScript "
                    link={"https://higor335.github.io/Cartao-react-e-banco"}
                />
               
                <ProjetoBloco 
                    imagem={"src/assets/Projetos/Receitas.png"}
                    titulo={"REPOSITÓRIO DE RECEITAS"}
                    descricao={"Repositório web com mais de 235 receitas!"} 
                    detalhes="Projeto feito em React+Vite, estilizando e retornando em tela diferentes receitas obtidas no Afrodite.Json "
                    link={"https://higor335.github.io/REpoCIPES/"}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/Sputfy.png"}
                    titulo={"SPUTFY"}
                    descricao={"Projeto de player de músicas!"} 
                    detalhes="Meu primeiro projeto! esse website simula um player de músicas, feito utilizando HTML, CSS e JavaScript!"
                    link={"https://higor335.github.io/Site-Teste_SPUTFY/"}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/SpaceKiller2D.png"}
                    titulo={"SPACE KILLER 2D"}
                    descricao={"Jogo 2D feito em unity para desktop!"} 
                    detalhes="Em SPACE KILLER 2D você deve desviar de obstáculos, matar alienígenas e derrotar os chefões para enfim chegar na Terra! JOGO DE TIRO ESPACIAL 2D PARA PC-WINDOWS, feito utilizando Unity"
                    link={"https://itch.io/embed-upload/9315862?color=000044"}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/jogoDaForca1.png"}
                    titulo={"JOGO DA FORCA"}
                    descricao={"Jogo para celular feito no Android Studio!"} 
                    detalhes="Jogo da forca com mecânicas de SALVAMENTO LOCAL, PLACAR, uso de SENSORES de luz (para regular modo claro ou noturno do jogo) para celulares android, feito utilizando Java com AndroidStudio"
                    link={""}
                />

                <ProjetoBloco 
                    imagem={"src/assets/Projetos/EnigmaDungeon.png"}
                    titulo={"ENIGMA DUNGEON"}
                    descricao={"Jogo 3D feito em unity para desktop!"} 
                    detalhes="Em Enigma Dungeon, explore uma masmorra sombria, resolva puzzles e encare desafios para alcançar a liberdade! JOGO 3D DE PUZZLE E PLATAFORMA PARA DESKTOP FEITO EM UNITY."
                    link={""}
                />

            </div>
        </div>
    )
}