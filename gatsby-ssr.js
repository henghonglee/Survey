import ApolloWrapper from './src/utils/apollo'
import SessionCheck from './src/utils/session'
import React from "react"

export const wrapRootElement = props => {
  return (
    <SessionCheck>
      <ApolloWrapper {...props} />
    </SessionCheck>
  )
}