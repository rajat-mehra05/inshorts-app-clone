import { useEffect, useState } from "react";
import "./App.css";
import NavigBar from "./components/NavigBar";
import axios from "axios";
import NewsContainer from "./components/NewsContainer";
import Footer from "./components/Footer/Footer";
import { Spinner } from "react-bootstrap";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(15);
  const [loading, setLoading] = useState(false);

  const newsAPI = async () => {
    try {
      const news = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      setLoading(true);
    } catch (err) {
      alert("Requests exhausted. Try again after 24 hours");
    }
  };

  useEffect(() => {
    newsAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsResults, category, loadMore]);

  return (
    <div className="App">
      <NavigBar setCategory={setCategory} />
      {loading ? (
        NavigBar
      ) : (
        <Spinner animation="grow">
          {" "}
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
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
