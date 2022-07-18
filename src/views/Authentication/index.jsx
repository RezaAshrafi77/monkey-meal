import React from 'react'

//pages
import UserLoginMethodPicker from './pages/UserLoginMethodPicker';
import Login from './pages/Login';

export default function Authentication() {
  const [page, setPage] = React.useState('userLoginMethodPicker');

  const pages = {
    userLoginMethodPicker : <UserLoginMethodPicker setPage={setPage} />,
    login: <Login />
  }
  return (
    <div className="flex-1 flex overflow-hidden">
      {
        pages[page]
      }
    </div>
  )
}
