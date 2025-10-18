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
          "Acabei de conversar com o meu irmão sobre boas práticas a nível de grandes empresas, foi uma conversa " +
          "super produtiva! Também aprovei o portfólio dele e o obriguei a melhorar esse projeto 😂. Vê o portifa " +
          "do meu brother aí em baixo, vai!",
      },
      {
        type: "link",
        content: "andrepereira.dev",
        url: "https://andrepereira.dev",
      },
    ],
    publishedAt: new Date("2024-07-23 21:31:56"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/117786763?v=4",
      name: "Andre Pereira",
      role: "Desenvolvedor Back-end",
    },
    content: [
      { type: "paragraph", content: "Olá, pessoal!" },
      {
        type: "paragraph",
        content:
          "Há um bom tempo já, estou codando praticamente o dia todo! Minha rotina é acordar cedo, estudar os " +
          "conteúdos da faculdade e, assim que livre, estudo cursos da Rocketseat e Udemy e coloco em prática " +
          "nos meus projetos.",
      },
      {
        type: "paragraph",
        content:
          "Está sendo demais! Aprendi muita coisa bacana nesses últimos dias e me sinto bem fluente em js e ts! " +
          "Para quem estava acostumado com linguagens de baixo nível e tratamento de Redes Neurais Convolucionais, " +
          "programar em ts é tão fácil como tirar doces de criança 😂 😂",
      },
    ],
    publishedAt: new Date("2024-06-18 11:59:03"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/117786763?v=4",
      name: "Andre Pereira",
      role: "Desenvolvedor Back-end",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Sempre fui um dev super curioso, viciado em aprender coisas novas. Minha jornada na computação já " +
          "me levou pra todo lado: do front-end ao blockchain. Gosto de ter essa visão mais ampla das coisas.",
      },
      {
        type: "paragraph",
        content:
          "Esse projeto aqui é uma dessas aventuras. Comecei ele há uns dois anos e, revendo agora, vi que " +
          "tinha ficado legal demais para deixar na gaveta. Dei um gás final nos últimos dias para deixar o " +
          "principal funcionando, mas confesso que a lista de ideias para o futuro tá bem grande!",
      },
      {
        type: "paragraph",
        content:
          "Como o meu foco total agora é continuar desenvolvendo meus projetos backend, decidi lançar ele assim " +
          "mesmo, como um MVP. Considerem essa a V1, o mais importante agora era colocar no ar e compartilhar!",
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

//          "Sou um dev muito curioso e com sede de conhecimento e aprendizado. Tenho muita experiência na computação, e, por isso, sei de tudo um pouco, desde front-end até blockchain. Iniciei este projeto há dois anos e acho que ele ficou muito bom para não ser apresentado no Github. No entanto, ainda não havia finalizado. Por isso, me dediquei esses últimos dias para 'terminá-lo', mas ainda ficaram algumas pequenas pendências, mas, optei por manter o foco nos projetos back que estou desenvolvendo. Por isso, priorizei a entrega da base funcional do presente projeto, mas esse ainda não é o estado final.",
