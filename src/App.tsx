import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ImageListContainer from './components/ImageListContainer/ImageListContainer'

const App: FC = () => (
  <Routes>
    <Route
      path="/recently-added"
      element={<ImageListContainer activeTab="recentlyAdded" />}
    />
    <Route
      path="/favorites"
      element={<ImageListContainer activeTab="favorites" />}
    />
    <Route path="/" element={<Navigate to="/recently-added" />} />
  </Routes>
)

export default App
