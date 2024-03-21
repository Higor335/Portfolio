import "../styles/Projetos.scss"

export default function Projetos(){
    return (
        <div id="projetos">
            <h2>MEUS PROJETOS</h2>
            <br /><hr /><br />

            <div className="conteudo">
                <div className="blocos">
                    <img src="src\assets\Projetos\BooksCorumba.png" alt="BooksCorumba" />
                    <h3>BOOKS CORUMBÁ</h3><hr />
                    <p>Site Completo simulando uma loja de livros!</p>
                </div>

                <div className="blocos">
                    <img src="src\assets\Projetos\Receitas.png" alt="Receitas" />
                    <h3>REPOSITÓRIO DE RECEITAS</h3><hr />
                    <p>Repositório web com mais de 235 receitas!</p>
                </div>

                <div className="blocos">
                    <img src="src\assets\Projetos\Sputfy.png" alt="Sputfy" />
                    <h3>SPUTFY</h3><hr />
                    <p>Projeto de player de músicas</p>
                </div>

                <div className="blocos">
                    <img src="src\assets\Projetos\SpaceKiller2D.png" alt="spacekiller" />
                    <h3>SPACE KILLER 2D</h3><hr />
                    <p>Jogo 2D feito em unity!</p>
                </div>

                <div className="blocos">
                    <img src="src\assets\Projetos\SpaceKiller2D.png" alt="spacekiller" />
                    <h3>Space Killer 2D</h3><hr />
                    <p>Jogo 2D feito em unity</p>
                </div>

                

            </div>
        </div>
    )
}