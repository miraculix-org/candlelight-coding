//> Additional modules
//> Additional modules
// Parallax
// import { Parallax } from "react-scroll-parallax";
// Parallax
// Scroll
// import { Link } from "react-scroll";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
//> Images
// Coffee center image
//import localImage from "../../../../common/img/content/bg/bg1.jpg";
// Placeholder image
//import Drop from "~/common/img/content/water/drop.png";
//import Faucet from "~/common/img/content/water/faucet.png";
// import Fountain from "~/common/img/content/water/fountain.png";
// import Glass from "~/common/img/content/water/glass.png";
import {MDBRow, MDBCol, MDBBtn, MDBIcon, MDBContainer} from 'mdb-react-ui-kit'
import {useHistory} from 'react-router'
import {
  Link
  /*scroller*/
} from 'react-scroll'

import Hand from '~/common/img/content/water/hand.png'
import Hydrant from '~/common/img/content/water/hydrant.png'
import Quality from '~/common/img/content/water/quality.png'

// import {
//   MDBView,
//   MDBMask,
//   MDBAnimation
// } from "../../../legacy";
//> CSS
import './index.scss'

interface Props {
  maincontent1: React.ReactNode
  columnheading1: React.ReactNode
  columnheading2: React.ReactNode
  columnheading3: React.ReactNode
  columncontent1: React.ReactNode
  columncontent2: React.ReactNode
  columncontent3: React.ReactNode
  button1: React.ReactNode
}

const IntroSection = ({
  maincontent1,
  columnheading1,
  columnheading2,
  columnheading3,
  columncontent1,
  columncontent2,
  columncontent3,
  button1
}: Props): JSX.Element => {
  const history = useHistory()
  //const cmsContext = useCMSContext()
  //const pageContext = useCMSPageContext()

  // const getKeyFromSlug = (slug: string) => {
  //   const refs = cmsContext.keyRefs?.indexKey

  //   return Object.keys(pickBy(refs, page => page.slug === slug))[0] || ''
  // }

  const navHandler = (
    path: string /*position: string, offset: number*/
  ): void => {
    history.push(path)
    //scroller.scrollTo(position, offset)
  }

  return (
    <div className="intro">
      <MDBContainer className="p-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="9" className=" mb-3 col-features">
            <p>{maincontent1}</p>
            <hr />
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol md="3" className="text-center mb-3 col-features">
            <img
              src={Quality}
              alt={`${columnheading1} image`}
              className="img-fluid mb-3"
            />
            <p className="lead">{columnheading1}</p>
            <hr />
            <p>{columncontent1}</p>
          </MDBCol>
          <MDBCol md="3" className="text-center mb-3 col-features">
            <img
              src={Hand}
              alt={`${columnheading2} image`}
              className="img-fluid mb-3"
            />
            <p className="lead">{columnheading2}</p>
            <hr />
            <p>{columncontent2}</p>
          </MDBCol>
          <MDBCol md="3" className="text-center mb-3 col-features">
            <img
              src={Hydrant}
              alt={`${columnheading3} image`}
              className="img-fluid mb-3"
            />
            <p className="lead">{columnheading3}</p>
            <hr />
            <p>{columncontent3}</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" className="text-center mb-3 col-features">
            <Link
              onClick={() => navHandler('home' /*"about", 300*/)}
              to="connect"
              smooth={true}
              spy={true}
              duration={300}
              offset={-150}>
              {button1}
              <MDBBtn color="white" size="lg" rounded>
                {button1}
                <MDBIcon icon="arrow-right" className="ps-3 fa-lg" />
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default IntroSection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
