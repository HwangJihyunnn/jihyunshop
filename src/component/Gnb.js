import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../App.css';

const Gnb = () => {
  return (
    <>
        <div className="logo">
            <img src={require('../img/logo.png')} alt="로고" />
        </div>
        <div class="menu-area">
            <Navbar bg="light" data-bs-theme="light" text-white>
                <Container>
                    <Nav className="me-auto menu">
                        <Nav.Link href="#home">메인</Nav.Link>
                        <Nav.Link href="#features">추천</Nav.Link>
                        <Nav.Link href="#pricing">랭킹</Nav.Link>
                        <Nav.Link href="#pricing">매거진</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="search">
                <img src={require('../img/search-ico.png')} alt="상품검색" />
                <input type="text" placeholder='상품검색' /* onKeyDown={(e)=>search(e)} *//>
            </div>
        </div>
    </>
  )
}

export default Gnb
