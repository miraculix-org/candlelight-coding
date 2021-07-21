//> Additional modules
//> Additional modules
// Parallax
// import { Parallax } from "react-scroll-parallax";
// Parallax
// Scroll
// import { Link } from "react-scroll";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBRow,
  MDBCol, // MDBBtn,
  // MDBIcon,
  //MDBTableBody,
  MDBContainer
} from 'mdb-react-ui-kit'

// import {
//   MDBView,
//   MDBMask,
//   MDBAnimation
// } from "../../../legacy";
//> CSS
import './index.scss'

//> Images
// Coffee center image
//import localImage from "../../../../common/img/content/bg/bg1.jpg";

// Placeholder image
//import Drop from "~/common/img/content/water/drop.png";
//import Faucet from "~/common/img/content/water/faucet.png";
// import Fountain from "~/common/img/content/water/fountain.png";
// import Glass from "~/common/img/content/water/glass.png";

interface Props {
  maincontent1: React.ReactNode
  maincontent2: React.ReactNode
  statisticstable1: JSX.Element[][]
  contacttable1: JSX.Element[][]
}

const AboutSection = ({
  maincontent1,
  maincontent2,
  statisticstable1,
  contacttable1
}: Props): JSX.Element => {
  return (
    <div className="about">
      <MDBContainer className="p-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="9" className="mb-0 col-about">
            <p>{maincontent1}</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" className="mb-0 col-about">
            <table className="key-data">
              <tbody>
                {statisticstable1.map(row => (
                  <tr>
                    {row.map(cell => (
                      <td>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" className="mb-0 col-about">
            <p>{maincontent2}</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" className="mb-0 col-about">
            <table className="key-data">
              <tbody>
                {contacttable1.map(row => (
                  <tr>
                    {row.map(cell => (
                      <td>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default AboutSection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
