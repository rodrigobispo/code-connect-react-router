import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../../pages/Login";
import { Logout } from "../../pages/Logout";
import { Register } from "../../pages/Register";
import { BlogPost } from "../../pages/BlogPost";
import { Feed } from '../../pages/Feed';
import { AuthLayout } from "../../layouts/Auth";
import { AppLayout } from "../../layouts/App";
import { NotFound } from '../../pages/NotFound';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/' element={<AppLayout />}>
          <Route path='' element={<Feed />} />
          <Route path='blog-post/:slug' element={<BlogPost />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}