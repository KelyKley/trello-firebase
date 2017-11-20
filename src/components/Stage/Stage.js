
import React from 'react';
import Task from '../Task/Task';
import {addTask} from '../../actions/actions';
import "./Stage.css";
//import React, { Component } from "react";


class Stage  extends React.Component{
   render () {
      const list = this.props.tasks.map ( task => {
         return <Task  key = {task.id} title = {task.title}/>
      })
      return  (
         <div className="container-board">
               <h3> {this.props.title}</h3>

               {list}

            <form onSubmit = { (e) => {
               e.preventDefault();
               console.log ('this.taskInputRef.value', this.taskInputReference.value)
               addTask (this.props.title, this.taskInputReference.value);
            }}>
            
               <input className="add-k" type="text" ref = {e => this.taskInputReference = e}/>
               <button className="addButton" type="submit">
                  Add a new card...
               </button>
            </form>

         </div>
      )
   }
}
export default Stage;

