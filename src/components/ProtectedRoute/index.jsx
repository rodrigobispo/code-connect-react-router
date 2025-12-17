import { useNavigate } from "react-router"
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from "react";
import { Spinner } from "../Spinner";

export function ProtectedRoute({ children }) {

  const navigate = useNavigate()
  const { isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/auth/login')
    }
  }, [isAuthenticated, isLoading, navigate])


  if (isLoading) {
    return <Spinner />
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    children
  )
}