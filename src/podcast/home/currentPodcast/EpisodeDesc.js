import React from 'react'

const NewLine = (text) => {
  return <div style={{ whiteSpace: 'pre-wrap' }} className="pod-newline">{text}</div>
}

const EpisodeDesc = ({ desc, characterCount, readMore }) => {
  const [isReadMore, setIsReadMore] = React.useState(true)

  const toggleReadMore = () => {
    setIsReadMore((prev) => !prev)
  }

  return (
    <div className="pod-episode-desc">
      {desc ? (
        <>
          {isReadMore ? desc.slice(0, characterCount) + '...' : NewLine(desc)}
          {readMore && (
            <button onClick={toggleReadMore} className="pod-read-more">
              {isReadMore ? <span>Read more</span> : <span>Read less</span>}
            </button>
          )}
        </>
      ) : (
        <span>No description</span>
      )}
    </div>
  )
}

export default EpisodeDesc
