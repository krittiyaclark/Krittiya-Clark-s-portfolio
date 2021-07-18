import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Your Next Software Engineer</h2>
          </header>
          <p>
            I am a Software Engineer based in Colchester, Vermont. I have
            extensive knowledge in HTML, CSS, SASS, Javascript, Node.Js, React,
            and Jamstack. I am passionate about using code to solve problems.
            Through freelancing, I help empower businesses in my community who
            lack an online presence and technological expertise.
            <br />
            <br />
            As a software engineer, I aspire to help bring creative projects to
            life and build software applications to solve problems for your
            business.
            <br />
            <br />
            Bilanguages in English and Thai.
          </p>
          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />
          {/* 
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        <section id="three">
          <h2>Let's work together!</h2>
          <p>Hire me</p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form
                method="post"
                name="contact"
                netlify-honeypot="bot-field"
                data-netlify="true"
                action="/success"
              >
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input type="hidden" name="bot-field" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  914-262-3909
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:krittiyaclark@gmail.com" target="_blank">
                    <span className="label">krittiyaclark@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
