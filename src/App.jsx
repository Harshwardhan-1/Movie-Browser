import {Routes,Route} from 'react-router-dom';
import HomePage from './HomePage';
import ResultPage from './ResultPage';
import ViewPage from './ViewPage';
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="ResultPage" element={<ResultPage />} />
      <Route path="ResultPage/ViewPage" element={<ViewPage />} />
    </Routes>
    
    </>
  )
}

export default App
