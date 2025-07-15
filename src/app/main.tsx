import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from "./App.tsx"
import { Provider } from 'react-redux';
import { store } from './store';

// Creamos el root para React 18+ y renderizamos la app
/*
Envolvemos la App en el Provider, y le pasamos store.
Esto hace que cualquier componente dentro de App pueda usar Redux (leer y escribir en el estado global).

“Provider” = Conecta Redux con toda tu app.
Sin eso, useSelector y useDispatch no funcionarían.
*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
