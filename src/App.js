import { useEffect, useState } from "react";
import "./App.css";
import NavigBar from "./components/NavigBar";
import axios from "axios";
import NewsContainer from "./components/NewsContainer";
import api_key from "./config";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(15);

  const newsAPI = async () => {
    try {
      const news = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}&category=${category}&pageSize=${loadMore}`
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
