import { Post } from './components/Post';
import { Header } from './components/Header';
import { SideBar } from './components/Sidebar';

import styles   from './App.module.css';

import "./global.css";


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam id corrupti quasi nostrum recusandae maxime labore eaque enim optio vel mollitia, quis qui odit earum, blanditiis dolores incidunt officiis alias."
          />

          <Post
            author="Lucas Soares"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam id corrupti quasi nostrum recusandae maxime labore eaque enim optio vel mollitia, quis qui odit earum, blanditiis dolores incidunt officiis alias."
          />
        </main>
      </div>
    </div>
  );
}
