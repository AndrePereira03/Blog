import styles from './Post.module.css';

export function Post()
{
    return (
        <article className = {styles.post}>
            <header>
                <div className = { styles.author }>
                    <img className = {styles.avatar} src="https://avatars.githubusercontent.com/u/52306002?v=4" alt="Foto de perfil" />
                        <div className = { styles.authorInfo }>
                            <strong>Germain Girndt</strong>
                            <span>Web Developer</span>
                        </div>
                </div>

                <time title = "20 de julho às 20:37h" dateTime = "2023-07-20 20:36:56">Publicado há 1h</time>
            </header>

            <div className = {styles.content}>
                <p>Fala galeraa 👋 </p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <p><a href = "">jane.design/doctorcare </a></p>
                <p>
                    <a href = "">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}