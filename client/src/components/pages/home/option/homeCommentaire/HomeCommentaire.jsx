import style from "./HomeCommentaire.module.css"


const HomeCommentaire = () => {
    return(
        <div>
            <section className={style.commentaire}>
                <h2>👉 COMMENTAIRES</h2>
            </section>
            <section className={style.area}>
                <textarea name="commentaire" id="" cols="150" rows="12"></textarea>
                <button className={style.send}><h2>Soumettre 📩</h2></button>
                
            </section>

            <section className={style.last__comments}>
                <h3>Derniers commentaires:</h3>
            </section>

            <section>
                <article className={style.comments}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati in illum expedita earum illo. Quasi voluptatibus sit repellendus aut, ex sunt veritatis cumque consequatur sapiente consectetur fuga, accusantium vitae cum molestias reiciendis voluptatem rem, corporis debitis enim optio aperiam harum velit voluptatum. Facere quasi nisi earum possimus perspiciatis sunt, harum iste odio eum voluptate minima architecto rem debitis quos, veritatis eligendi atque quis modi quisquam. Voluptatibus rem culpa maiores quis.</p>
                    <h3>12-08-2024 09:46</h3>
                </article>
            </section>
        </div>
    )
}
export default  HomeCommentaire;