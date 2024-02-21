import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <footer className="bg-dark text-light py-3">
        <Container>
          <div className="hrTag d-flex">
            <hr style={{ width: '50%' }} />
            <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="BMS Image" height={'50px'} className='mx-3' />
            <hr style={{ width: '50%' }} />
          </div>
          <Row>
            <Col md={4}>
              <h5>ABOUT US</h5>
              <p>BookMyShow is India's largest entertainment platform and the one-stop destination for all your ticketing needs.</p>
              <div className="social-links">
                <a href="https://www.facebook.com/BookMyShowIN" target="_blank" rel="noopener noreferrer"><i style={{ height: '33px' }} className="fa-brands fa-facebook fa-2x me-3"></i></a>
                <a href="https://twitter.com/BookMyShow" target="_blank" rel="noopener noreferrer"><i style={{ height: '33px' }} className="fa-brands fa-x-twitter fa-2x me-3"></i></a>
                <a href="https://www.instagram.com/bookmyshowin/" target="_blank" rel="noopener noreferrer"><i style={{ height: '33px' }} className="fa-brands fa-instagram fa-2x me-3"></i></a>
                <a href="https://www.youtube.com/user/BookMyShow/featured" target="_blank" rel="noopener noreferrer"><i style={{ height: '33px' }} className="fa-brands fa-youtube fa-2x me-3"></i></a>
                <a href="https://www.pinterest.com/bookmyshow/" target="_blank" rel="noopener noreferrer"><i style={{ height: '33px' }} className="fa-brands fa-pinterest fa-2x me-3"></i></a>
                <a href="https://www.linkedin.com/company/bookmyshow/" target="_blank" rel="noopener noreferrer"><i style={{ height: '33px' }} className="fa-brands fa-linkedin fa-2x me-3"></i></a>
              </div>
            </Col>
            <Col md={4}>
              <h5>USEFUL LINKS</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-decoration-none">Careers</a></li>
                <li><a href="#" className="text-decoration-none">Blog</a></li>
                <li><a href="#" className="text-decoration-none">Contact Us</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>LEGAL</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Terms of Use</a></li>
                <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
                <li><a href="#" className="text-decoration-none">FAQs</a></li>
                <li><a href="#" className="text-decoration-none">Sitemap</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center mt-3">
              <p>&copy; 2024 BookMyShow. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer