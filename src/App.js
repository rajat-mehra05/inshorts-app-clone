import { useEffect, useState } from "react";
import "./App.css";
import NavigBar from "./components/NavigBar";
import axios from "axios";
import NewsContainer from "./components/NewsContainer";
import Footer from "./components/Footer/Footer";
import dotenv from "dotenv";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(15);

  dotenv.config();

  const newsAPI = async () => {
    try {
      const news = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    newsAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsResults, category, loadMore]);

  return (
    <div className="App">
      <NavigBar setCategory={setCategory} />

      <NewsContainer
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
      <Footer />
    </div>
  );
}

export default App;
