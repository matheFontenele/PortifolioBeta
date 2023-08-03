import styles from './Projects.module.css'
import Projeto from 'assets/Json/projetos';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useRef } from 'react'

export default function Projetos(){

    const carrosel = useRef(null);

    function leftClick(e) {
        e.preventDefault();
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth
    }

    function leftRigth(e) {
        e.preventDefault();
        carrosel.current.scrollLeft += carrosel.current.offsetWidth
    }

    return(
        <section className={styles.projetos}>
            <button className={styles.scroll} onClick={leftClick} ><AiFillCaretLeft/></button>
              <ul className={styles.posts} ref={carrosel}>
                {Projeto.map((projeto) => (
                    <div className={styles.post} key={projeto.id}>
                        <img 
                            className={styles.capa}
                            src={projeto.img} 
                            alt={projeto.name}
                        />

                        <h2 className={styles.titulo}>{projeto.name}</h2>
                        <p className={styles.texto}>{projeto.descri}</p>

                        <a target='blank' href={projeto.url} className={styles.botaoLer}>Ver No Git</a>
                    </div>
                ))}
            </ul>
                <button className={styles.scroll} onClick={leftRigth} ><AiFillCaretRight/></button>

        </section>
    )
}