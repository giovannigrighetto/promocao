import { Inter, Averia_Serif_Libre } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ["300", "400", "700"] })

export default function Home() {

  const router = useRouter()

  function handleNextPage() {
    router.push('/formulario')
  }

  return (
    <div className={`${styles.container} ${inter.className}`}>

      <div>
        <Image src="/logo.png" alt="Bora Bora" width={152} height={48} />
      </div>

      <div className={styles.form}>
        <div className={styles.form_header}>
          <Image src="/hero.png" alt="Bora Bora" width={540} height={263} />
        </div>

        <div className={styles.form_body}>
          <div className={styles.form_content}>
            <h2 className={averia.className}>
            Você ganhou um combo de Budweiser Grátis Entre com o Instagram e curta a publicação fixada!
            </h2>

            <p>Promoção exclusiva para o Boteco Bora Bora Araraquara.</p>
          </div>

          <div className={styles.form_data}>
            <div className={styles.facebook} onClick={handleNextPage}>
                <div>
                  <Image src="/instagram.png"  alt="Bora Bora" width={24} height={24} />
                </div>

                <span>
                  Fazer login com o Instagram  
                </span>
              </div>
            <span className={styles.terms}>Ao resgatar você concorda com os Termos de Uso</span>
          </div>
        </div>
      </div>

      <div>
        <span className={styles.copy}>
          © 2023 Bora Bora
        </span>
      </div>

    </div>
  )
}
