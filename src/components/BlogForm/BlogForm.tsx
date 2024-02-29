import { FormEvent } from "react";
import { useStore, ArticleItem } from "../../articleStore";
import styles from "./blog-form.module.css";

export function BlogForm() {
  const {
    articles,
    addNewArticle,
    setId,
    id,
    setTitle,
    title,
    setAuthor,
    author,
    setCategory,
    category,
    setText,
    text,
  } = useStore();

  function handleAddArticle(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    setId(id);
    const newArticle: ArticleItem = {
      id: id,
      title: title,
      author: author,
      category: category,
      text: text,
    };
    addNewArticle(newArticle);
  }

  return (
    <div className={styles.container}>
      <form id="create-blog">
        <input
          className={styles.inputTitle}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          placeholder="Author"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <input
          placeholder="Category"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <textarea
          placeholder="What is in your mind?"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button onClick={handleAddArticle}>Create</button>
      </form>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}
