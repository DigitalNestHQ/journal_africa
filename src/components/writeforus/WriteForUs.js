import React from "react"
import Footer from "../reusables/navigation/Footer/footer"
import Navbar from "../reusables/navigation/Nav/nav"
import "./writeforus.css"

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
              Writing for Journal Africa
            </h5>
            <p>
              Journal Africa is open to the plurality and diversity of ideas
              that are backed with hard facts and evidence.
            </p>
            <p>
              We accept two categories of people interested in writing for our
              platform.
            </p>
            <p>
              <strong>Regular Writers</strong> - Journal Africa maintains a
              register of writers who contributes regularly to its publication
              in any of the listed categories - Discover Africa (Destinations,
              People, Lifestyle and Culture), Politics and Government, Business
              and economy, Policy and Development, In-depth Africa, Gender and
              Human Rights.
            </p>
            <p>
              Such writers must be people with in-depth knowledge, expertise and
              experience in their chosen categories and their contributions must
              be well researched with hard facts and evidences.
            </p>
            <p>
              Contributors interested in this category must submit i) a pitch
              detailing the category and what they will be writing about, ii.
              Submit a short bio of themselves for review and approval.
            </p>

            <p>
              Regular writers should send their pitches to
              <a href={`mailto:  info@journal.africa`}>
                {" "}
                info@journal.africa
              </a>{" "}
              with writers pitch as the subject. The editorial team will review
              the pitch and contact the writer as soon as possible. Please note
              that only authors of accepted pitches shall be contacted.
            </p>

            <p>
              <strong>Guest Writers</strong> - Guest articles are accepted for
              publication on the Journal Africa platform. Unless on rare
              occasions, such articles, despite the rigorous editorial process
              it will go through will be considered as opinion articles and
              published under our commentary category. We accept 1,000 to 2,500
              words article that are original thoughts on the broader issues in
              the Africa continent and they must have a clear narrative, must
              not be promotional or branded and must conform with our editorial
              standard and follow our editorial guidelines.
            </p>
            <p>
              Guest articles should be submitted to{" "}
              <a href={`mailto:  info@journal.africa`}> info@journal.africa</a>{" "}
              with guest article as the subject of the email.
            </p>
            <p>
              We look forward to working with you as we tell the real African
              story.
              <br />
              <br /> Best regards, <br />
              The Editor in Chief Journal Africa Newspaper Limited
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
