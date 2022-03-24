import React, {memo, ReactElement} from 'react';
import logo from '../images/sadu-logo.png';
import unique from '../images/unique.png';
import tutorial from '../images/tutorial.png';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function SaduLandingPage ({ className = 'saduLanding' }: Props): React.ReactElement<Props> { 
    const [index, setIndex] = React.useState(0);
    let currentYear = new Date().getFullYear();

    const onStep = (number) => {
        setIndex(number);
    }
    
    return(
        <>
        <div className="saduLanding">
            <div className="hero">
                <img className="hero__logo" src={logo} alt='Sadu logo'/>
                <div className='hero__title'>
                    <h1>Genesis Eco-conscious</h1>
                    <h2>NFT Collection</h2>
                </div>
                <button className="hero__btn">Click to See Collection  <svg className="chevron-right" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 3.81057C11.1785 3.48911 10.6573 3.48911 10.3359 3.81057L7.27045 6.87599C6.89518 7.25126 6.28674 7.25126 5.91147 6.87599L2.84605 3.81057C2.52459 3.48911 2.0034 3.48911 1.68194 3.81057C1.36048 4.13203 1.36048 4.65322 1.68194 4.97468L5.91147 9.20421C6.28674 9.57948 6.89518 9.57948 7.27044 9.20421L11.5 4.97468C11.8214 4.65322 11.8214 4.13203 11.5 3.81057Z" fill="#F3E8E8"/>
                        </svg>
                        </button>
                <p>Entry is granted to whitelist members only. If you would like access to the whitelist click <a href="#">here</a></p>
                <div className="hero__scroll">
                    <p>scroll to learn more</p>
                    <div className="scroll">
                        <svg className="mousewheel" width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7992 19.8C15.7992 23.8 12.5992 27.1 8.49922 27.1C4.49922 27.1 1.19922 23.9 1.19922 19.8V8.50005C1.19922 4.50005 4.39922 1.30005 8.49922 1.30005C12.4992 1.30005 15.7992 4.50005 15.7992 8.50005V19.8Z" stroke="#F4F4F4"/>
                        <path className='ball' d="M8.89961 10.6C8.89961 11.2 8.69961 11.6 8.49961 11.6C8.29961 11.6 8.09961 11.1 8.09961 10.6V9C8.09961 8.4 8.29961 8 8.49961 8C8.69961 8 8.89961 8.5 8.89961 9V10.6Z" stroke="#F4F4F4"/>
                        </svg>
                        <svg className="chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                        <path d="M11.5 3.81057C11.1785 3.48911 10.6573 3.48911 10.3359 3.81057L7.27045 6.87599C6.89518 7.25126 6.28674 7.25126 5.91147 6.87599L2.84605 3.81057C2.52459 3.48911 2.0034 3.48911 1.68194 3.81057C1.36048 4.13203 1.36048 4.65322 1.68194 4.97468L5.91147 9.20421C6.28674 9.57948 6.89518 9.57948 7.27044 9.20421L11.5 4.97468C11.8214 4.65322 11.8214 4.13203 11.5 3.81057Z" fill="#F3E8E8"/>
                        </g>
                        <defs>
                        <rect width="13.1786" height="13.1786" fill="white" transform="translate(13.1797) rotate(90)"/>
                        </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="tutorial">
            <div className="tutorial__buttons">
                <button className={`tutorial__button ${index === 0 ? "active" : ""}`} onClick={() => onStep(0)}>I want to setup a Polkadot wallet</button>
                <button className={`tutorial__button ${index === 1 ? "active" : ""}`} onClick={() => onStep(1)}>I want to be on the whitelist</button>
                <button className={`tutorial__button ${index === 2 ? "active" : ""}`} onClick={() => onStep(2)}>I want to get more KSM tokens</button>
                
            </div>
            <Carousel controls={false} interval={null} activeIndex={index} indicators={false}>
                <Carousel.Item>
                    <img className="carousel__img" src={tutorial} alt='Tutorial'/>
                    <div className="carousel__content">
                        <ol className='carousel__list'>
                            <li className='carousel__item'>
                                <p className='item__title'>Download the Plugin</p>
                                <p className='item__text'>XXXXXXXXXXXXXX</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Create the wallet</p>
                                <p className='item__text'>XXXXXXXXXXXXXX</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Buy KSM</p>
                                <p className='item__text'>Buying KSM online with fiat.</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Load KSM to your wallet</p>
                                <p className='item__text'>XXXXXXXXXXXXXX</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Enjoy the exhibition!</p>
                                <p className='item__text'>Explore the NFTs and view them in your gallery</p>
                            </li>
                        </ol>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel__img" src={tutorial} alt='Tutorial'/>
                    <div className="carousel__content">
                        <ol className='carousel__list'>
                            <li className='carousel__item'>
                                <p className='item__title'>Download Sadu App</p>
                                <p className='item__text'>Android Iphone</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Join the Crew</p>
                                <p className='item__text'>Treesure Hunters</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Log an acitivity</p>
                                <p className='item__text'>???</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Post your tree count to Instagram</p>
                                <p className='item__text'>Find the share icon on the progress tab. Post your tree count to Instagram.
                                    <span className='subtext'>*This is essential to verity the trees earned as a result of your activity.</span>
                                </p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Tag Sadu on Instagram</p>
                                <p className='item__text'>Tag sadu_app (@sadu_app) in your instagram post.</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>You are on the whitelist!</p>
                                <p className='item__text'>We will DM you the next steps to ensure that you are on the whitelist.</p>
                            </li>
                        </ol>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel__img" src={tutorial} alt='Tutorial'/>
                    <div className="carousel__content">
                        <ol className='carousel__list'>
                            <li className='carousel__item'>
                                <p className='item__title'>Buy KSM</p>
                                <p className='item__text'>Buy KSM with fiat (dollars, euro)...</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Load KSM to your wallet</p>
                                <p className='item__text'>XXXXXXXXXXXXX</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Enjoy the exhibition</p>
                                <p className='item__text'>Now that you have KSM coins in your wallet. Explore the NFTs and view them in your gallery.</p>
                            </li>
                        </ol>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
            <div className="about">
                <h2 className="about__title">About Us</h2>
                <p className="about__text">     
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias repudiandae cum dolore debitis nihil, soluta sed ad autem, iusto illum explicabo enim laboriosam eligendi beatae doloribus perferendis ullam sequi reprehenderit.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias repudiandae cum dolore debitis nihil, soluta sed ad autem, iusto illum explicabo enim laboriosam eligendi beatae doloribus perferendis ullam sequi reprehenderit.
                </p>
            </div>
            <div className="collection">
                <h2 className="collection__title">The Collection</h2>
                <div className="collection__cards">
                    <div className="card">
                        <h3 className="card__title">Stacie Ant</h3>
                        <div className="card__content">
                        <p className="card__text">
                            I am creating a unique collection of 3D environments inspired by versions of futuristic Utopias. Each piece juxtaposes elements of the organic and mechanic - portrayal of a progressive future via technological advancement.
                        </p>
                        <div className="card__list">
                            <p>Generative Traits</p>
                            <ul>
                                <li>Humanoid Skin</li>
                                <li>Humanoid Hair</li>
                                <li>Humanoid Headdress</li>
                                <li>Humanoid Garments</li>
                                <li>Landscape Built Environment</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <h3 className="card__title">Bond Truluv</h3>
                        <div className="card__content">
                            <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, at saepe libero sint illo mollitia facere, tempora ea ut quisquam, dicta deleniti ipsam harum aspernatur reiciendis commodi incidunt. Eos, iusto!</p>
                            <div className="card__list">
                                <p>Generative Traits</p>
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq">
            <h2 className="faq__title">Frequently Asked Questions</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header>I connected the right wallet to the app but it shows that my NFTree belongs to a different address. Why?</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Whom can I contact if I have questions regarding the marketplace?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How can I get KSM to my account?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
            <footer className="footer">
                <div className="footer__logo">
                    <img className="logo" src={logo} alt='Sadu logo'/>
                    <p>Copyright © {currentYear} Sovereign Nature Initiative | All Rights Reserved</p>
                    <p className='poweredBy'>Powered By 
                        <svg className='sni-brand' width="24" height="24" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5" filter="url(#filter0_d_94_100)">
                        <path d="M8.56023 2.44316C8.98699 3.25123 9.20222 4.08712 8.90349 4.99074C8.91833 4.88312 8.93782 4.7755 8.94709 4.66788C8.97524 4.23566 8.91365 3.80229 8.76618 3.39502C8.66413 3.0898 8.53425 2.79478 8.4155 2.49512C8.4155 2.48862 8.40808 2.48398 8.39694 2.46821C8.35427 2.53687 8.30974 2.59995 8.27355 2.66582C8.18078 2.84024 8.07595 3.01187 7.99523 3.19371C7.83288 3.58057 7.88205 3.96558 8.06017 4.33482C8.16501 4.55006 8.29304 4.75416 8.40715 4.96476C8.47858 5.09743 8.54724 5.23195 8.6094 5.36925C8.72659 5.60627 8.78362 5.8685 8.77546 6.13278C8.84319 6.05764 8.91277 5.98342 8.97771 5.90642C9.28859 5.5514 9.52293 5.13609 9.66609 4.68644C9.7985 4.2768 9.78064 3.8334 9.61573 3.43573C9.45082 3.03807 9.14963 2.71216 8.76618 2.51646C8.70402 2.48398 8.63723 2.45894 8.57321 2.43018L8.56023 2.44316Z" fill="#FAFAFA"/>
                        <path d="M5.91992 2.81487C6.03589 2.88167 6.13516 2.94476 6.23906 3.00042C6.47808 3.13219 6.74065 3.21573 7.01187 3.24627C7.51656 3.29359 7.84034 3.11453 8.07228 2.66458C8.10289 2.60335 8.13165 2.54119 8.15948 2.47903C8.17062 2.45491 8.17618 2.42801 8.19196 2.38069C7.76612 2.76941 7.30133 2.98743 6.72613 2.85384C7.30133 2.90115 7.73736 2.62933 8.13351 2.25545C7.81993 1.9697 7.52027 1.92332 7.17144 2.11814C7.05105 2.1882 6.93573 2.26664 6.82632 2.35286C6.6083 2.53474 6.35987 2.6767 6.09248 2.7722C6.04146 2.78797 5.99136 2.79725 5.91992 2.81487Z" fill="#FAFAFA"/>
                        <path d="M5.50189 12.3951C4.28934 11.7633 3.31428 10.9163 2.9135 9.54976C2.98679 9.69542 3.05359 9.84386 3.13523 9.98395C3.46593 10.5401 3.90815 11.0218 4.43406 11.3987C4.82 11.6873 5.23099 11.9405 5.63085 12.2096C5.64542 12.2166 5.66064 12.2222 5.67631 12.2263C5.67074 12.1048 5.67631 11.9897 5.65961 11.8775C5.62806 11.5824 5.61044 11.2837 5.55013 10.9943C5.42118 10.3792 5.03431 9.94684 4.50086 9.64532C4.18914 9.46812 3.85794 9.32618 3.53787 9.1629C3.33747 9.05992 3.13801 8.9523 2.94504 8.83633C2.59878 8.64445 2.30552 8.36967 2.09152 8.03662C2.07204 8.18784 2.04977 8.33721 2.03493 8.4875C1.95277 9.18897 2.01593 9.89985 2.22048 10.5758C2.40642 11.193 2.80617 11.7237 3.34803 12.0727C3.88988 12.4218 4.53838 12.5664 5.17718 12.4805C5.28109 12.4684 5.385 12.4425 5.48797 12.423L5.50189 12.3951Z" fill="#FAFAFA"/>
                        <path d="M10.5497 10.655C10.5692 11.0641 10.4495 11.5187 10.2816 11.964C10.2518 12.0398 10.2165 12.1133 10.1758 12.1839C10.1675 12.1987 10.1378 12.2024 10.1183 12.2117C10.1113 12.1975 10.1072 12.1821 10.1063 12.1663C10.1582 11.6616 9.87248 11.3192 9.53663 11.0103C9.15528 10.6774 8.7282 10.4009 8.26841 10.1893C6.97452 9.55344 5.68033 8.91608 4.38582 8.27718C4.11492 8.14451 3.84495 8.01092 3.57683 7.87176C2.70198 7.41809 2.20842 6.68611 2.0572 5.72497C1.88185 4.61168 2.25017 3.63848 2.91257 2.7562C2.93176 2.72963 2.95251 2.70422 2.97473 2.68013L3.22058 2.43799C3.18162 2.53076 3.13894 2.62354 3.10183 2.72373C3.03327 2.90753 3.00183 3.10309 3.00931 3.29912C3.0168 3.49515 3.06306 3.68774 3.14543 3.86578C3.36716 4.40016 3.74383 4.81207 4.19007 5.16461C4.52462 5.42554 4.88824 5.64689 5.27367 5.82424C6.23975 6.27883 7.20491 6.73466 8.16914 7.19172C8.85782 7.49772 9.45528 7.97722 9.90309 8.58333C10.3422 9.18316 10.5697 9.91186 10.5497 10.655Z" fill="#FAFAFA"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_94_100" x="0.931874" y="0.931874" width="10.689" height="12.6411" filterUnits="userSpaceOnUse">
                        <feFlood result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="0.534063"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.53 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_94_100"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_94_100" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
                        Sovereign Nature Initiative | Built On <img className="unique" src={unique} alt='unique logo'/>
                        
                    </p>
                </div>
                <div className="footer__link">
                    <p>About us</p>
                    <ul>
                        <li><a href="#">Who we are</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer__link">
                    <p>Contact us</p>
                    <ul>
                        <li><a className="link" href="#">info@sadu.io</a></li>
                    </ul>
                </div>
                <div className="footer__link">
                    <p>Follow Sadu</p>
                    <ul>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Medium</a></li>
                    </ul>
                </div>
            </footer>
        </div>
        </>
    );
}


export default memo(SaduLandingPage);