import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routers/AllRoutes';
function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
