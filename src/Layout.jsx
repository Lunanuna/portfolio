import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToTop'

function Layout() {
  return (
    <div className="layout">
      <ScrollToHash/>
      <Header />
      <main><Outlet /></main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default Layout