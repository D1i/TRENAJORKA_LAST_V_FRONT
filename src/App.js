import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { UsersListPage } from './page/usersList';
import { ExercisesListPage } from './page/exercisesList';
import { AuthPage } from './page/auth';
import { Header } from './components/header';

function App() {

  return (
        <BrowserRouter>
        <Header firstName="Максим" secoundName="Калин" />
        <div className="App">
          <Route path="/auth" component={AuthPage} />
          <Route path="/usersList" component={UsersListPage} />
          <Route path="/userProfile" component={ExercisesListPage} />
        </div>
        </BrowserRouter>
  );
}

export default App;
