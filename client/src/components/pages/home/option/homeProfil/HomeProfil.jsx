import style from "./HomeProfil.module.css";
import profil  from "../../../../../assets/51.png";

const HomeProfil = () => {
    return (
        <div>
            <section className={style.profile}>
                <h2>👉 PROFIL</h2>
        </section>
            <div className={style.container}>
        
        <section className={style.entete}>
        <article className={style.profil}>
            <img src={profil} style={({width:"190px"},{height:"190px"})} alt="image__profile" />
        </article>
        <article className={style.info1}>
            <h2>Nom : ATSON</h2>
            <h2>Prénom : VALENTIN</h2>
            <h2>Matricule : 22401-24</h2>
        </article>
        <article className={style.info2}>
            <h2>Age : 21 ANS</h2>
            <h2>Filière : GL</h2>
            <h2>Type de Parcours : LMD</h2>
        </article>
        </section>


        <section  className={style.description}>
            <article>
                <h2>Téléphone: 998812975</h2>
                <h2>Adresse e-mail: koffi23@gmail.com</h2>
                <h2>Adresse: Adakpamé, N°955</h2>
            </article>
            <article>
                <h2>Groupe Sanguin: O+</h2>
                <h2>Handicap: Non</h2>
                <h2>Situation Matrimoniale: Divorcé(e)</h2>
            </article>
            <article>
                <h2>Nom du titulaire: ATSON</h2>
                <h2>Prénom du titulaire: Koffi</h2>
                <h2>Téléphone du titulaire: 998720523</h2>
            </article>
        </section>
        
      </div>
        </div>
      
    );
  };
  
  export default HomeProfil;

