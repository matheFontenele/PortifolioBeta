import styles from './Banner.module.css'
import elipse from '../../assets/imgs/circulo.png'
const minhaFoto = 'https://github.com/matheFontenele.png'


export default function Banner(){
    return(
        <main className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Matheus
                </h1>
                <h1 className={styles.titulo}>
                    Fontenele
                </h1>

                <p className={styles.paragrafo}>
                    Desenvolvedor Front End com conhecimento em HTML5, CSS3, JavaScript e React, domionio de React Router.
                </p>


                <ul className={styles.skills}>
                    <i className="fa-brands fa-html5"></i>
                    <i className="fa-brands fa-css3-alt"></i>
                    <i className="fa-brands fa-square-js"></i>
                    <i className="fa-brands fa-react"></i>
                </ul>

                <h2 className={styles.projectsIntro}><i className="fa-solid fa-angle-left"></i>Confira abaixo alguns dos meus principais projetos<i>/</i><i className="fa-solid fa-angle-right"></i></h2>

            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={elipse} 
                    alt='circulo' 
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Eu'/>
            </div>
        </main>
    )
}