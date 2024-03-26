import "../styles/Inicio.scss";
import INICIO from "../assets/inicio1.png"

export default function Inicio(){
    return (
        <div id="inicio">
            <div className="perfil">
                <h1 className="nome"><strong>Higor Vital Lopo</strong></h1>
                <h2 className="cargo">Desenvolvedor de Websites e Sistemas</h2>
            </div>
            <img className="imagem" src={INICIO} alt="logo" />
        </div>
    )
}
