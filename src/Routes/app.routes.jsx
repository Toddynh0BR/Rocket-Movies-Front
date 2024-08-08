import { Routes, Route } from 'react-router-dom'

import { User } from '../pages/User';
import { Home } from '../pages/Home';
import { Index } from '../pages/Index';
import { CreateMovie } from '../pages/CreateMovie';
import { MoviePreview } from '../pages/MoviePreview';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/index/:index" element={<Index />} />
      <Route path="/preview/:id" element={<MoviePreview />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}