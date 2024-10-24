import React from "react";
import {ReRenderFilter} from "../index"
export const SelectCategory = function (){
    return (
        <div className="categorySelect">
            <label>Select category:</label>
            <select name="category" id="category">
                <option value="wszystko">All</option>
                <option value="romance">Romance</option>
                <option value="horror">Horror</option>
                <option value="thriller">Thriller</option>
                <option value="fantasy">Fantasy</option>
            </select>
            <button onClick={ReRenderFilter}>Filter</button>
        </div>
    )
}