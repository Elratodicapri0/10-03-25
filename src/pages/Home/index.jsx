import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import avatar from './images/Foto.jpg'


function Home() {
    return (
        <>
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá, sou <br />
                    <span>João Gabriel Fernandes</span> <br />
                    Estudante de DS
                </p>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                    Saiba mais sobre mim
                </Link>
            </div>
            <figure>
                <img src={avatar} alt="Foto" className={styles.img_home} />
            </figure>
        </section>
        </> 
    )
}

export default Home