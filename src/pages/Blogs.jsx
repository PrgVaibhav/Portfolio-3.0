import "../styles/Blogs.scss";
import { useEffect, useState } from "react";
import { Blog } from "../components/Blog";
export const Blogs = () => {
  const [blogPost, setBlogPost] = useState([]);
  const query = `
  {
    user(username: "devXvaibhav"){
        publication{
            posts(page: 0){
                title,
                coverImage,
                brief,
                slug,
                dateAdded,
            }
        }
    }
  }  
    `;

  const fetchBlogPost = async () => {
    try {
      const response = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const apiResponse = await response.json();
      setBlogPost(apiResponse?.data.user.publication.posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogPost();

    () => {
      setBlogPost(); // cleanup function
    };
  }, [blogPost]);
  return (
    <>
      <div className="blogs-container">
        <h2>Blogs</h2>
        <p>
          I have recently started writing blogs on Hashnode, here are some of my
          blogs. I will be adding more blogs soon. You can also check out my
          blogs on Hashnode. Here you can see my last 5 blogs.
        </p>
        <p>
          Visit my Hashnode profile{" "}
          <a
            href="https://vaibhavwrites.hashnode.dev/"
            target="_blank"
            aria-label="Read more from my hashnode blog"
          >
            here
          </a>
        </p>
      </div>
      {blogPost?.map((blog) => (
        <Blog key={blog.slug} {...blog} />
      ))}
    </>
  );
};
