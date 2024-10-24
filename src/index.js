import React from "react";
import {createRoot} from "react-dom/client";
import {BookCatalog} from "./components/BookCatalog"
import {SelectCategory} from "./components/SelectCategory"
import {AddBook} from "./components/AddBook"
import {books} from "./components/Books"
const root = createRoot(document.getElementById("root"))
export const ReRenderFilter = function (){
    let category = document.getElementById("category").value;
    root.render(<div className="mainFlex">
        <div className="right">
            <h2 className="heading">Books</h2>
            <SelectCategory/>
            <BookCatalog bookArray={books.filter(book => {
                if (category === "wszystko") {
                    return book
                }
                return book.category === category
            })}/>
        </div>
        <AddBook/>
    </div>)
}

export const RenderNormal = function () {
    root.render(<div className="mainFlex">
        <div className="right">
            <h2 className="heading">Books</h2>
            <SelectCategory/>
            <BookCatalog bookArray={books}/>
        </div>
        <AddBook/>
    </div>)
}
RenderNormal();
