import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Blogs.scss";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [topPostview, SetTopPostView] = useState(true);
  const [showTrendingPost, setShowTrendingPost] = useState(true);
  const [topIcon, setTopIcon] = useState(true);
  const [trendIcon, setTrendIcon] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(
        "https://giropay.xyz/api/v1/giro-app/products"
      );
      setBlogs(res.data.data);
    };
    fetchBlogs();
  }, []);

  const topPost = blogs.slice(0, 6);

  const toggleTrendingPost = () => {
    setTrendIcon(!trendIcon);
    setShowTrendingPost(!showTrendingPost);
  };

  const togglePost = () => {
    setTopIcon(!topIcon);
    SetTopPostView(!topPostview);
  };
  return (
    <div className="blogs">
      <Header />
      <div className="top-post">
        <button id="top-btn" onClick={togglePost}>
          {topIcon ? (
            <i className="fa-solid fa-circle-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-circle-chevron-down"></i>
          )}{" "}
          Top Trend
        </button>
      </div>
      <div className="post-row">
        {topPostview &&
          topPost.map(({ metaImageUrl, description, id }) => (
            <div
              className="post-container col-md-12 col-12"
              data-aos="fade-left"
              style={{ backgroundImage: `url(${metaImageUrl})` }}
              key={id}
            >
              <p>{description}</p>
            </div>
          ))}
      </div>

      <div className="trending">
        <div className="top-post">
          <button id="top-btn" onClick={toggleTrendingPost}>
            {trendIcon ? (
              <i className="fa-solid fa-circle-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-circle-chevron-down"></i>
            )}{" "}
            Trending
          </button>
        </div>
        <div className="trending-row row">
          {showTrendingPost &&
            blogs.map(({ metaImageUrl, description, id }) => (
              <div
                className="trending-container col-md-6 col-12"
                data-aos="zoom-in"
                style={{ backgroundImage: `url(${metaImageUrl})` }}
                key={id}
              >
                <p>{description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
