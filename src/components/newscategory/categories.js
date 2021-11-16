import React, { useContext, useEffect, Fragment } from "react";
import Nav from "../reusables/navigation/Nav/nav";
import Footer from "../reusables/navigation/Footer/footer";
import { Card } from "react-bootstrap";
import Hyunda from "../../assets/images/Hyunda.jpg";
import Opec from "../../assets/images/opec.jpg";
import Amazon from "../../assets/images/amazon.jpg";
import WorldBank from "../../assets/images/wbank.jpg";
import AuthContext from "../../context/auth/authContext";
import "./category.css";

const Categories = (props) => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Nav />
      <div className="container-fluid categ-wrap">
        <h3>calabar festival</h3>
        <div className="categ-banner">
          <div className="categ-banner-main"></div>
          <div className="categ-ad"></div>
        </div>
        <div className="categ-txt">
          <p>
            The Calabar Carnival[1] started in 2004, when the governor of Cross
            River State, Donald Duke, had a vision of making the state a hub for
            tourism and hospitality in Nigeria and Africa.The Carnival presents
            a perfect platform from brand visibility for consumer and market
            awareness. "According to Osima-Dokubo, the carnival aimed to include
            more aspects of local heritage and culture and at the same time
            strengthen the capacity of the locals to participate in an
            economically beneficial way." Recently, Cross River State has become
            the pride of Nigeria in the areas of tourism, carnivals and
            hospitality.
          </p>
          <p>
            Programmes <br />
            The programme of the event at the carnival are drafted each year by
            the committee in charge of tourism and cultural activities and new
            initiatives are introduced every year. In December 2009, Carnival
            Committee organized "Carnival Cup 2009", a football competition
            amongst the five competing carnival bands - Seagull, Passion 4,
            Masta Blasta, Bayside and Freedom. The Festival also included music
            performance from both local and international artists, the annual
            Calabar Carnival, Boat regatta, Fashion shows (introduced in 2016),
            Beauty pageant (Miss Africa introduced in 2016[2]) Christmas
            Village, traditional dances and the annual Ekpe Festival is a yearly
            events that brings in thousands of tourists.[1]
          </p>
          <p>
            Other activities that make up this carnival include Essay Writing
            Competition which involves both secondary school and tertiary
            students. These competitions are aimed at resuscitating the reading
            culture among the youths of the State as well as inculcating the
            carnival culture.
          </p>
          <div className="bus-ad"></div>
          <p>
            The event hosts top local and international musicians, Nollywood
            Actors and actresses, Politicians and other notable men and women
            from across the globe. Some of the entertainers who have attended
            the carnival include Lucky Dube, Akon, Fat Joe, Young Jeezy, Nelly,
            Kirk Franklin, and many more have thrilled the large crowd of
            Nigerians and tourists from outside the country. Due to the large
            crowd and fans that Nigerian artists have, 2013 Calabar Carnival was
            focused on Nigerian artist.
          </p>
          <p>
            [1] Calabar Carnival 2015 The Calabar carnival was held in 2015.[3]
          </p>
          <p>
            The Carnival Calabar and Festival 2017, Theme: Migration
            Migration[4] has a long history in Africa, as it has also been the
            home of many cultures for many centuries. During the era of slavery
            and colonialism, Africa was the home for many foreigners. Now it has
            become the land of opportunities.
          </p>
          <p>
            This time the world recognizes it as the new frontier, not to be
            exploited for the benefits of others but to be cultivated on its
            own. The Calabar Carnival and Festival is an opportunity to bring
            people together in going beyond tribal and religious conflicts. It
            also showcases Africa's talent and several opportunities.[5]
          </p>
          <p>
            The Carnival Calabar and Festival 2018 Theme "Africanism" In the
            2018 edition, making it the 15th edition since its inception in
            2004, the Cross River State Governor, Sen, Benedict Ayade introduced
            a new theme tagged "Africanism" to tell the African story from the
            African perspective; thereby bringing the global attention to the
            plight of Africa. The theme was also meant to show that Africa is
            free from Western Colonization and no longer under their political
            and economic control.[6]
          </p>
          <p>
            The 2019 Carnival Calabar and Festival Theme is dubbed "Humanity"
            Peaceful coexistence among humans has always been a problem from the
            beginning of time, so, the Carnival Calabar themed, "Humanity" was
            created to challenge mankind that every human being has a right to
            existence. The theme was also meant to charge mankind not to be a
            source of pain to another person's life. Apart from dancing and
            displaying the rich culture of the African people, the Carnival
            Calabar serves as an opportunity to address the world's problems, in
            which inhumanity is a part. As Governor Benedict Ayade flagged this
            year's theme - Humanity he emphasized the need for all to shun war
            as this does not depict the true personalities of those who claim
            they are humane to humanity.[7]
          </p>
        </div>
        <div className="row bus-article-wrap my-4 px-0">
          <div className="col-sm-3 bus-col-wrap bus-sec my-2 ">
            <a href="/">
              <Card className="bus-crd">
                <Card.Img variant="top" src={Amazon} className="bus-crd-img" />
                <Card.Body>
                  <Card.Text className="bus-crd-caption">
                    Amazon Web Service to rescue unbanked Nigerians
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 bus-col-wrap bus-sec my-2">
            <a href="/">
              <Card className="bus-crd">
                <Card.Img
                  variant="top"
                  src={WorldBank}
                  className="bus-crd-img"
                />
                <Card.Body>
                  <Card.Text className="bus-crd-caption">
                    Nigeria’s economy to grow by 1.1% this year, says World Bank
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 bus-col-wrap bus-sec my-2">
            <a href="/">
              <Card className="bus-crd">
                <Card.Img variant="top" src={Opec} className="bus-crd-img" />
                <Card.Body>
                  <Card.Text className="bus-crd-caption">
                    Nigeria’s December oil output below fiscal projection
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 bus-col-wrap bus-sec my-2">
            <a href="/">
              <Card className="bus-crd">
                <Card.Img variant="top" src={Hyunda} className="bus-crd-img" />
                <Card.Body>
                  <Card.Text className="bus-crd-caption">
                    Hyundai shares soar on Apple car talks reports
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default Categories;
