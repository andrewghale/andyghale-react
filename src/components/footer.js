import React from 'react';
import { socialLinks, date } from 'utils';
import { socialLinksWhite } from 'utils';

const Footer = () => (
    <footer className="footer">
        <div className="social-links" id="social-links">
            {socialLinks.map((link, i) => (
                <div className={`social-link ${link.className}`} key={i} id={link.className}>
                    <div className="link-container">
                        <a rel="noopener noreferrer" href={link.src}>
                            <img src={link.img} alt={`${link.name} logo`} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
        <p className="copyright">© {date} Andrew Hale</p>
    </footer>
)

export default Footer;