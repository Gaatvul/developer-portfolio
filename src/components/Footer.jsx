import mailLogo from '../assets/icons/mail-logo.svg'
import githubLogo from '../assets/icons/github-mark.svg'
import linkedinLogo from '../assets/icons/linkedin-logo.svg'

const Footer = () => {
    return (
        <section>
            <div className="footer">
                <div className="socials">
                    <a href="mailto:logan.duff@outlook.com"
                    ><img src={mailLogo} alt="mail logo"
                        /></a>
                    <a href="https://github.com/Gaatvul" target="_blank"
                    ><img src={githubLogo} alt="github logo"
                        /></a>
                    <a href="https://www.linkedin.com/in/loganduff/" target="_blank"
                    ><img src={linkedinLogo} alt="linkedin logo"
                        /></a>
                </div>
                <p>Logan Duff</p>
            </div>
        </section>
    )
}
export default Footer