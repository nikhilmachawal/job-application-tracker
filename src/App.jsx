import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { initialJobs } from './data/initialJobs'

// Import pages
import Dashboard from './pages/Dashboard'
import Applications from './pages/Applications'
import AddApplication from './pages/AddApplication'
import Statistics from './pages/Statistics'
import Settings from './pages/Settings'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [globalSearch, setGlobalSearch] = useState('')
  const [jobs, setJobs] = useState(initialJobs)

  return (
    <div className={`app-layout ${darkMode ? 'dark' : ''}`}>
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Main Area */}
      <div className="main-wrapper">
        <Header 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          globalSearch={globalSearch}
          setGlobalSearch={setGlobalSearch}
        />

        {/* Dynamic Page Content controlled by React Router */}
        <main className="page-content">
          <Routes>
            <Route path='/' element={<Dashboard jobs={jobs} />} />
            <Route path='/applications' element={<Applications />} />
            <Route path='/add' element={<AddApplication />} />
            <Route path='/statistics' element={<Statistics />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
