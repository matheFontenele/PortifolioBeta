import sociais from '../../../assets/Json/social.json'
import styles from './Social.module.css'

export default function Social(){
    return(
            <ul className={styles.social}>
               {sociais.map((social) => (
                <li key={social.id}>
                    <a href={social.link}><img src={social.img} alt={social.name}/></a>
                </li>
               ))}
            </ul>
    )
}