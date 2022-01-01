import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Spinner } from 'react-bootstrap'
import PodDetailsEpisodes from './PodDetailsEpisodes'

const CurrentPodcastDetails = ({ podcastList }) => {
  const [count, setCount] = useState({ prev: 1, next: 10 })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(
    podcastList.slice(count.prev, count.next),
  )

  const getMoreData = () => {
    if (current.length + 10 >= podcastList.length) {
      setHasMore(false)
      return
    }

    setTimeout(() => {
      setCurrent(
        current.concat(podcastList.slice(count.prev + 10, count.next + 10)),
      )
    }, 1000)

    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }))
  }

  return (
    <div className="pod-details-list">
      <div className="pod-details-grid">
        <div className="pod-details-right-grid">
          <InfiniteScroll
          style={{ overflow: 'hidden' }}
            dataLength={current.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={
              <div className="center-spinner">
                <Spinner animation="border" variant="danger" />
              </div>
            }
          >
            <PodDetailsEpisodes episodes={current}/>
          </InfiniteScroll>
        </div>
        <div className="pod-details-left-grid">
          <h2 className="pod-details-left-grid-heading">About</h2>
          <p className="pod-details-left-gird-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur corrupti cupiditate quibusdam magnam ipsum. Eveniet
            numquam sit, dignissimos rerum nihil quod mollitia, natus tempora
            ullam, esse dolores error repellat nisi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CurrentPodcastDetails
