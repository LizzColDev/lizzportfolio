import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Suspense, lazy } from 'react'
import Footer from './components/Footer'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFound'))

function App () {
  return (
    <HashRouter>
      <Header />
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
      <Footer />
    </HashRouter>
  )
}

export default App
