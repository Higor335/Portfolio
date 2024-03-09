import React, { useEffect } from "react";
import "../styles/Sobre.scss";

export default function Sobre() {
  useEffect(() => {
    const icons = document.querySelectorAll(".icon");
    const delay = 500; // Delay de 0.5 segundos entre cada imagem
    const duration = 2600; // Duração total do efeito em milissegundos
    let timeout;

    const startAnimation = () => {
      let delayTime = 0;

      icons.forEach((icon, index) => {
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
            <img src="src\assets\html5.png" className="icon" alt="" />
            <img src="src\assets\css3.png" className="icon" />
            <img src="src\assets\sass.png" className="icon" alt="" />
            <img src="src\assets\js.png" className="icon" alt="" />
            <img src="src\assets\typescript.png" className="icon" alt="" />
            <img src="src\assets\react.png" className="icon" alt="" />
            <img src="src\assets\wordpress.png" className="icon" alt="" />
            <img src="src\assets\java.png" className="icon" alt="" />
            <img src="src\assets\mysql.png" className="icon" alt="" />
          </fieldset>
        </div>
      </div>

      <br />
    </div>
  );
}
