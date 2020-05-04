import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const Resources = ({ data }) => (
  <Layout>
    <h1>Resources</h1>
    {
        data.allMdx.edges.map((e) => <p>{JSON.stringify(e.node.id)}</p>)
      }
    <Link to="/resources/1"> 1 </Link>
    <Link to="/resources/2"> 2 </Link>
    <Link to="/resources/3"> 3 </Link>
  </Layout>
);

export const query = graphql`
query AllMdx {
  allMdx {
    edges {
      node {
        id
      }
    }
  }
}
`;

export default Resources;
