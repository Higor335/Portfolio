import "../styles/Sobre.scss"

export default function Sobre(){
    return (
            <div id="sobre">
                <h2>SOBRE MIM</h2>
                <br /><hr /><br />

                <div className="bloco">
                    <img src="src\assets\eu.jpeg" alt="minha foto" className="minhaFoto"/>

                    <div className="blocoTexto">
                        <h3>Olá, Tudo Bem?<br /> Eu sou o Higor Vital Lopo 👋</h3>
                        <p>
                            Olá, meu nome é Higor e tenho 22 anos. Sou formado em <strong>Sistemas de Informação</strong> aficionado por <strong className="strong-light-blue">Desenvolvimento Web</strong>, <strong className="strong-green">Sistemas</strong> e aspirante a <strong className="strong-dark-purple">Desenvolvedor de Jogos</strong> 👾.
                            Após participar de competições de robótica em tempos de escola e ser recompensado com o prêmio de melhor programação do estado resolvi investir e me dedicar ao que realmente gosto...programar!
                        </p>
                    </div>

                </div>

                <br />

                <div className="linguagens">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
    )
}