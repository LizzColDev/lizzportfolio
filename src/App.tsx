import { HashRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Container } from 'react-bootstrap'
import './App.css'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'

const HomePage = lazy(() => import('./components/pages/HomePage'))
const ProjectsPage = lazy(() => import('./components/pages/ProjectsPage'))
const ContactPage = lazy(() => import('./components/pages/ContactPage'))
const NotFoundPage = lazy(() => import('./components/pages/NotFound'))

function App () {
  return (
    <HashRouter>
      <Container fluid className='app-container'>
        <Header />
        <Container className='content-container'>
          <Routes>
            <Route
              path='/'
              element={
                <Suspense fallback='Loading...'>
                  <HomePage />
                </Suspense>
          }
            />
            <Route
              path='/projects'
              element={
                <Suspense fallback='Loading...'>
                  <ProjectsPage />
                </Suspense>
          }
            />
            <Route
              path='/contact'
              element={
                <Suspense fallback='Loading...'>
                  <ContactPage />
                </Suspense>
          }
            />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Container>
        <Footer />
      </Container>
    </HashRouter>
  )
}

export default App
