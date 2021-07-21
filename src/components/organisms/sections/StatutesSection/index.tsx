//> Additional modules
//> Additional modules
// Parallax
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {MDBRow, MDBCol, MDBBtn, MDBIcon} from 'mdb-react-ui-kit'
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
  sectionData: object
}

const HeroSection = ({sectionData}: Props): JSX.Element => {
  let loaded = false
  const data = {
    slideLoadimage: false,
    slideImage: {
      urlLink: localImage
    },
    slideButton: {
      buttonTitle: 'Online Wasserleser'
    },
    sectionData
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
                    //backgroundColor: 'lightpink',
                    resize: 'horizontal',
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </MDBAnimation>
              <MDBAnimation type="fadeIn" duration={500} delay="1000ms">
                <div className="drops">
                  <div className="drop1"></div>
                  <div className="drop2"></div>
                </div>
              </MDBAnimation>
            </div>
            <svg
              className="liquidsvg"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1">
              <defs>
                <filter id="liquid">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="liquid"
                  />
                </filter>
              </defs>
            </svg>
            <MDBAnimation
              className="d-xl-none"
              type="fadeInUp"
              duration={500}
              delay="400ms">
              <div className="text-white">
                <h2 className="text-center font-weight-bold px-3">
                  Für Sie unterwegs
                </h2>
              </div>
              {loaded && data.slideButton.buttonTitle && (
                <MDBAnimation type="fadeInUp" duration={500} delay="500ms">
                  <Link to="shop" smooth={true} spy={true} duration={300}>
                    <MDBBtn color="white" size="lg" rounded>
                      {data.slideButton.buttonTitle}
                      <MDBIcon icon="arrow-right" className="ps-3 fa-lg" />
                    </MDBBtn>
                  </Link>
                </MDBAnimation>
              )}
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
                    //backgroundColor: 'lightpink',
                    resize: 'horizontal',
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </MDBAnimation>
              <MDBAnimation type="fadeIn" duration={500} delay="1000ms">
                <div className="drops">
                  <div className="drop1"></div>
                  <div className="drop2"></div>
                </div>
              </MDBAnimation>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="liquid">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="liquid"
                  />
                </filter>
              </defs>
            </svg>
          </MDBAnimation>
        </Parallax>
      </div>
      <MDBRow className="w-100 m-0">
        <MDBCol xl="6" className="col-xxl-6 p-0">
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
        <MDBCol xl="6" className="col-xxl-6 p-0">
          <MDBRow className="flex-center m-0 p-0">
            <MDBCol xl="6" className="d-xl-block d-none">
              <div className="hero-side customfont">
                <Parallax className="parallax" y={[-40, 40]} tagOuter="figure">
                  <div>
                    <MDBAnimation type="fadeInUp" duration={500} delay="450ms">
                      <h2>Frisch</h2>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp" duration={500} delay="400ms">
                      <h2>Sicher</h2>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp" duration={500} delay="350ms">
                      <h2>Zuverlässig</h2>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp" duration={500} delay="300ms">
                      <span className="pt-2">Wassergenossenschaft</span>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp" duration={500} delay="200ms">
                      <span>St. Jakob i. Ros.</span>
                    </MDBAnimation>
                    {loaded && data.slideButton.buttonTitle && (
                      <MDBAnimation
                        type="fadeInUp"
                        duration={500}
                        delay="100ms">
                        <Link
                          to="shop"
                          smooth={true}
                          spy={true}
                          duration={300}
                          offset={-150}>
                          <MDBBtn color="white" size="lg" rounded>
                            {data.slideButton.buttonTitle}
                            <MDBIcon
                              icon="arrow-right"
                              className="ps-2 fa-lg"
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
