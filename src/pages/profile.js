import React from "react"
import { getProfile } from "../utils/auth"
import Layout from "../components/layout"
import withAuthentication from "../utils/authentication"

const Profile = () => {
  const user = getProfile()
  return (
    <Layout>
      <h1>Profile</h1>
      <p>
        Hi,
        {user.name ? user.name : "friend"}!
      </p>
    </Layout>
  )
}

export default withAuthentication(Profile)
