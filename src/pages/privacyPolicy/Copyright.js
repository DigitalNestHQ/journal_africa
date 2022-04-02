import React from "react"
import Layout from "../../components/layout/mainlayout/Layout"
import "./privacyPolicy.css"

const Copyright = () => {
  return (
    <Layout category={true}>
      <div className="code-of-ethics-heading">
        <h1 className="section-heading-default">
          {" "}
          JOURNAL AFRICA NEWSPAPER COPYRIGHT POLICY
        </h1>
      </div>
      <div className="code-of-ethics-information">
        <p>
          This policy sets out how users are permitted to use our content and
          also explains the types of use that require a licence from Journal
          Africa. This policy forms part of our terms and conditions.
        </p>

        <p>
          We reserve the right to change this copyright policy from time to time
          by publishing an updated policy on Journal.Africa or associated
          websites, which shall become effective and replace any previous policy
          with effect from publication.
        </p>
        <h4 className="slug-default">What is Copyright</h4>
        <p>
          Copyright law gives the copyright owner, in this case, Journal Africa
          Newspaper Limited (“Journal Africa”) the exclusive right to control
          the use of copyright-protected works. All of the material published on
          Journal Africa and any other platform is protected by copyright law
          and should only be used with permission from Journal Africa or as set
          out below.
        </p>
        <p>
          Usage of any of our works without our permission may, therefore,
          infringe our copyright which can result in personal and corporate
          liability.
        </p>
        <div>
          <h4 className="slug-default">
            How may I use content produced by Journal Africa?{" "}
          </h4>
          <p>You may do the following</p>
          <ul style={{ listStyle: " inside " }}>
            <li>
              View our content for your personal use on any device of your
              choice e.g. mobile phone, laptop, tablet or other electronic
              devices
            </li>
            <li>
              Print single copies of articles on paper for your personal use
            </li>
            <li>
              Share links to articles by using any sharing tools we make
              available.
            </li>
          </ul>
        </div>
        <div style={{ marginTop: " 1rem " }}>
          <h4 className="slug-default">
            How may I republish or redistribute Journal Africa content?
          </h4>
          <p>
            Except as set out above, you may not copy Journal Africa content
            from Journal Africa website or any third party source of Journal
            Africa content such as social media and aggregators.
          </p>
          <p>
            You may not republish or redistribute full-text articles, for
            example by pasting them into emails or republishing them in any
            media, including websites, newsletters or more.
          </p>
        </div>
        <div style={{ marginTop: " 1rem " }}>
          <h4 className="slug-default">
            Am I allowed to copy or summarise limited parts of Journal Africa
            full text content?
          </h4>
          <p>
            You may not republish or redistribute extracts or full-text articles
            (except as permitted by any sharing tools we make available).
          </p>
        </div>
        <div style={{ marginTop: " 1rem " }}>
          <h4 className="slug-default">
            How am I allowed to link to Journal Africa content?
          </h4>
          <p>
            If you would like to link to Journal Africa, please read and comply
            with the following guidelines and all applicable laws. You:
          </p>
          <ul style={{ listStyle: " inside " }}>
            <li>
              may display the Journal Africa logo to indicate the source of the
              link
            </li>
            <li>
              must not remove, distort or otherwise alter the size or appearance
              of Journal Africa logo
            </li>
            <li>
              must not in any way imply that Journal Africa is endorsing it or
              its products or services or has any relationship with the site.
            </li>
          </ul>
        </div>
        <div style={{ marginTop: " 1rem " }}>
          <h4 className="slug-default">
            What am I not permitted to do with Journal Africa content?
          </h4>
          <p>
            You cannot do anything other than making use of the content as set
            out above unless you buy the appropriate licence. By way of example
            only, this means that you cannot
          </p>
          <ul style={{ listStyle: " inside " }}>
            <li>
              Copy, publish or redistribute full-text articles, photographs,
              graphics, tables or images in any way (except as permitted by any
              sharing tools we make available).
            </li>
            <li>
              Create derivative works from our content, unless you are creating
              summarising the content
            </li>
            <li>
              Remove the copyright or trademark notice from any copies of
              Journal Africa content
            </li>
            <li>
              Frame, harvest or scrape Journal Africa content or otherwise
              access Journal Africa content for similar purposes.
            </li>
          </ul>
        </div>
        <p style={{ marginTop: " 1rem " }}>
          To purchase a license, please email contact@journal.africa
        </p>
      </div>
    </Layout>
  )
}

export default Copyright
