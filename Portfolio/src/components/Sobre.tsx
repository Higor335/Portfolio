import { useEffect } from "react";
import "../styles/Sobre.scss";

export default function Sobre() {
  useEffect(() => {
    const icons = document.querySelectorAll(".icon");
    const delay = 500; 
    const duration = 2600; 
    let timeout: number;

    const startAnimation = () => {
      let delayTime = 0;

      icons.forEach((icon) => {
        timeout = setTimeout(() => {
          icon.classList.add("in-viewport");
        }, delayTime);
        delayTime += delay;

        timeout = setTimeout(() => {
          icon.classList.remove("in-viewport");
        }, duration + delayTime);
      });

      timeout = setTimeout(startAnimation, delayTime + duration);
    };

    startAnimation();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div id="sobre">
      <h2>SOBRE MIM</h2>
      <br />
      <hr />
      <br />

      <div className="bloco">
        <img src="src\assets\eu.jpeg" alt="minha foto" className="minhaFoto" />

        <div className="info">
          <h3>
            Olá, Tudo Bem?<br /> Eu sou o Higor Vital Lopo 👋
          </h3>
          <p>
            Olá, meu nome é Higor e tenho 22 anos. Sou formado em{" "}
            <strong>Sistemas de Informação</strong> aficionado por{" "}
            <strong className="strong-light-blue">Desenvolvimento Web</strong>,{" "}
            <strong className="strong-green">Sistemas</strong> e aspirante a{" "}
            <strong className="strong-dark-purple">Desenvolvedor de Jogos</strong>{" "}
            👾. Após participar de competições de robótica em tempos de escola e ser
            recompensado com o prêmio de melhor programação do estado resolvi
            investir e me dedicar ao que realmente gosto...programar!
          </p>
          <p className="linguagensTitulo">Linguagens e Tecnologias</p>
          <fieldset className="linguagens">
            <img src="src\assets\Linguagens\html5.png" className="icon" alt="html5" />
            <img src="src\assets\Linguagens\css3.png" className="icon" alt="css3"/>
            <img src="src\assets\Linguagens\sass.png" className="icon" alt="sass" />
            <img src="src\assets\Linguagens\js.png" className="icon" alt="javascript" />
            <img src="src\assets\Linguagens\typescript.png" className="icon" alt="typescript" />
            <img src="src\assets\Linguagens\react.png" className="icon" alt="react" />
            <img src="src\assets\Linguagens\wordpress.png" className="icon" alt="wordpress" />
            <img src="src\assets\Linguagens\java.png" className="icon" alt="java" />
            <img src="src\assets\Linguagens\mysql.png" className="icon" alt="mysql" />
          </fieldset>
        </div>
      </div>

      <br />
    </div>
  );
}
