import Formulario from "./Formulario";
import Social from "./Social";
import styles from './Contato.module.css'
import cafe from '../../assets/imgs/coffee.svg'

export default function Contato(){
    return(
        <section className={styles.contato}>
            <div className={styles.socialLinks}>
                <div>
                    <h2>Entre em contato, vamos trabalhar juntos</h2>
                    <p>Entre em contato pelas redes sociais ou deixe uma mensagem!</p>
                </div>
        
                <Social/>
                <img className={styles.cafe} src={cafe} alt='cafe'/>
            </div>
            
            <Formulario/>
        </section>
    )
}