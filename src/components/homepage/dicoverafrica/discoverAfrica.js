import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Uganda from "../../../assets/images/Tourism-Uganda.jpeg";
import Rwanda from "../../../assets/images/rwanda.jpg";
import Calabar from "../../../assets/images/calabar-carnival-3.jpg";
import Obudu from "../../../assets/images/obudu.jpg";
import "./discoverAfrica.css";

export class discoverAfrica extends Component {
  render() {
    return (
      <div className="africa">
        <h3 className="px-5">DISCOVER AFRICA</h3>
        <div className="custom-container container-fluid row af-bg-red ml-0">
          <div className="col-sm-6 af-col-tp my-2 mx-auto">
              <p>MAMBILA FOREST</p>
          </div>
          <div className="col-sm-6 af-col-bt">
            <div className="row af-sm-news">
              <div className=" col-md-6 mx-auto my-2 mx-auto">
                <a href="/" className="af-crd-anc-tp">
                  <div>
                  <Image variant="top" src={Rwanda} className="da_img" />
                  </div>
                  <span className="spn-yellow">PREMIUM</span>
                  <p>Domestic tourism to prop up Rwanda tourism sector</p>
                </a>
              </div>
              <div className="col-md-6 mx-auto my-2 mx-auto">
                <a href="/" className="af-crd-anc-tp">
                <div>
                <Image variant="top" src={Uganda} className="da_img" />
                </div>
                  <span>PREMIUM</span>
                  <p>What is killing Uganda's tourism potential?</p>
                </a>
              </div>
              <div className=" col-md-6 mx-auto my-2 cal_3">
                <a href="/" className="af-crd-anc-bt">
                <div>
                <Image variant="top" src={Calabar} className="da_img" />
                </div>
                  <div className="af-crd-lst">
                    <span>PREMIUM</span>
                    <p>
                      Inside Calabar Carnival, africa's biggest street party
                    </p>
                  </div>
                </a>
              </div>
              <div className=" col-md-6 mx-auto obudu_4">
                <a href="/" className="af-crd-anc-bt">
                <div>
                <Image variant="top" src={Obudu} className="da_img" />
                </div>
                  <div className="af-crd-lst">
                    <span>PREMIUM</span>
                    <p> Obudu Mountain resort (formerly obudu cattle ranch)</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default discoverAfrica;
