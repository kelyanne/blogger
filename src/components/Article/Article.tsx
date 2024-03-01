import { ArticleItem } from "../../articleStore";
import styles from "./article.module.css";

type Props = {
  article: ArticleItem;
};

export function Article({ article }: Props) {
  return (
    <div className={styles.cards}>
      <h1>{article.title}</h1>
      <span>Author: {article.author}</span>
      <span>Category: {article.category}</span>
      <p>{article.text}</p>
    </div>
  );
}
