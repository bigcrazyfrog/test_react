import './styles/style.scss';
import { Calendar } from '../pages/Calendar';
import { Provider } from "react-redux";
import { store } from './store';
import { Login } from '../pages/Login/login';
import { Registration } from '../pages/Registration/registration';
import { WithProviders } from './providers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './providers/privateRouter';

// потом заменить на нормальный Provider
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={
          <Provider store={store}>
            <Login />
          </Provider>}
        />

        <Route path="/registration" element={
          <Provider store={store}>
            <Registration />
          </Provider>}
        />

        <Route path="/" element={
          <Provider store={store}>
            <PrivateRoute />
          </Provider>
        }>
          <Route path="" element={
            <Provider store={store}>
              <Calendar />
            </Provider>}
          />
        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App;