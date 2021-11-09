import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Krittiya Clark - Software Engineer'
  const siteDescription =
    'Software Engineer based in Colchester, Vermont. I have extensive knowledge in HTML, CSS, SASS, Javascript, Node.Js, React, and Jamstack. I am passionate about using code to solve problems. Through freelancing, I help empower businesses in my community who lack an online presence and technological expertise.'

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
            extensive knowledge in Javascript, Node.Js, React, Jamstack, HTML,
            CSS, and SASS. I am passionate about using code to solve problems.
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
        </section>

        <section>
          <div className="row">
            <article className="12u 12u$(xsmall)">
              <h2>About Me</h2>
              <iframe
                width="600"
                height="315"
                src="https://www.youtube.com/embed/4RglMrBkdzA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </article>
          </div>
        </section>

        <section id="two">
          <div className="row">
            <article className="6u 12u$(xsmall)">
              <h2>
                Download my
                <a
                  href="https://www.dropbox.com/s/vuw4jna5nq4hxxy/KRITTIYA%20CLARK%20%20Software%20Engineer.pdf?dl=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  resume
                </a>
              </h2>
            </article>
            <article className="6u 12u$(xsmall)">
              <h2>
                Read my post at{' '}
                <a href="https://krittiyaclark.hashnode.dev" target="_blank">
                  hashnode{' '}
                </a>
              </h2>
            </article>
          </div>
        </section>

        <section id="three">
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

        <section id="four">
          <h2>Let's work together!</h2>
          <p>Hire me</p>
          <div className="row">
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
