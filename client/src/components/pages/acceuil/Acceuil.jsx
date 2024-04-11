import style from "./Acceuil.module.css";
import { NavLink } from "react-router-dom";




const Acceuil = () => {
    return(
        <div className={style.body}>
            <div className={style.logo}>
                
                <span className={style.logo__nomApp}>ZARTAN SCHOOL</span>
            </div>
            <div className={style.milieu__descriptionApp}>
                <p>
                    Vestigatio Excellentiae
                </p>
            </div>
            <div className={style.auth}>
                <div>
                    <button className={style.auth__signup}>
                        <NavLink to={"/Signup"}>Inscription</NavLink>
                    </button>
                </div>
                <div>
                    {/* <button className={style.auth__login}>
                    <NavLink to={"/Login"}>Connexion</NavLink>
                    </button> */}
                    <button className={style.auth__signup}>
                        Inscription
                    </button>
                </div>
                <div>
                    <button className={style.auth__login}>
                    Connexion
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Acceuil;