import './styles.css';
import {ReactComponent as LinkedIncon} from './linkedin.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'
import {ReactComponent as YouTubeIcon} from './youtube.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por Junior Caldeira <br/>
            <div className="footer-icons">
            <a href="https://www.linkedin.com/in/junior-caldeira-a039a820a/" target="_new">
                <LinkedIncon />
            </a>
            <a href="https://www.instagram.com/_juunior1/" target="_new">
                <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/watch?v=4ECRNMfRv3Q" target="_new">
                <YouTubeIcon />
            </a>
            </div>
        </footer>
    )
}

export default Footer;