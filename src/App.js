import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

 function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Music Club',
        day: 'Feb 6th at 5:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Football Match',
        day: 'Feb 7th at 4:30pm',
        reminder: false,
    }
])
   return (
     <div className="container">
       <Header  />
       <Tasks tasks={tasks}/>
     </div>
   );
 }

//Class component
// class App extends React.Component{
//   render(){
//     return <div>
//       <h1>Hello From Class</h1>
//           </div>
//   }
// }

export default App;
