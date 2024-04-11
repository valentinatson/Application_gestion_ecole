import style from "./HomeActivite.module.css"
import logo from "../../.././../../assets/8.jpg"

const HomeActivite = () => {
    return(
        <div>
            <section className={style.activites}>
                <h2>👉 ACTIVTES</h2>
            </section>

            <div className={style.content}>
                <section className={style.activite}>
                    
                    <article className={style.activite__details} >

                        <aside className={style.profil}>
                            <img src={logo}  alt="" />
                            
                        </aside>
                        <aside className={style.info}>
                            <h3>SEMAINE DE L'ETUDIANT </h3>
                            <h4>Team Esig préparez-vous !!✌️</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, reiciendis. Nostrum, eius eligendi facilis quasi libero sit officia nesciunt! Quis blanditiis numquam adipisci voluptates sequi delectus labore. Et, accusamus reiciendis?</p>
                            

                        </aside>
                        <article className={style.date}>
                        <h3>23-11-2024</h3>
                    </article>
                    </article>
                </section>

                <section className={style.activite}>
                    
                    <article className={style.activite__details} >

                        <aside className={style.profil}>
                            <img src={logo}  alt="" />
                            
                        </aside>
                        <aside className={style.info}>
                            <h3>SEMAINE DE L'ETUDIANT </h3>
                            <h4>Team Esig préparez-vous !!✌️</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, reiciendis. Nostrum, eius eligendi facilis quasi libero sit officia nesciunt! Quis blanditiis numquam adipisci voluptates sequi delectus labore. Et, accusamus reiciendis?</p>
                            

                        </aside>
                        <article className={style.date}>
                        <h3>23-11-2024</h3>
                    </article>
                    </article>
                </section>

                <section className={style.activite}>
                    
                    <article className={style.activite__details} >

                        <aside className={style.profil}>
                            <img src={logo}  alt="" />
                            
                        </aside>
                        <aside className={style.info}>
                            <h3>SEMAINE DE L'ETUDIANT </h3>
                            <h4>Team Esig préparez-vous !!✌️</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, reiciendis. Nostrum, eius eligendi facilis quasi libero sit officia nesciunt! Quis blanditiis numquam adipisci voluptates sequi delectus labore. Et, accusamus reiciendis?</p>
                            

                        </aside>
                        <article className={style.date}>
                        <h3>23-11-2024</h3>
                    </article>
                    </article>
                </section>
            </div>

        </div>
    )
}
export default  HomeActivite;