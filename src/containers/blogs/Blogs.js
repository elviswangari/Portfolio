import React, { useState, useEffect } from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Blogs({ theme }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from Dev.to API
    fetch("https://dev.to/api/articles?username=elviswangari")
      .then((response) => response.json())
      .then((data) => {
        // Store the fetched blogs in the state
        setBlogs(data);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div>
      <Header theme={theme} />
      <div className="main" id="blogs">
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  blog={{
                    url: blog.url,
                    image: blog.social_image,
                    title: blog.title,
                    description: blog.description,
                  }}
                />
              ))
            ) : (
              <p>No blogs available at the moment</p>
            )}
          </div>
        </div>
      </div>
      <Footer theme={theme} />
    </div>
  );
}
