//> Additional modules
//> Additional modules
// Parallax
// import { Parallax } from "react-scroll-parallax";
// Parallax
// Scroll
//import { Link } from "react-scroll";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {MDBRow, MDBCol, MDBBtn, MDBIcon, MDBContainer} from 'mdb-react-ui-kit'

// import {
//   MDBView,
//   MDBMask,
//   MDBAnimation
// } from "../../../legacy";
//> CSS
import './index.scss'

interface Props {
  maincontent1: React.ReactNode
  maincontent2: React.ReactNode
  button1: React.ReactNode
  contacttable1: JSX.Element[][]
}

const ConnectSection = ({
  maincontent1,
  maincontent2,
  contacttable1,
  button1
}: Props): JSX.Element => {
  return (
    <div className="connect">
      <MDBContainer className="p-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="9" className="m-0 col-connect-1">
            <p>{maincontent1}</p>
            <MDBBtn color="white" size="lg" rounded>
              {button1}
              <MDBIcon icon="arrow-right" className="ps-3 fa-lg" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" className="m-0 col-connect-2">
            <p>{maincontent2}</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" className="mb-0 col-connect-3">
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

export default ConnectSection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
