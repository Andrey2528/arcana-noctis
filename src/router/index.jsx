import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import TarotCards from '../pages/TarotCards';
import AboutTarot from '../pages/AboutTarot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'tarot-cards',
        element: <TarotCards />
      },
      {
        path: 'about-tarot',
        element: <AboutTarot />
      }
    ]
  }
]);

export default router;
