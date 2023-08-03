import styles from './Banner.module.css'
import elipse from '../../assets/imgs/circulo.png'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoSass} from 'react-icons/bi'
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
                    Desenvolvedor Front End apaixonado por designer web, com conhecimento em HTML5, CSS3, JavaScript, TypesScrip, SASS, e diversas bibliotecas do React, sempre buscando expandir meus conhecimentos no Front End e de vez em quando me arriscando no Back.
                </p>


                <ul className={styles.skills}>
                    <BiLogoHtml5/>
                    <BiLogoCss3/>
                    <BiLogoJavascript/>
                    <BiLogoTypescript/>
                    <BiLogoReact/>
                    <BiLogoSass/>
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