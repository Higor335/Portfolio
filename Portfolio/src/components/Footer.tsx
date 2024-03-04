import '../styles/Footer.scss';

function Footer(){
    return(
        <>
            <footer>
                <h2>CONTATOS</h2>
                <hr />

                <div className="redeSociais">
                    
                    <a target='_blank' href="https://www.linkedin.com/in/higorvl/">
                        <div>
                            <img src="src\assets\linkedin-original.svg" alt='logo linkedin'/>
                            <br /><p>Linkedin</p>
                            <p>Higor Vital Lopo</p>
                        </div>
                    </a>

                    <a target='_blank' href="https://higor-vl.itch.io">
                        <div>
                            <img src="src\assets\itch-io-icon.png" alt="logo itch.io" />
                            <br /><p>Itch.io</p>
                            <p>@Higor-vl</p>
                        </div>
                    </a>

                    <a target='_blank' href="https://github.com/Higor335/">
                        <div>
                            <img src="src\assets\github-original.svg" alt="logo github" />
                            <br /><p>GitHub</p>
                            <p>@Higor335</p>
                        </div>
                    </a>

                </div>
            </footer>
        </>
    )
}

export default Footer;