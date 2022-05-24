import React, { useState } from "react";
import { Button } from '@mantine/core';
import { Input } from '@mantine/core';
import { Textarea } from '@mantine/core';
import './Post.css';

export const Post = ({ title, body, id, onEdit}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div className="post__main">
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <Input
            variant="filled" 
            placeholder="Post"
            name="name"
            defaultValue={title}
           />
          <Input
            variant="filled" 
            placeholder="Comment"
            name="email"
            defaultValue={body}
           />
          <button
            className="save_button" 
            onSubmit={handleOnEditSubmit}>
                Save
          </button>
        </form>
      ) : (
        <div className="post">
          <Textarea>{title}</Textarea>
          <Textarea>{body}</Textarea>
          <div className="buttons__post">
            <Button variant="light" onClick={handleEdit}>Edit</Button>
          </div>
        </div>
      )}
    </div>
  );
};
