import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import ReactJson from 'react-json-view'

const Home = ({data}) => (
  <Layout>
    <h1>Home</h1>
    <ReactJson src={data} />
    <p>Hi, friend!</p>
  </Layout>
)

export const query = graphql`
query {
  hasura {
    Company {
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
}
`;

export default Home
