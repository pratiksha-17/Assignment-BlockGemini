import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import './style/post.scss'
const Post = React.lazy(() => import('./components/ui/post/post'));





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  exact path="/" name="Post Page" element={<Post/>} />
    </Routes>
  </BrowserRouter>
 
  )
}

export default App;
