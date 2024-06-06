import Image from "next/image";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";
import "@/styles/cv-header.css";

const inter = Inter({ subsets: ["latin"] })

const ContactItem: FC<{ src: string, text: string | ReactNode, href?: string }> = ({ src, text, href }) => {
    return (
        <div className="cv-contact-item">
            <Image
                src={ src }
                width={ 13 }  
                height={ 13 }
                alt={ src }
            />
            { href
                ? <a href={ href }>{ text }</a>
                : <p>{ text }</p>
            }
        </div>
    );
};

const Header: FC = () => {
    return (
        <div className="cv-header">

            <div className="cv-title">
                <h1 className={ inter.className }>Michael Keay</h1>
                <h2 className={ inter.className }>Junior Full Stack Developer</h2>
            </div>

            <div className="cv-contact">
                <div>
                    <ContactItem src="/email.svg" text="mwkeay@gmail.com" />
                    <ContactItem src="/phone.svg" text="+447411 515631" />
                </div>
                <div>
                    <ContactItem
                        src="/github.svg"
                        text={ <> <span className="grey">github.com/</span>mwkeay </> }
                        href="https://github.com/mwkeay"
                    />
                    <ContactItem
                        src="/linkedin.svg"
                        text={ <> <span className="grey">linkedin.com/in/</span>mwkeay </> }
                        href="https://www.linkedin.com/in/mwkeay/"
                    />
                </div>
            </div>

        </div>
    );
};

export default Header;
