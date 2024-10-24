import React from "react";
import {BookInfo} from "./BookInfo"
export const BookCatalog = function ({bookArray}){
    return (
        <ul className="MainList">
            {bookArray.map((book, index) => BookInfo(book, index))}
        </ul>
    )
}