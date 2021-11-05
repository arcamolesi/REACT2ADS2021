import react from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CreateProduto from './ProdutoComponent/CreateProduto';
import EditProduto from './ProdutoComponent/EditProduto';
import ListProduto from './ProdutoComponent/ListProduto';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/CreateProduto'} className="nav-link">
                    Adicionar Produto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/ListProduto'} className="nav-link">
                    Listar Produtos
                  </Link>
                </li>
              </ul>
            </div>
          </nav> <br />

          <Switch>
            <Route exact path="/CreateProduto" component={CreateProduto} />
            <Route path="/edit/:id" component={EditProduto}/>
            <Route path="/ListProduto" component={ListProduto}/>
          </Switch>

       </div>
      </Router>
    </div>

  );
}
export default App;