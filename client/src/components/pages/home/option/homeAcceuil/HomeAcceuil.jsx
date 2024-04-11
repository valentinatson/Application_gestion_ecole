import ecole from "../../../../../assets/ecole.png"
import sac from "../../../../../assets/sac-decole.png"
import salleDeClasse from "../../../../../assets/salle-de-classe.png"
import journaliste from "../../../../../assets/journaliste.png"
import recrutement from "../../../../../assets/recrutement.png"
import programmation from "../../../../../assets/programmation.png"

import style from "./HomeAcceuil.module.css"


const HomeAcceuil = () => {
    return(
        <div className={style.content}>
            <section className={style.home}>
                <h2>👉 Home</h2>
            </section>
            <div className={style.milieu}>
                <article className={style.article__ecole}>
                    <img src={ecole} style={({height:"160px"})} alt="" srcset="" />
                    <h3>Ecole d'excellence</h3>
                    <h6>Plus de 1000 bourses offertes chaque annee</h6>
                </article>

                <article className={style.article__ecole}>
                    <img src={sac} style={({height:"160px"})} alt="" srcset="" />
                    <h3>Ecole d'excellence</h3>
                    <h6>Plus de 1000 bourses offertes chaque annee</h6>
                </article>

                <article className={style.article__ecole}>
                    <img src={salleDeClasse} style={({height:"160px"})} alt="" srcset="" />
                    <h3>Ecole d'excellence</h3>
                    <h6>Plus de 1000 bourses offertes chaque annee</h6>
                </article>
            </div>

            <section className={style.info}>
                <h3>Formations Favorites</h3>
            </section>
            <section className={style.formation}>
                <article className={style.programmation}>
                    <img src={programmation} style={({height:"200px"})} alt="" />
                    <h4>Programmation <br/> ⭐⭐⭐⭐⭐</h4>
                    
                </article>

                <article className={style.journalisme}>
                    <img src={journaliste} style={({height:"160px"})} alt="" />
                    <h4>Journalisme & <br/>Communication <br/> ⭐⭐⭐⭐</h4>
                    
                </article>

                <article className={style.gestion}>
                    <img src={recrutement} style={({height:"160px"})} alt="" />
                    <h4>Gestion<br/>Ressources<br/>Humaines <br/> ⭐⭐⭐</h4>
                    
                </article>
            </section>
        </div>
    )
}
export default  HomeAcceuil;