import React from "react";
export const BookInfo = function (book, index){
    return (
        <div className="book-content">
            <li className="listElement" key={index}>
                <strong>
                    <text>{book.title} by {book.author}, Category: {book.category}</text>
                </strong>
                <br></br>
                <text>Description: {book.description}</text>
            </li>
        </div>
    )
}