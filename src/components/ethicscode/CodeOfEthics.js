import React from "react";
import { Link } from "react-router-dom";
import { pageurl } from "../../utils/constants";
import Footer from "../reusables/navigation/Footer/footer";
import Navbar from "../reusables/navigation/Nav/nav";
import "./codeofethics.css";

export const CodeOfEthics = () => {
  return (
    <>
      <Navbar />
      <section className="code-of-ethics">
        <div className="code-of-ethics-heading">
          <h1>TV24AFRICA NEWSPAPER CODE OF ETHICS</h1>
        </div>
        <div className="code-of-ethics-information">
          <p>
            This Code of ethics is designed in pursuance of the vision and
            mission of TV24 Africa Newspaper which it shall adopt for the
            conduct of our organisation.
          </p>

          <p>
            The mission of TV24 Africa Newspaper is to practice and promote
            journalism in the public interest. All of the values stated here,
            and the rules set out here, are intended to contribute to that
            mission. We do this because, while our entity is new, and our
            business model somewhat innovative, our ethics are neither. They
            reflect what we and others have learned over many years. At the same
            time, however, this Code is not immutable. Most of it consists of
            guidelines; exceptional circumstances may require exceptions to
            these rules. We expect to continue to learn, and, as we do so, to
            revise this document in light of further insight and experience.
          </p>
          <div>
            <ol>
              <li>
                Adhere to the journalistic values of honesty, courage, fairness,
                balance, independence, credibility and diversity, giving no
                priority to commercial or political over professional
                consideration.
              </li>
              <li>
                Strive to identify all the sources of our information, shielding
                them with anonymity only when they insist upon it and when they
                provide vital information — not opinion or speculation; when
                there is no other way to obtain that information; and when we
                know the source is knowledgeable and reliable.
              </li>
              <li>
                Endeavour to obtain a response from a person, preferably in
                person, when he or she is portrayed in a negative light. Such
                person should be given a reasonable amount of time to get back
                to us before we publish. What is “reasonable” may depend on the
                urgency and competitiveness of the story. If we don’t reach the
                parties involved, we should explain in the story what efforts
                were made to do so.
              </li>
              <li>
                Ensure that our analyses represent our best independent
                judgments rather than our preferences, or those of our sources.
              </li>
              <li>
                Endeavour to get to the truth and declare it at all times in our
                programmes and publications in a manner which leaves no doubt
                about its validity and accuracy.
              </li>
              <li>
                Present the diverse points of view and opinions without bias and
                partiality.
              </li>
              <li>
                Recognise diversity in human societies with all their races,
                cultures and beliefs and their values and intrinsic
                individualities so as to present unbiased and faithful
                reflection of them.
              </li>
              <li>
                Ensure that there are no hidden agendas in any of our
                journalistic undertakings.
              </li>
              <li>
                Distinguish between news material, opinion and analysis to avoid
                the snares of speculation and propaganda.
              </li>
              <li>
                Be ready to acknowledge mistakes anytime a question of fairness
                or accuracy is raised about any aspect of our work, whether by a
                source, subject or member of the public, decide on what response
                is warranted, correct them fully, quickly and ungrudgingly.
              </li>
            </ol>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
