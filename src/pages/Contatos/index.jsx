import styles from './Contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
            <section className={styles.contatos}>
                <h2>Contatos</h2>

                <h3>Links para contato</h3>
                <p>Entre em contato por uma das opções: </p>

                <div className={styles.icones}>
                    
                    <a href='mailto:joazin.gyn01@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <GoMail className={styles.icone} />
                    </a>

                    <a href='https://www.instagram.com/fernandzzm/' target='_blank' rel='noopener noreferrer'>
                        <BsInstagram className={styles.icone} />
                    </a>

                   

                    <a href='https://github.com/Elratodicapri0' target='_blank' rel='noopener noreferrer'>
                        <BsGithub className={styles.icone} />
                    </a>

                    

                </div>
            </section>
        </>
    )
}

export default Contatos
