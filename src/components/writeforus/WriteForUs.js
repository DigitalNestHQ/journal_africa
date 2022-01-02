import React from 'react'
import Footer from '../reusables/navigation/Footer/footer'
import Navbar from '../reusables/navigation/Nav/nav'
import './writeforus.css'

export const WriteForUs = () => {
  return (
    <>
      <Navbar />
      <section className="section-content-default privacy-container">
        <div className="section-wrapper-default">
          <div className="code-of-ethics-heading">
            <h1 className="section-heading-default">WRITE FOR US</h1>
          </div>
          <div className="write-for-us-information">
            <h5 className="section-heading-default">
              Can I write for TV24 Africa News?
            </h5>
            <p>
              You can publish content on TV24 Africa News because we are open to
              the plurality and diversity of ideas that are backed with hard
              facts and evidence. Guest contributor who are interested in
              submitting one-off articles may do so by sending their articles.
              Contributors who are interested in writing regularly for TV24
              Africa News must submit a pitch of what they want to be writing
              about as well as a short bio of themselves.
            </p>
            <h5 className="section-heading-default">Submission of Materials</h5>
            <p>
              Banner ads can be in jpeg and gif format. All materials must be
              delivered via electronic medium. All ads must be delivered via
              electronic version, either on disk or e-mail in the ordered pixel
              dimensions unless otherwise noted.
            </p>
            <h5>What types of articles is acceptable on TV24 Africa News</h5>
            <p>
              Articles from guest or regular writers must confirm with our
              editorial standard and follow our editorial guidelines before they
              can qualify for publishing. Such articles must be evidence based
              with hard facts, broad based, critical and well researched topics
              from a Pan African perspective. Such articles must also fit into
              one of the sections of TV24 Africa News. Please read through TV24
              Africa News to get a sense of the sections and the type of
              articles that we publish.
            </p>
            <h5 className="section-heading-default">
              Where to send guest articles and article pitches?
            </h5>
            <p>
              All guest articles and article pitches should be send to
              info@tv24africa.com. Guest articles should be clearly marked guest
              article, while article pitches should be clearly marked article
              pitch in the subject of the email. Guest articles that meets our
              criteria would be published while those who submit pitches for
              regular writing would be contacted for further discussion.
            </p>
            <h5 className="section-heading-default">
              Does TV24 Africa News accept Opinion articles, promotional
              materials etc?
            </h5>
            <p>
              TV24 Africa news rarely accept opinion articles, eye witness
              reports, promotional pieces or general article ideas, but only for
              publication on our sister platform, TV24 Africa News Daily. To
              send opinion articles, eye witness reports etc,
              <br /> please submit them here
              <a href="https://news.tv24africa.com/submityourstory">
                {' '}
                news.tv24africa.com/submityourstory
              </a>
            </p>
            <p>
              For promotional pieces, please send a mail to
              <b> advertising@tv24africa.com </b>
              For more information,{' '}
            </p>

            <p>
              We look forward to working with you as we tell the real African
              story.
              <br />
              <br /> Best regards, <br />
              The Editor in Chief TV24 Africa Newspaper Limited
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}