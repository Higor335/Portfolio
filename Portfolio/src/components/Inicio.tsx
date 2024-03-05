import "../styles/Inicio.scss"

export default function Inicio(){
    return (
        <>
            <div className="inicio">
                <div className="perfil">
                    <h1 className="nome"><strong>Higor Vital Lopo</strong></h1>
                    <h2 className="cargo">Desenvolvedor de Websites e Sistemas</h2>
                </div>
                <img className="imagem" src="src\assets\inicio1.png" alt="logo" />
            </div>
        </>
    )
}