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
  MDBCol,
  MDBTable,
  MDBTableHead,
  MDBTableBody // MDBBtn,
  // MDBIcon,
  // MDBContainer
} from 'mdb-react-ui-kit'

// import Timeline from "~/components/molecules/Timeline";
//> CSS
import './index.scss'

// import {
//   TextField,
// } from '@snek-shipyard/jaen-cms'
//import React from "react";

interface Props {
  committeetable1: JSX.Element[][]
  timeline1: React.ReactNode
}

const HistorySection = ({committeetable1, timeline1}: Props): JSX.Element => {
  console.log(committeetable1)

  return (
    <div className="history">
      <MDBRow className="display-none justify-content-center m-0">
        {/* <MDBCol md="6" className="m-0 p-0 col-timeline">
            <Timeline moleculeData={{lol: ""}}/>
          </MDBCol> */}
        <MDBCol md="6" className="m-0 p-0 col-timeline">
          {timeline1}
        </MDBCol>
        <MDBCol md="6" className="m-0 p-0 col-history">
          <MDBTable className="m-0">
            <MDBTableHead dark className="th-history">
              <tr>
                <th scope="col">{committeetable1[0][0]}</th>
                <th scope="col">{committeetable1[0][1]}</th>
                <th scope="col">{committeetable1[0][2]}</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {committeetable1.slice(1).map(row => (
                <tr>
                  {row.map(cell => (
                    <td>{cell}</td>
                  ))}
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default HistorySection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
