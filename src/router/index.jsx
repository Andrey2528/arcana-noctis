import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import TarotCards from '../pages/TarotCards';
import AboutTarot from '../pages/AboutTarot';
import DayCard from '../pages/DayCard';

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
      },
      {
        path: 'day-card',
        element: <DayCard />
      }
    ]
  }
]);

export default router;
