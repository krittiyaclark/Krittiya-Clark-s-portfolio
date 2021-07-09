import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const GalleryItem = ({
  id,
  source,
  thumbnail,
  caption,
  description,
  technology,
  url,
  position,
  toggleLightbox,
}) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      toggleLightbox(position)
    },
    [position, toggleLightbox]
  )
  console.log(technology)
  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a className="image fit thumb" href={source} onClick={onClick}>
        <img src={thumbnail} />
      </a>

      <h3>{caption}</h3>
      <p className="technology">
        <span>
          <strong>{technology}</strong>
        </span>{' '}
        {description}
      </p>
      <Link to={url} alt={caption} target="_blank">
        View Project
      </Link>
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
