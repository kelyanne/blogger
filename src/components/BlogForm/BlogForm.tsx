import { FormEvent } from "react";
import { useStore, ArticleItem } from "../../articleStore";
import styles from "./blog-form.module.css";
import { Article } from "../Article/Article";

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
    clearInputs,
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
    clearInputs();
  }

  const disabled =
    title === "" || author === "" || category == "" || text === ""
      ? true
      : false;

  return (
    <div>
      <div className={styles.container}>
        <form id="create-blog">
          <input
            className={styles.inputTitle}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            placeholder="Author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <input
            placeholder="Category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></input>
          <textarea
            placeholder="What is in your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button disabled={disabled} onClick={handleAddArticle}>
            Create
          </button>
        </form>
      </div>
      <div className={styles.cardList}>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
