import { useEffect } from "react";
import "../styles/Sobre.scss";
import MinhaFoto from "../assets/eu.jpeg"
import HTML5 from "../assets/Linguagens/html5.png"
import CSS3 from "../assets/Linguagens/css3.png"
import SASS from "../assets/Linguagens/sass.png"
import JS from "../assets/Linguagens/js.png"
import TS from "../assets/Linguagens/typescript.png"
import REACT from "../assets/Linguagens/react.png"
import WORDPRESS from "../assets/Linguagens/wordpress.png"
import JAVA from "../assets/Linguagens/java.png"
import MYSQL from "../assets/Linguagens/mysql.png"

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

  const minhaIdade = calcularIdade(new Date(2002, 0, 20)); 

  function calcularIdade(dataNascimento: Date): number {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    const mesAtual = hoje.getMonth();
    const mesNascimento = dataNascimento.getMonth();

    if (
      mesAtual < mesNascimento ||
      (mesAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())
    ) {
      idade--;
    }

    return idade;
  }

  return (
    <div id="sobre">
      <h2>SOBRE MIM</h2>
      <br />
      <hr />
      <br />

      <div className="bloco">
        <img src={MinhaFoto} alt="minha foto" className="minhaFoto" />

        <div className="info">
          <h3>
            Olá, Tudo Bem?<br /> Eu sou o Higor Vital Lopo 👋
          </h3>
          <p>
            Olá, meu nome é Higor e tenho {minhaIdade} anos. Sou formado em{" "}
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
            <img src={HTML5} className="icon" alt="html5" />
            <img src={CSS3} className="icon" alt="css3"/>
            <img src={SASS} className="icon" alt="sass" />
            <img src={JS} className="icon" alt="javascript" />
            <img src={TS} className="icon" alt="typescript" />
            <img src={REACT} className="icon" alt="react" />
            <img src={WORDPRESS} className="icon" alt="wordpress" />
            <img src={JAVA} className="icon" alt="java" />
            <img src={MYSQL} className="icon" alt="mysql" />
          </fieldset>
        </div>
      </div>

      <br />
    </div>
  );
}
