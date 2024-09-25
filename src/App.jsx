import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import BuilderPage from "./builder-page"
import BlogArticle from "./blog-article"

function App() {
  return (
    <Routes>
      <Route path="/blog/:slug?" Component={BlogArticle} />
      <Route path="/test-page" element={<Home />} />
      <Route path="/*" element={<BuilderPage />} />
    </Routes>
  )
}

export default App
