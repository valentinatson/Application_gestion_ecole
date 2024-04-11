import style from "./HomeCours.module.css";
import logo from "../../.././../../assets/logo.png"

const HomeCours = () => {
    return(
        <div>
            <section className={style.cours}>
                <h2>👉 COURS</h2>
            </section>
            <div className={style.content}>
                <section className={style.emploiTemps}>
                    
                    <article className={style.emploiTemps__details} >

                        <aside className={style.profil}>
                            <img src={logo} style={({width:"90px"})} alt="" />
                            <h3>TD</h3>
                        </aside>
                        <aside className={style.info}>
                            <h3> LP SIL S4 GL : R404  - Programmation orientée objet en C++ </h3>
                            <aside className={style.temps}>
                            <h3>Dr EDJEOU</h3> <h3>08:00</h3> <h3>09:50</h3>
                            </aside>

                        </aside>
                        <article className={style.date}>
                        <h3>23-11-2024</h3>
                    </article>
                    </article>
                </section>
            </div>

            <div className={style.content}>
                <section className={style.emploiTemps}>
                    
                    <article className={style.emploiTemps__details} >

                        <aside className={style.profil}>
                            <img src={logo} style={({width:"90px"})} alt="" />
                            <h3>TD</h3>
                        </aside>
                        <aside className={style.info}>
                            <h3> LP SIL S4 GL : R404  - Programmation orientée objet en C++ </h3>
                            <aside className={style.temps}>
                            <h3>Dr EDJEOU</h3> <h3>08:00</h3> <h3>09:50</h3>
                            </aside>

                        </aside>
                        <article className={style.date}>
                        <h3>23-11-2024</h3>
                    </article>
                    </article>
                </section>
            </div>

            <div className={style.content}>
                <section className={style.emploiTemps}>
                    
                    <article className={style.emploiTemps__details} >

                        <aside className={style.profil}>
                            <img src={logo} style={({width:"90px"})} alt="" />
                            <h3>TD</h3>
                        </aside>
                        <aside className={style.info}>
                            <h3> LP SIL S4 GL : R404  - Programmation orientée objet en C++ </h3>
                            <aside className={style.temps}>
                            <h3>Dr EDJEOU</h3> <h3>08:00</h3> <h3>09:50</h3>
                            </aside>

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
export default  HomeCours;