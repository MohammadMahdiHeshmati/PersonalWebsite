import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import Routes from './Routes'

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  let router = useRoutes(Routes)

  useEffect(() => {
      // toast.success("به وبسایت ما خوش آمدید!");
  }, [])

  return (
    <>
      {router}
      <ToastContainer rtl toastClassName="font-lalezar-regular" />
    </>
  )
}

export default App
