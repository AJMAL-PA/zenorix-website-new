import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import '../src/css/line-awesome.min.css';
import '../src/css/iconoir.css';
import '../src/css/fontawesome.min.css';
import '../src/css/animate.min.css';

import '../src/css/aixor-unit-test.css';
import '../src/css/style.css';
import '../src/css/responsive.css';

import Routers from "./Routers";
import { ToastContainer } from 'react-toastify';
import Dependency from './components/utilities/Dependency';
import RoutesScrollToTop from './components/utilities/RoutesScrollToTop';
import { useState } from 'react';
import Preloader from './components/utilities/Preloader';

function App() {

  //  Preloader
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? <Preloader onFinished={() => setIsLoading(false)} /> :
        <>
          <Routers />
          <RoutesScrollToTop />
          <ToastContainer />
          <Dependency />
        </>
      }
    </>
  )
}

export default App