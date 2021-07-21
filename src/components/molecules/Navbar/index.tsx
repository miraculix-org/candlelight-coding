import {
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit'
import {useState} from 'react'
import {useHistory} from 'react-router'
import {
  Link
  /*scroller*/
} from 'react-scroll'

import {
  IndexField,
} from '@snek-at/jaen'

import Logo from '~/common/logo.svg'

import {MDBNavbar, MDBCollapse} from '~/components/legacy'

import './index.scss'

interface Props {
  logoUrl?: string
  logoAlt?: string
  showMenu?: boolean
}

const Navbar = ({
  logoUrl = Logo,
  logoAlt = 'tuwien club'
}: Props): JSX.Element => {
  const activePath = window.location.pathname
  const [showNavbar, setShowNavbar] = useState(false)

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
    setShowNavbar(false)
    history.push(path)
    //scroller.scrollTo(position, offset)
  }

  return (
    <>
      <MDBNavbar
        light
        color="grey lighten-4"
        fixed="top"
        expand="lg"
        scrolling
        transparent>
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <img src={logoUrl} alt={logoAlt} className="navlogo" />
          </MDBNavbarBrand>
          <MDBNavbarBrand className="navtitle d-block d-lg-none">
            WG St. Jakob i. Ros.
          </MDBNavbarBrand>
          <div>
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavbar(!showNavbar)}>
              <MDBIcon icon="bars" size="lg" />
            </MDBNavbarToggler>
          </div>
          <MDBCollapse isOpen={showNavbar} navbar>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active={activePath === '/'}
                  onClick={() =>
                    navHandler('/' /*"about", 300*/)
                  }>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link
                  onClick={() => navHandler('/' /*"about", 300*/)}
                  data-test="nav-link"
                  className="nav-link"
                  to="about"
                  offset={-90}
                  smooth={true}
                  spy={true}
                  duration={300}>
                  Über uns
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link
                  onClick={() => navHandler('/' /*"about", 300*/)}
                  data-test="nav-link"
                  className="nav-link"
                  to="connect"
                  offset={-90}
                  smooth={true}
                  spy={true}
                  duration={300}>
                  Wasseranschluss
                </Link>
              </MDBNavbarItem>
              {/* {navindex1} */}
              <MDBNavbarItem>
                <Link
                  onClick={() => navHandler('/' /*"about", 300*/)}
                  data-test="nav-link"
                  className="nav-link"
                  to="emergency">
                  Notfall
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link
                  onClick={() => navHandler('/' /*"about", 300*/)}
                  data-test="nav-link"
                  className="nav-link"
                  to="col-connect-2"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  duration={300}>
                  Kosten
                </Link>
              </MDBNavbarItem>
              <IndexField
                fixedSlug={'home'}
                outerElement={() => <div />}
                renderItem={(item, key, navigate) => (
                  <p key={key}>
                    {/* Slug: {item.slug} Title: {item.title}{' '} */}
                    <MDBNavbarItem>
                      <MDBNavbarLink active={activePath === '/'+ item.slug} onClick={() => navigate()}>
                        {item.title}
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                  </p>
                )}
              />
              {/*<MDBNavbarItem>
                <MDBNavbarLink
                    href="/profile"
                    onClick={() => setShowNavbar(!showNavbar)}
                >
                    Konhref
                </MDBNavbarLink>
                </MDBNavbarItem>*
                <MDBNavbarItem>
                <MDBNavbarLink
                    href="/cart"
                    onClick={() => setShowNavbar(!showNavbar)}
                >
                    <span className="d-flex align-items-center">
                    <MDBIcon
                        icon="shopping-basket"
                        className="mr-1 d-inline-block"
                    />
                    Kontakt
                    {this.props.checkout &&
                        this.props.checkout.lineItems &&
                        this.props.checkout.lineItems.edges.length > 0 && (
                        <span className="counter ml-1">
                            {this.getCartCount()}
                        </span>
                        )}
                    </span>
                </MDBNavbarLink>
                        </MDBNavbarItem>*/}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Navbar
