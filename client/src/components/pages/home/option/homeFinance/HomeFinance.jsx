import style from "./HomeFinance.module.css"
import image from "../../../../../assets/finance.png"
/* import image from "../../../../../assets/dash.png" */

const HomeFinance = () => {
    return(
        <div className={style.container}>
            <section className={style.finance}>
                <h2>👉 FINANCE</h2>
            </section>
            <section className={style.content}>
                <img src={image} className={style.image} alt="" srcset="" />
            </section>
        </div>
    )
}
export default  HomeFinance;