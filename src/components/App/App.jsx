import { useEffect, useState } from 'react';
import css from './App.module.css';
import { fetchArticles } from '../../articles-api';
import ArticleList from '../ArticleList/ArticleList';
import SearchForm from '../SearchForm/SearchForm';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  // useEffect(() => { 
  //   async function getArticles() {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetchArticles('react');
  //       setArticles(data);
  //       // console.log(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   getArticles();
  // }, []);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setArticles([]);

    // console.log(newQuery);
    // try {
    //   setIsLoading(true);
    //   const data = await fetchArticles(newQuery);
    //   setArticles(data);
    // } catch (error) {
    //   setError(true);
    // } finally {
    //     setIsLoading(false);
    //   }
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    // console.log(query, page);
    if (query === '') {
      return;
    }

    async function getArticles() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchArticles(query, page);
        setArticles(prevArticles => {
          return [...prevArticles, ...data]
        });
      } catch (error) {
        setError(true);
    } finally {
        setIsLoading(false);
      }
    }

    getArticles();
}, [page, query])

  return (
    <div className={css.container}>
      <h1>HTTP requests in React!!!</h1>

      <SearchForm onSearch={handleSearch} />

      {error && <b>Oops! There was an error! please reload!</b>}

      {/* {isLoading && <b>Please wait, loading articles...</b>} */}
      
      {articles.length > 0 && <ArticleList items={articles} />}

      {isLoading && <b>Please wait, loading articles...</b>}

      {articles.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>Load more articles</button>)}
      </div>
  );
}
