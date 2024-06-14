// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
Route,
Routes
} from "react-router-dom";
export default class App extends Component {
   pageSize=15;
  //  apiKey="f3e7ec9f0b6e24d2c975792a63963db40";
  // eslint-disable-next-line no-undef
  state={
    progress:0
  }
  // // eslint-disable-next-line no-undef
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {

    return (
     
      <div>
          <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Routes>
          <Route path='/' element={<News setProgress={this.setProgress}  key='general' size={this.pageSize} country='us' category='general' />}></Route>
            {/* <Route path='/general' element={<News key='general' size={pagesize} country='us' category='general' />}></Route> */}
            <Route path='/business' element={<News setProgress={this.setProgress}  key='business' size={this.pageSize} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress}  key='entertainment' size={this.pageSize} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress}  key='health' size={this.pageSize} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress}  key='science' size={this.pageSize} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress}  key='sports' size={this.pageSize} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress}  key='technology' size={this.pageSize} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
        
      </div>
    )
  }
}



// import './App.css';

// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import News from './components/News';
// import LoadingBar from 'react-top-loading-bar';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from 'react-router-dom';

// function App() {
//   const pageSize = 15;
//   const [progress, setProgress] = useState(0);

//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <LoadingBar color="#f11946" progress={progress} />
//         <Routes>
//           <Route
//             path="/"
//             element={<News setProgress={setProgress} key="general" size={pageSize} country="us" category="general" />}
//           ></Route>
//           <Route
//             path="/business"
//             element={<News setProgress={setProgress} key="business" size={pageSize} country="us" category="business" />}
//           ></Route>
//           <Route
//             path="/entertainment"
//             element={<News setProgress={setProgress} key="entertainment" size={pageSize} country="us" category="entertainment" />}
//           ></Route>
//           <Route
//             path="/health"
//             element={<News setProgress={setProgress} key="health" size={pageSize} country="us" category="health" />}
//           ></Route>
//           <Route
//             path="/science"
//             element={<News setProgress={setProgress} key="science" size={pageSize} country="us" category="science" />}
//           ></Route>
//           <Route
//             path="/sports"
//             element={<News setProgress={setProgress} key="sports" size={pageSize} country="us" category="sports" />}
//           ></Route>
//           <Route
//             path="/technology"
//             element={<News setProgress={setProgress} key="technology" size={pageSize} country="us" category="technology" />}
//           ></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;