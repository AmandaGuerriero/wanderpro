import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'


function Footer() {
    return (
        <footer className= "flex-row space-between px-1">
            <ul>
                <li className="footer-item">
                    <a
                        className="footer-link"
                        href="https://github.com/AmandaGuerriero"
                        target="_blank"
                        rel="noreferrer">
                            AG<FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li className="footer-item">
                    <a
                        className="footer-link"
                        href="https://github.com/mslnance"
                        target="_blank"
                        rel="noreferrer">
                            LN<FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li className="footer-item">
                    <a
                        className="footer-link"
                        href="https://github.com/AmandaGuerriero/wanderpro"
                        target="_blank"
                        rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li className="footer-item">
                    <a
                        className="footer-link"
                        href="https://github.com/zoushilu31"
                        target="_blank"
                        rel="noreferrer">
                            SZ<FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li className="footer-item">
                    <a
                        className="footer-link"
                        href="https://github.com/aaroncenteno"
                        target="_blank"
                        rel="noreferrer">
                            AC<FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <p>
                </p>
            </ul>
        </footer>
    )
}

export default Footer;