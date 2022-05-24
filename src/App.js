import React, { useEffect, useState } from "react";
import { Post } from "./components/Post/Post";
import { AddPost } from "./components/AddPost/AddPost";
import { Header } from "./components/Header/Header";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        let res=[]
          res.push(data[0])
        setPosts(res)})
      .catch((error) => console.log(error));
  }; 

  const onAdd = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setPosts((posts) => [...posts, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, title, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => { 
        const updatedPosts = posts.map((post) => {
          if (post.id === id) {
            post.title = title;
            post.body = body;
          }

          return post;
        });

        setPosts((posts) => updatedPosts);
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="App">
      <Header/>
      <AddPost onAdd={onAdd} />
      {posts.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          title={post?.title}
          body={post?.body}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
