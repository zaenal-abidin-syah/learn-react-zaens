// import { Link } from "react-router-dom"

import { Link } from "react-router-dom"

const AuthLayouts = ({ children, title, type }) => {
  return (
    <div className="flex justify-center items-center h-screen gap-x-4 font-bold">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-2">Welcome Please Enter Your details</p>

        {children}
        <Navigation type={type} />
        {/* <p className="text-sm mt-5 text-center">
          {type === 'login' ? 'Dont Have An Account? ' : 'Already Have an Account? '}

          {type === 'login' && <Link to='/register' className="font-bold text-blue-600" >Register</Link>}
          {type === 'register' && <Link to='/login' className="font-bold text-blue-600" >Login</Link>}
        </p> */}

      </div>
    </div>

  )
}

const Navigation = ({ type }) => {
  return type === 'login'
    ?
    <p className="text-sm mt-5 text-center">
      Dont Have An Account? {' '}
      <Link to='/register' className="font-bold text-blue-600" >Register</Link>
    </p>
    :
    <p className="text-sm mt-5 text-center">
      Already Have an Account? {' '}
      <Link to='/login' className="font-bold text-blue-600" >Login</Link>
    </p>
}

export default AuthLayouts