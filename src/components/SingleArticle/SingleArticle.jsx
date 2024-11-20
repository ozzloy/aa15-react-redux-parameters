import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./SingleArticle.css";

const SingleArticle = () => {
  const { id } = useParams();
  const articles = useSelector((state) => state.articleState.entries);
  const isLoading = useSelector(
    (state) => state.articleState.isLoading,
  );

  if (isLoading) {
    return (
      <div className="singleArticle">
        <h2>loading...</h2>
      </div>
    );
  }

  const article = articles.find((article) => article.id === id);

  if (!article) {
    return (
      <div className="singleArticle">
        <h2>Article not found</h2>
      </div>
    );
  }

  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
