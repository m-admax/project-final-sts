import styles from "../styles/init.module.css"
import Card from '../Componentes/Card'

const pagina = ()=>{
    return(
        <>
        <div id="__next">
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand">STS</a>
                        <button aria-label="Toggle navigation" type="button" className="navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="ms-auto navbar-nav">
                                <li className="nav-item">
                                    <a href="/#inicio" className="nav-link">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/#nosotros" className="nav-link">Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/#contacto" className="nav-link">Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/#servicios" className="nav-link">Servicios</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        <div id="inicio" className={styles.Home_sectionTop__TQp_q}>
            <div className={styles.sectionLandingContainer__Bi_R6}>
                <div className={styles.sectionLandingContent__DndcT}>
                    <div>
                        <h1>Soluciones Tecnologicas</h1>
                        <h5>Brindamos soluciones tecnológicas innovadoras, creativas, para pequeñas y medianas empresas a traves del desarrollo de sistemas de software</h5>
                    </div>
                </div>
            </div>
        </div>
            <div id="servicios" className={styles.Home_sectionServices__IxAUl}>
                <div className={styles.styles_sectionService__PZswd}>
                    <div className={styles.styles_sectionServiceContent__pGHJ9}>
                        <div className="mb-5">
                            <h1>Servicios</h1>
                        </div>
                        <div className={styles.styles_containerCards__dKwT_}>
                            <div className="row">
                                        <Card
                                            icono='icono 1'
                                            titulo='Desarrollo Web'
                                            descripcion='Desarrollamos páginas web únicas y personalizadas que representan tu negocio de la mejor manera posible.'
                                        ></Card>

                                        <Card
                                            icono='icono 2'
                                            titulo='Aplicaciones Moviles'
                                            descripcion='Creamos aplicaciones móviles personalizadas para iOS y Android que potencian tu negocio.'
                                        ></Card>

                                        <Card
                                            icono='icono 3'
                                            titulo='Software a Medida'
                                            descripcion='Creamos Software personalizado que se ajusta a las necesidades de tu negocio y mejora tus procesos empresariales'
                                        ></Card>

                                        <Card
                                            icono='icono 4'
                                            titulo='Bases de Datos'
                                            descripcion='Optimizamos y diseñamos base de datos a medida para potenciar el rendimiento y eficiencia de tu negocio'
                                        ></Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        <div id="nosotros" className={styles.Home_sectionNosotros__BOzKp}>
            <div className={styles.styles_sectionLandingContainer___AbHT}>
                <div class={styles.styles_sectionLandingContent__pGHcV}>
                     <div className={styles.styles_areaBanner__NAVsw}>
                        <h1>Nuestra Filosofia</h1>
                    </div>
                    <div className={styles.styles_areaImagen__eqOEE}>
                        <img src="../public/nosotros.23bae7f3.svg" className={styles.imagen}/>
                    </div>
                    <div className={styles.styles_areaLista__LVPRk}>
                        <ul>
                            <li>Alto Sentido de prioridad y responsabilidad ante las necesidades de nuestros clientes.</li>
                            <li>Trabajo en equipo, es prioritario en el desarrollo de nuestro trabajo</li>
                            <li>Buscamos distinguirnos por el desarrollo de sistemas con interface grafica visualmente amigablemente por el usuario final, asi como componentes minimalistas </li>
                            <li>Relaciones a largo plazo con nuestros clientes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="contacto" className={styles.Home_sectionContacto__UHJOI}>
                <div className={styles.styles_containerContact__HuVX6}>
                    <div className={styles.styles_containerContent___6E_x}>
                        <div className={styles.styles_areaContacto__B80aC}>
                            <div className={styles.styles_subareaContacto__yhJbA}>
                                <div>
                                    <h3 className="w-100 mb-2">Contactanos</h3>
                                    <input className="w-100 mb-2 rounded" type="text" placeholder="Correo Electronico"/>
                                    <textarea className="w-100 mb-2 rounded" name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>
                                    <button className="rounded">Enviar</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.styles_areaSocial__dB7Gb}>
                            <div>
                                <h2>Informacion de contacto</h2>
                                <div>
                                    <div className={styles.styles_containerSocialSection__YD6xQ}>
                                        <img alt="sin Imagen" src="/public/Facebook.035f2d6e.svg"/>
                                        <div className={styles.styles_socialDescription__ZqPqA}>
                                            <p>Facebook</p>
                                            <p>www.facebook.com/sts</p>
                                        </div>
                                    </div>
                                    <div className={styles.styles_containerSocialSection__YD6xQ}>
                                        <img alt="sin Imagen" src="/_next/static/media/Email.ee9f159e.svg"/>
                                        <div className={styles.styles_socialDescription__ZqPqA}>
                                            <p>Whatsapp</p>
                                            <p>(222) 222 2222</p>
                                        </div>
                                    </div>
                                    <div className={styles.styles_containerSocialSection__YD6xQ}>
                                        <img alt="sin Imagen" src="/_next/static/media/Whatsapp.016b2c5e.svg"/>
                                        <div className={styles.styles_socialDescription__ZqPqA}>
                                            <p>Correo</p>
                                            <p>sts.puebla@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={styles.Home_sectionFooter__QRMOy}>
                <div class={styles.styles_sectionFooterContainer__m3E8W}>
                    <div class={styles.styles_sectionFooterContent__ShF7k}>
                        <div>
                            <p>Todos los derechos reservados 2023</p>
                            <p>Politicas de Privacidad</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default pagina