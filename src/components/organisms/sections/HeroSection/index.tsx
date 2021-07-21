//> Additional modules
//> Additional modules
// Parallax
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {MDBRow, MDBCol, MDBBtn, MDBIcon} from 'mdb-react-ui-kit'
// import {
//   TextField,
// } from '@snek-shipyard/jaen-cms'
import React from 'react'
import {useHistory} from 'react-router'
// Parallax
// Scroll
import {Link} from 'react-scroll'
import {Parallax} from 'react-scroll-parallax'

//> Images
// Coffee center image
import localImage from '../../../../common/img/content/bg/bg1.jpg'
// Placeholder image
import {ReactComponent as WgLogo} from '../../../../common/logo.svg'
import {MDBView, MDBMask, MDBAnimation} from '../../../legacy'
//> CSS
import './index.scss'

interface Props {
  xlheading1: React.ReactNode
  xlheading2: React.ReactNode
  xlheading3: React.ReactNode
  xlsubheading1: React.ReactNode
  xlsubheading2: React.ReactNode
  lgheading1: React.ReactNode
  button1: React.ReactNode
}

const HeroSection = ({
  xlheading1,
  xlheading2,
  xlheading3,
  xlsubheading1,
  xlsubheading2,
  lgheading1,
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

  let loaded = false
  const data = {
    slideLoadimage: false,
    slideImage: {
      urlLink: localImage
    },
    slideButton: {
      buttonTitle: 'Online Wasserleser'
    }
  }

  if (data.slideImage) {
    loaded = true
  }

  return (
    <div id="hero">
      <div className="overlay justify-content-center align-items-center d-flex">
        <Parallax className="mobile" y={[-20, 20]} tagOuter="figure">
          <MDBAnimation type="fadeIn" duration={500}>
            <div className="loader">
              <MDBAnimation
                className="loader-bg"
                type="rotateIn"
                duration={1000}>
                <WgLogo
                  style={{
                    resize: 'horizontal',
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </MDBAnimation>
            </div>
            <MDBAnimation
              className="d-xl-none"
              type="fadeInUp"
              duration={500}
              delay="400ms">
              <div className="text-white">
                <h2 className="text-center text-white font-weight-bold px-3">
                  {lgheading1}
                </h2>
              </div>
              <MDBAnimation type="fadeInUp" duration={500} delay="500ms">
                <Link
                  onClick={() =>
                    navHandler('online-wasserleser' /*"about", 300*/)
                  }
                  to="shop"
                  smooth={true}
                  spy={true}
                  duration={300}
                  offset={-150}>
                  <MDBBtn color="white" size="lg" rounded>
                    {button1}
                    <MDBIcon icon="arrow-right" className="ps-3 fa-lg" />
                  </MDBBtn>
                </Link>
              </MDBAnimation>
            </MDBAnimation>
          </MDBAnimation>
        </Parallax>
      </div>
      <div className="overlay justify-content-center align-items-center d-none">
        <Parallax className="custom-className" y={[-20, 20]} tagOuter="figure">
          <MDBAnimation type="fadeIn" duration={500}>
            <div className="loader">
              <MDBAnimation
                className="loader-bg"
                type="rotateIn"
                duration={1000}>
                <WgLogo
                  style={{
                    resize: 'horizontal',
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </MDBAnimation>
            </div>
          </MDBAnimation>
        </Parallax>
      </div>
      <MDBRow className="w-100 m-0">
        <MDBCol xl="6" className="p-0">
          <MDBAnimation type="fadeInLeft" duration={900}>
            <MDBView
              src={
                loaded
                  ? data.slideLoadimage
                    ? process.env.REACT_APP_BASEURL + data.slideImage.urlLink
                    : localImage
                  : localImage
              }
              className="move">
              <MDBMask
                pattern={5}
                style={{backgroundColor: 'rgba(156,39,176,0.1)'}}
                className="d-flex justify-content-center align-items-center"></MDBMask>
            </MDBView>
          </MDBAnimation>
        </MDBCol>
        <MDBCol xl="6" className="p-0">
          <MDBRow className="flex-center m-0 p-0">
            <MDBCol xl="6" className="d-xl-block d-none">
              <div className="hero-side customfont">
                <Parallax className="parallax" y={[-40, 40]} tagOuter="figure">
                  <div>
                    <MDBAnimation type="fadeInUp" duration={500} delay="450ms">
                      <h2>{xlheading1}</h2>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp" duration={500} delay="400ms">
                      <h2>{xlheading2}</h2>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp" duration={500} delay="350ms">
                      <h2>{xlheading3}</h2>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp" duration={500} delay="300ms">
                      <h3 className="pt-2">{xlsubheading1}</h3>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp" duration={500} delay="200ms">
                      <h3>{xlsubheading2}</h3>
                    </MDBAnimation>
                    {loaded && data.slideButton.buttonTitle && (
                      <MDBAnimation
                        type="fadeInUp"
                        duration={500}
                        delay="100ms">
                        <Link
                          onClick={() =>
                            navHandler('online-wasserleser' /*"about", 300*/)
                          }
                          to="shop"
                          smooth={true}
                          spy={true}
                          duration={300}
                          offset={-150}>
                          <MDBBtn color="white" size="lg" rounded>
                            {button1}
                            <MDBIcon
                              icon="arrow-right"
                              className="ps-3 fa-lg"
                            />
                          </MDBBtn>
                        </Link>
                      </MDBAnimation>
                    )}
                  </div>
                </Parallax>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default HeroSection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
