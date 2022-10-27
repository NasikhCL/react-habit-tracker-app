import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="home">
            <div className="card">
                <h2 className="habit-name">Workout</h2>
                <h5 className="habit-day">Wed Tue Fri Sat Sun Mon Tue</h5>
                <h5 className="habit-time">6:00 AM</h5>
                <img className="delete-btn" src="https://img.icons8.com/pastel-glyph/30/000000/trash.png" alt="delete-btn"/>
                <select>
                    <option>Task Status</option>
                    <option>completed</option>
                    <option>not completed</option>
                </select>

            </div>
            <Link to="/add"><div className="add-task-btn"><img src="https://img.icons8.com/plasticine/100/000000/plus-2-math.png" alt="add-habit"/></div></Link>
        </div>
    )
}