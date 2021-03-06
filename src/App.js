import './App.css';
import MainPage from './pages/MainPage';
import EditPost from './pages/EditPost';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from './pages/QnABoard/PostList/PostList';

function App() {
  return (
    <div className="App">
      
       <Router>
           <Route path="/main" component={MainPage}/>
           <Route path="/add-review" component={EditPost}/> 
       </Router>
    </div>
  );
}

export default App;
