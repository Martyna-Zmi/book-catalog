import {RenderNormal} from "../index";
import {books} from "./Books";
import React, {useRef} from "react";

export const AddBook = function (){
    const descriptionRef = useRef(null);
    const categoryRef = useRef(null);
    const authorRef = useRef(null);
    const titleRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        books.push({title: titleRef.current.value, author: authorRef.current.value, category: categoryRef.current.value, description: descriptionRef.current.value})
        titleRef.current.value = ""
        authorRef.current.value = ""
        descriptionRef.current.value = ""
        RenderNormal()
    }
    return (
        <div className="left">
            <form name="addBook" onSubmit={handleSubmit}>
                <h2 className="heading">Add new book</h2>
                <label>Title:   </label>
                <input required ref={titleRef} name="title" type="text"/>
                <br></br>
                <label>Author: </label>
                <input required ref={authorRef} name="author" type="text"/>
                <br></br>
                <label>Category: </label>
                <select required ref={categoryRef} name="category" id="category">
                    <option value="romance">Romance</option>
                    <option value="horror">Horror</option>
                    <option value="thriller">Thriller</option>
                    <option value="fantasy">Fantasy</option>
                </select>
                <br></br>
                <label>Description: </label>
                <br></br>
                <textarea required ref={descriptionRef} name="description" rows="4" cols="50"
                          placeholder="Short description of the book"></textarea>
                <button onClick={RenderNormal} type="submit">Send</button>
            </form>
        </div>
    )
}