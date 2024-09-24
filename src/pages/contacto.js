import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contacto = () => (
  <Layout>
    <h1>Página de contacto</h1>
    <Link to="/">Inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Contacto
