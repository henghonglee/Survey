import React from "react"
import { login, isAuthenticated } from "./auth"

const withAuthentication = inner => () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  return inner()
}

export default withAuthentication
