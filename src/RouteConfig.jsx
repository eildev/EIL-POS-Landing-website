import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import App from './Home';
import Demo from './Demo';
import Feature from './Feature';

const RouteConfig = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/demo" element={<Demo></Demo>} />
          <Route path="/feature" element={<Feature></Feature>} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouteConfig;