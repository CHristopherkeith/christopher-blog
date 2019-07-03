import React from 'react';
import 'antd/dist/antd.css';
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/monokai-sublime.css';
import style from './App.module.css';
import './utils/marked/monokai_sublime.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import {Layout, Home, Tags, About, TagDetail} from './views'
import {Article} from './components'

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
            <Route path="/detail/:id" render={() => <Article isDetail></Article>}/>
            <Route path="/tagdetail/:name" render={() => <TagDetail isDetail></TagDetail>}/>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
