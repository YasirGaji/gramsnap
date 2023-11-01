import { Outlet, Navigate } from 'react-router-dom'


const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ): (
        <>
          <section className='flex flex-1 justify-cen'>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout