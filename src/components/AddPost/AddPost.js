import React from "react";
import { Button } from "@mantine/core";
import { Input } from '@mantine/core';
import './AddPost.css';


 export const AddPost = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
  };

  return (
    <div className="addpost__main">
        <form onSubmit={handleOnSubmit}>
        <Input
        width={50}
        variant="filled"
        placeholder="Post"
        name="name" />
        <Input
            variant="filled" 
            placeholder="Comment"
            name="email" />
        <button
          className="add_button" 
          onSubmit={handleOnSubmit}>
            Add
        </button>
        </form>
        <hr/>
    </div>
        
  );
};


