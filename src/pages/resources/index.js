import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const Resources = ({ data }) => (
  <Layout>
    <h1>Resources</h1>
    <ul>
      {
        data.allMdx.edges.map((e) => {
          return <li><Link to={e.node.fields.slug}> {e.node.frontmatter.title} </Link></li>   
        })
      }
    </ul>
  </Layout>
);

export const query = graphql`
query AllMdx {
  allMdx {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
}
`;

export default Resources;
