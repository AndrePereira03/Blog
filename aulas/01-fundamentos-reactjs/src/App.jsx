import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/52306002?v=4",
      name: "Germain Girndt",
      role: "AI Dev SAP",
    },
    content: [
      { type: "paragraph", content: "Opaaa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de conversar com o meu irmão sobre boas práticas a nível de grandes empresas, foi uma conversa super produtiva! Também aprovei o portfólio dele e obriguei ele a trocar o conteúdo antigo desse projeto 😂. Vê o portifa do meu brother aí em baixo, vai!",
      },
      { type: "link", content: "andrepereira.dev" },
    ],
    publishedAt: new Date("2024-07-23 21:31:56"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/117786763?v=4",
      name: "Andre Martins",
      role: "Desenvolvedor Back-end",
    },
    content: [
      { type: "paragraph", content: "Olá, pessoal!" },
      {
        type: "paragraph",
        content:
          "Há um bom tempo já, estou codando praticamente o dia todo! Minha rotina é acordar cedo, estudar os conteúdos da faculdade e, assim que livre, estudo cursos da Rocketseat e Udemy e coloco em prática nos meus projetos. Está sendo demais! Aprendi muita coisa bacana nesses últimos dias e me sinto bem fluente em js e ts! Para quem estava acostumado com linguagens de baixo nível e tratamento de Redes Neurais Convolucionais, programar em ts é tão fácil como tirar doces de criança 😂 😂",
      },
    ],
    publishedAt: new Date("2024-06-18 11:59:03"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
