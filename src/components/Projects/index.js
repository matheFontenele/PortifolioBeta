import styles from './Projects.module.css'
import Projeto from '../../assets/Json/projetos';

export default function Projetos(){


    return(
        <section className={styles.projetos}>
              <ul className={styles.posts}>
                {Projeto.map((projeto) => (
                    <li key={projeto.id}>
                        <div className={styles.post}>
                            <img 
                                className={styles.capa}
                                src={projeto.img} 
                                alt={projeto.name}
                            />

                            <h2 className={styles.titulo}>{projeto.name}</h2>
                            <p className={styles.texto}>{projeto.descri}</p>

                            <a target='blank' href={projeto.url} className={styles.botaoLer}>Ver No Git</a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}