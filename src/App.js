import React from 'react';
import Header from './components/Header';

 function App() {
   return (
     <div className="container">
       <Header />
       <h1>Hello World! React Task Tracker</h1>
       <h2>this is the right way to learn</h2>
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
