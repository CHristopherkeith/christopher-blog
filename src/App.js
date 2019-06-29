import React from 'react';
import 'antd/dist/antd.css';
// import 'highlight.js/styles/github.css'
import 'highlight.js/styles/railscasts.css';
import style from './App.module.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import {Layout, Home, Tags, About} from './views'

console.log(style, '[style]')
function App() {
  return (
    <div className={style.app}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/tags" component={Tags}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
