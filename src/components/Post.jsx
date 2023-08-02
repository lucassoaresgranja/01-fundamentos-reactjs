import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/lucassoaresgranja.png"
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Soares Granja</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio as 11:13" dateTime="2022-05-11 08:13:50">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal 👋</p>
        <p>
          Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
          criar todo o design e codar na unha, mas consegui 💪🏻
        </p>
        <p>
          <a href=""> Acesse e deixe seu feedback 👉 devonlane.design</a>
        </p>
        <p>
          <a href="">#uiux</a> <a href="">#userexperience</a>
          {""}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
