import React from "react"
import Layout from "../components/layout"
import ReactJson from 'react-json-view'
import { useSubscription } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const GET_DATA = gql`
subscription {
  Company(where: {id: {_eq: 2}}) {
    employees {
      id
      first_name
    }
    company_name
    email_domain
    company_surveys {
      survey {
        id
        title
        questions {
          id
          question_text
          required
          settings
          responses {
            id
          }
        }
      }
    }
  }
}
`;


const Home = () => {
  const { loading, error, data } = useSubscription(GET_DATA)
  return (
    <Layout>
      <h1>Home</h1>
      <ReactJson src={data} />
    </Layout>
  )
}

export default Home
