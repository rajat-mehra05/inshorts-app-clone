import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "./NewsCard/NewsCard";
import "./NewsContainer.css";

const NewsContainer = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <>
      <Container maxWidth="md">
        <div className="content">
          <div className="downloadMessage">
            <span className="downlaodText">
              For the best experiences download the inshorts app in your
              smartphone.
            </span>
            <img
              height="80%"
              style={{ cursor: "pointer" }}
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              alt="app store"
            />
            <img
              height="80%"
              style={{ cursor: "pointer" }}
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              alt="play store"
            />
          </div>
          {newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} />
          ))}

          {/* Load more Pagination ------------------ */}

          {loadMore <= newsResults && (
            <>
              <hr />
             {/*
              <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
              </button> */}
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default NewsContainer;
