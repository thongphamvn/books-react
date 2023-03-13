import { Route, Routes } from 'react-router';
import PageContainer from './components/Container';
import AboutPage from './pages/AboutPage';
import BookPage from './pages/BookPage';

function App() {
  return (
    <PageContainer>
      <Routes>
        <Route>
          <Route path='/' element={<BookPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>
      </Routes>
    </PageContainer>
  );
}

export default App;
