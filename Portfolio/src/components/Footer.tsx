import '../styles/Footer.scss';

function launchRocket(href:any, indice:any) {
    return function(event) {
        event.preventDefault(); 

        var rocket = document.getElementsByClassName('rocket')[indice]; 
        var button = document.getElementsByClassName('launch-button')[indice];

        
        rocket.classList.remove('clicked');
        rocket.style.display = 'none';

        button.disabled = true;
        setTimeout(function() {
            rocket.style.display = 'block'; 

            setTimeout(function() {
                rocket.classList.add('clicked');
                setTimeout(function() {
                    window.open(href, '_blank'); 
                    button.disabled = false; 
                }, 2300); 
            }, 100);
        }, 100);
    };
}


export default function Footer(){
    return(
        <>
            <footer id='contatos'>
                <br /><h2>CONTATOS</h2>
                <hr />

                <div className="redeSociais">
                
                    <a onClick={launchRocket("https://www.linkedin.com/in/higorvl/",0)} className="launch-button" href='https://www.linkedin.com/in/higorvl/'>
                        <div>
                            <img src="src\assets\linkedin-original.svg" alt='logo linkedin'/>
                            <br /><p>Linkedin</p>
                            <img className="rocket" id='rocketLinkedin' src="src\assets\foguete.png" alt="Foguete"></img>
                            <p>Higor V. L.</p>
                        </div>
                    </a>

                    <a onClick={launchRocket("https://higor-vl.itch.io",1)} className="launch-button" href="https://higor-vl.itch.io">
                        <div>
                            <img src="src\assets\itch-io-icon.png" alt="logo itch.io" />
                            <br /><p>Itch.io</p>
                            <p>@Higor-vl</p>
                            <img className="rocket" id="rocketLinkedin" src="src\assets\foguete.png" alt="Foguete"></img>
                        </div>
                    </a>

                    <a onClick={launchRocket("https://github.com/Higor335/",2)} className="launch-button" href="https://github.com/Higor335/">
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
