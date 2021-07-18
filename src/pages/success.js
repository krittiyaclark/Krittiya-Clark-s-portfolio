import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Success = () => {
  return (
    <Layout>
      <div id="main">
        <section className="success-page">
          <div className="page-center">
            <h2>Your submission was recieved !</h2>
            <p>I'll contact you shortly.</p>
            <Link to="/" className="btn">
              back home
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Success
