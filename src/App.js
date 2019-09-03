import React from 'react';
import Home from './Home'
import Menu from './Menu'
import logo from './image.css'
import Form from './Form'
import Listagem from './Listagem'
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Link}
from 'react-router-dom';

function App(){
return(
           <div className='container'>
            <div className='row'>
             <div>
        <Router>
            <Menu/>
            <Route path="/" exact component={Home}/>
            <Route path="/Form/" exact component={Form}/>
            <Route path="/Listagem/" exact component={Listagem}/>
            <Route path="/cadastro/" exact component={Home}/>
        </Router>
        </div>
                    
    </div>
    

    </div>

 );
}

export default App;
