import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage'
import ContainersPage from  './Pages/ContainersPage'
import ContainerList from './Components/ContainersList/ContainersList'
import ContainerDetails from './Components/ContainerDetails/ContainersDetail'
// import EditContainer from './Components/EditContainer'
// import CategoriesPage from  './Pages/CategoriesPage'
// import ActivitiesPage from   './Pages/ActivitiesPage'

function App() {
  return (
    <div className='app'>
      <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/containers" element={<ContainersPage />} />
        <Route path="/containers" element={<ContainerList/>} />
        <Route path="/containers/:id" element={<ContainerDetails />} />
        {/* <Route path="/containers/:id/edit" element={<EditContainer />} /> */}
        {/* <Route path="/categories" element={<CategoriesPage />} /> */}
        {/* <Route path="/activities" element={<ActivitiesPage />} /> */}
    </Routes>
    </div>
  )
}

export default App
