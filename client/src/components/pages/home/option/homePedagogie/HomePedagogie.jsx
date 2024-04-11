import style from "./HomePedagogie.module.css"


const HomePedagogie = () => {
    return(
        <div>
            <section className={style.pedagogie}>
                <h2>👉 PEDAGOGIE</h2>
            </section>
            <section className={style.header}>
                <article className={style.article}><h3>Type parcours: LMD</h3></article>
                <article className={style.article}><h3>Filière: GL</h3></article>
                <article className={style.article}><h3>Semestre: 1</h3></article>
                <article className={style.article}><h3>Moyenne génerale: 13.27</h3></article>
            </section>
            <section className={style.moyenne__detail}>
                <aside className={style.aside}>
                    <article className={style.matiere}><h3>METHODE NUMERIQUE, ALGEBRE & GEOMETRIE</h3></article>
                    <article className={style.credit}><h3>CREDIT: 4</h3></article>
                    <article className={style.note}><h3>16.00</h3></article>
                </aside>

                <aside className={style.aside}>
                    <article className={style.matiere}><h3>SCIENCE ARITHMETIQUE</h3></article>
                    <article className={style.credit}><h3>CREDIT: 1</h3></article>
                    <article className={style.note}><h3>12.00</h3></article>
                </aside>

                <aside className={style.aside}>
                    <article className={style.matiere}><h3>SCIENCE PHYSIQUE</h3></article>
                    <article className={style.credit}><h3>CREDIT: 2</h3></article>
                    <article className={style.note}><h3>16.00</h3></article>
                </aside>

                <aside className={style.aside}>
                    <article className={style.matiere}><h3>MATHEMATIQUE DISCRETE</h3></article>
                    <article className={style.credit}><h3>CREDIT: 3</h3></article>
                    <article className={style.note}><h3>13.00</h3></article>
                </aside>

                <aside className={style.aside}>
                    <article className={style.matiere}><h3>GEOMETRIE DANS L'ESPACE</h3></article>
                    <article className={style.credit}><h3>CREDIT: 2</h3></article>
                    <article className={style.note}><h3>11.00</h3></article>
                </aside>

                
            </section>
        </div>
    )
}
export default  HomePedagogie;