import React from "react"
import { getProfile } from "../utils/auth"
import Layout from "../components/layout"
import withAuthentication from "../utils/authentication"

const Profile = () => {
  const user = getProfile()
  return (
    <Layout>
    <div>
    <p>Profile</p>
    <p>Hi, {user.name ? user.name : "friend"}!</p>
    </div>
    </Layout>
  )
}

export default withAuthentication(Profile)
