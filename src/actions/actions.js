
import store from '../store/store'
import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_LUZPiwBfQcVFiKQIVE4Huko-lD8Yiu4",
    authDomain: "trello-fireact.firebaseapp.com",
    databaseURL: "https://trello-fireact.firebaseio.com",
    projectId: "trello-fireact",
    storageBucket: "trello-fireact.appspot.com",
    messagingSenderId: "886010104957"
  };
  firebase.initializeApp(config);

export function readBoard () {
   firebase.database().ref('cards').on ('value', res => {
      let stages = []
      res.forEach ( snap  => {
         const stage = snap.val();
         stages.push (stage);
      })
      store.setState ({
         stages : stages
      }) 
   });

   firebase.database().ref('tasks').on ('value', res => {
      let tasks = [];
      res.forEach ( snap  => {
          const task = snap.val();
          tasks.push (task)
      })      
      store.setState ({
         tasks : tasks
      }) 
   });   
}

export function  addStage (text) {

   let stages = [...store.getState().stages];
   stages.push (  text )
   /*store.setState ({
      stages : stages
   })  */

   firebase.database().ref('cards').push (text);
}

export function  addTask (stage, text) {
   console.log ('addTask:', stage + ' - ' +  text);

   let tasks = [...store.getState().tasks];

   let newTask = {
      id : store.getState().tasks.length,
      title: text,
      stage : stage
   } 

   firebase.database().ref('tasks/' + newTask.id).set (newTask);
   /*
   store.setState ({
      tasks : tasks
   })  */
}

