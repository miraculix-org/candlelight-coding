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
  MDBCol // MDBBtn,
  // MDBIcon,
  // MDBContainer
} from 'mdb-react-ui-kit'

//> CSS
import './index.scss'

//> Images
// Coffee center image
//import localImage from "../../../../common/img/content/bg/bg1.jpg";

// Placeholder image

interface Props {
  maincontent1: React.ReactNode
  contacttable1: JSX.Element[][]
}

const EmergencySection = ({
  maincontent1,
  contacttable1
}: Props): JSX.Element => {
  return (
    <div className="emergency">
      <MDBRow className="justify-content-center">
        <MDBCol md="6" className="mb-3 col-timeline">
          {maincontent1}
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
    </div>
  )
}

export default EmergencySection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
