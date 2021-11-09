import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <Link
            to="https://twitter.com/krittiyaClark"
            className="icon fa-twitter"
          >
            <span className="label">Twitter</span>
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/krittiyaclark"
            className="icon fa-github"
          >
            <span className="label">Github</span>
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/krittiya-clark-front-end"
            className="icon fa-linkedin"
          >
            <span className="label">Linkedin</span>
          </Link>
        </li>
        <li>
          <a
            href="mailto:krittiyaclark@gmail.com"
            target="_blank"
            className="icon fa-envelope-o"
            rel="noreferrer"
          >
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          &copy; Krittiya Clark {new Date().getFullYear()} All rights reserved.
        </li>
        <li>Built with Gatsby and Hosted with Netlify</li>
      </ul>
    </div>
  </div>
)

export default Footer
