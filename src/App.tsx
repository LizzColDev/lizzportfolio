import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Suspense, lazy } from 'react'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFound'))

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
