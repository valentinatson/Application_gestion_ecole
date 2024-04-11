import logo from "../../../../assets/51.png"
import style from "./HomeMenu.module.css";
import {Outlet} from "react-router-dom";
import { NavLink } from "react-router-dom"

const HomeMenu = () => {
    return(
        <div  className={style.home}>
            <div className={style.slide}>
            
            <section className={style.section__profil}>
                <img src={logo} style={({width:"90px"},{height:"90px"})} alt="image_profil"/>
                <h2>Zartan Kinkaid</h2>
            </section>
            <div className={style.option}>
            <section className={style.acceuil}>
                <h2> <NavLink to={"/"} className={style.navLink} >🏠 Acceuil</NavLink> </h2>
            </section>
            <section className={style.Profil}>
                <h2> <NavLink to={"/profil"} className={style.navLink} >🪪 Profil</NavLink> </h2>
            </section>
            <section className={style.Cours}>
                <h2> <NavLink to={"/cours"} className={style.navLink} >🗒️ Emploi du temps</NavLink> </h2>
            </section>
            <section className={style.Finance}>
                <h2> <NavLink to={"/finance"} className={style.navLink} >💲 Finance</NavLink> </h2>
            </section>
            <section className={style.Activites}>
                <h2> <NavLink to={"/activite"} className={style.navLink} >🎯 Activites</NavLink> </h2>
            </section>
            <section className={style.Pédagogie}>
                <h2> <NavLink to={"/pedagogie"} className={style.navLink} >🎓 Pédagogie</NavLink> </h2>
            </section>
            <section className={style.Commentaires}>
                <h2> <NavLink to={"/commentaire"} className={style.navLink} >📞 Commentaires</NavLink> </h2>
            </section>
            <section className={style.Deconnexion}>
                <h2> <NavLink to={"/deconnexion"} className={style.navLink} >👈 Deconnexion</NavLink> </h2>
            </section>
            
            

{/* 📠📲🏅🎖️🪪📔📕📖📗📘📙📚📑📄📜📒📃📓🔖🏷️💴💵💶💷💸💳✉️📧📨📩📬📪📫📝📆📅🗓️📈📉📋📌🎮🎲🎰🕹️🏓🏸🎾🏀🥎🏐🏈🏉⚽⚾🚎🚌 */}

            </div>

            
        </div>

        <div className={style.placement}>
        <Outlet />
        </div>

        </div>
        
        
    )
}
export default  HomeMenu;