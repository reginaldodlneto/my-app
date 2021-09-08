import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import TemplateClean from './templates/Clean'

import CustomersList from './pages/Customers/List'
import CustomersRegister from './pages/Customers/Register.js'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <TemplateClean title="Acesso Restrito" Component={Login} />
        </Route>
        <TemplateDefault>
          <Route path="/customers/add">
            <TemplatePage
              title="Cadastro de clientes"
              Component={CustomersRegister}
            />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={CustomersList} />
          </Route>
          <Route path="/">
            <TemplatePage title="Pagina Inicial" Component={Home} />
          </Route>
        </TemplateDefault>
      </Switch>
    </Router>
  )
}

export default App
