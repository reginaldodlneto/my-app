import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import CustomersList from './pages/Customers/List'
import CustomersRegister from './pages/Customers/Register.js'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
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
        </Switch>
      </TemplateDefault>
    </Router>
  )
}

export default App
