import '../styles/Footer.scss';

function launchRocket(href) {
    return function(event) {
        event.preventDefault(); // Evita que o link seja seguido imediatamente

        var rocket = document.getElementsByClassName('rocket')[0]; // Obtém o primeiro elemento com a classe 'rocket'
        var button = document.getElementById('launch-button');

        // Reinicia a posição do foguete
        rocket.classList.remove('clicked');
        rocket.style.display = 'none';

        button.disabled = true;
        setTimeout(function() {
            rocket.style.display = 'block'; // Exibe a imagem do foguete

            setTimeout(function() {
                rocket.classList.add('clicked');
                setTimeout(function() {
                    window.open(href, '_blank'); // abrir link em uma nova guia
                    button.disabled = false; // Reativa o botão
                }, 2300); // ajuste conforme a velocidade de transição do foguete
            }, 100); // adicione um pequeno atraso para garantir que a imagem do foguete seja exibida antes de animá-la
        }, 100); // adicione um pequeno atraso para garantir que a imagem do foguete seja escondida antes de reiniciá-la
    };
}






export default function Footer(){
    return(
        <>
            <footer id='contatos'>
                <br /><h2>CONTATOS</h2>
                <hr />

                <div className="redeSociais">
                    
                

                <a onClick={launchRocket("https://www.linkedin.com/in/higorvl/")} id="launch-button" href="https://www.linkedin.com/in/higorvl/">
                        <div>
                            <img src="src\assets\linkedin-original.svg" alt='logo linkedin'/>
                            <br /><p>Linkedin</p>
                            <img className="rocket" id='rocketLinkedin' src="src\assets\foguete.png" alt="Foguete"></img>
                            <p>Higor V. L.</p>
                        </div>
                    </a>

                    <a onClick={launchRocket("https://higor-vl.itch.io")} id="launch-button" href="https://higor-vl.itch.io">
                        <div>
                            <img src="src\assets\itch-io-icon.png" alt="logo itch.io" />
                            <br /><p>Itch.io</p>
                            <p>@Higor-vl</p>
                            <img className="rocket" id="rocketLinkedin" src="src\assets\foguete.png" alt="Foguete"></img>
                        </div>
                    </a>

                    <a onClick={launchRocket("https://github.com/Higor335/")} id="launch-button" href="https://github.com/Higor335/">
                        <div>
                            <img src="src\assets\github-original.svg" alt="logo github" />
                            <br /><p>GitHub</p>
                            <p>@Higor335</p>
                            <img className="rocket" id='rocketGithub' src="src\assets\foguete.png" alt="Foguete"></img>
                        </div>
                    </a>

                </div>
            </footer>
        </>
    )
}
