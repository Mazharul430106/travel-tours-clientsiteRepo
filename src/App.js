import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;