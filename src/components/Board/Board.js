import React from 'react'
import {addStage} from '../../actions/actions'
import Stage from '../Stage/Stage';
import './Board.css'

const NavBar = () => {
  return (
    <div id="k-nav">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1 className="navbar-brand navi">
              <img
                alt="Brand"
                src="https://a.trellocdn.com/images/50b4ebc64391dc394a38e73aed57f0e2/header-logo.png"/>
            </h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Board = ({stages, tasks}) => {
   const list = stages.map ( stage => {
      return <Stage  key={stage} title={stage} 
         tasks = {  tasks.filter ( e => e.stage === stage )}
      />
   });

   return (
     <div>
       <NavBar/>
      <div className = "Board-container">
          <div className = "Board-column">
             {list}
          
          <div>
            <form className="addCard" onSubmit = { (e) => {
               e.preventDefault();
               addStage (this.stageInputRef.value);
            }}>
               <input type="text" ref = {e => this.stageInputRef = e}/>
               <button type="submit">
                  LIST
               </button>
               </form>
            </div>
            </div>
      </div>
      </div>
   ); 
}

export default Board;
