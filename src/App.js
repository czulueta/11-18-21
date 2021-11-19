import React, { useContext } from "react"
import Navbar from "./components/Navbar.js"
import Profile from "./components/Profile.js"
import Public from "./components/Public.js"
import Auth from "./components/Auth.js"
import ProtectedRoute from "./components/ProtectedRoute.js"
import { UserContext } from "./context/UserProvider.js"

export default function App(){
  const { token, logout } = useContext(UserContext)
  return(
    <div>
      { token && <Navbar logout={logout}/>}
      <Switch>
        <Route 
          path="/"
          render={() => token ? <Redirect to="/profile"/> : <Auth />}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          redirectTo="/"
          token={token} />
        <ProtectedRotue
          path="/public"
          component={Public}
          redirectTo="/"
          token={token} />
      </Switch>
    </div>
  )
}