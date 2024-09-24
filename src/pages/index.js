import * as React from "react";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card/card";

const IndexPage = ({ data }) => (
  <Layout>
    <div className="info">
      {data.allDataJson.edges.map(({ node }) => {
        const image = getImage(node.image);
        return (
          <Card
            key={node.id}
            title={node.title}
            image={image}
            description={node.description}
            link={node.link}
          />
        );
      })}
    </div>
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  </Layout>
);

export const query = graphql`
  query MyQuery {
    allDataJson {
      edges {
        node {
          id
          link
          title
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: WEBP
                width: 300
                aspectRatio: 1.77
              )
            }
          }
          description
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Inicio" />;

export default IndexPage;