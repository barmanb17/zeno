import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import BlogTitles from './pages/BlogTitles'
import WriteArticle from './pages/WriteArticle'
import Layout from './pages/Layout'
import RemoveBackground from './pages/RemoveBackground'
import GenerateImages from './pages/GenerateImages'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/ai' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='write-article' element={<WriteArticle />} />
            <Route path='blog-titles' element={<BlogTitles />} />
            <Route path='generate-images' element={<GenerateImages />} />
            <Route path='remove-background' element={<RemoveBackground />} />
            <Route path='remove-object' element={<RemoveObject />} />
            <Route path='review-resume' element={<ReviewResume />} />
            <Route path ='community' element={<Community />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App