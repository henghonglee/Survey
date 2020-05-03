import React from "react"
import { login, isAuthenticated } from "../utils/auth"

const withAuthentication = (inner) => () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  } else {
    return inner()
  }
}

export default withAuthentication
