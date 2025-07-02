import {
    Button,
    Container,
    Modal,
    Nav,
    Navbar,
    Pagination,
    Spinner,
    Form,
    FloatingLabel,
    Carousel,
} from "react-bootstrap";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useState } from "react";

function App18() {
    const [show, setShow] = useState(false);
    // 현재 활성화된 페이지 번호를 관리하는 상태 추가
    const [activePage, setActivePage] = useState(3); // 초기값은 3으로 설정

    // 페이지 아이템 클릭 시 호출될 함수
    const handlePageChange = (pageNumber) => {
        // 페이지 번호가 유효한 범위 내에 있는지 확인 (선택 사항이지만 안정성을 높임)
        if (pageNumber >= 1 && pageNumber <= 5) { // 예시에서는 총 5페이지
            setActivePage(pageNumber);
            // 실제 데이터 페칭 로직 (예: API 호출)은 여기에 추가
            console.log(`페이지 ${pageNumber}로 이동`);
        }
    };

    // Pagination.Item 렌더링을 위한 배열
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === activePage} // 현재 페이지와 일치할 때만 active
                onClick={() => handlePageChange(number)} // 클릭 시 상태 업데이트
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div>
            {/* ... (이전 코드 생략) ... */}

            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="/public/bee.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>꿀벌</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
                            libero?
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/public/bear.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>아기곰</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
                            voluptatem?
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/public/eagle.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>독수리</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eligendi, iure!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <hr />
            <FloatingLabel label="아이디를 입력해주세요." controlId="idFloatingInput">
                <Form.Control placeholder="아이디를 입력해주세요." />
            </FloatingLabel>
            <FloatingLabel
                label="패스워드를 입력해주세요."
                controlId="passwordFloatingInput"
            >
                <Form.Control type="password" placeholder="패스워드를 입력해주세요." />
            </FloatingLabel>
            <hr />
            <Form.Group controlId="idInput">
                <Form.Label>아이디</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group controlId="passwordInput">
                <Form.Label>패스워드</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Form.Group controlId="contentTextarea">
                <Form.Label>본문</Form.Label>
                <Form.Control as="textarea" />
            </Form.Group>
            <hr />
            <Button onClick={() => setShow(!show)}>모달 예제</Button>
            <Modal show={show} onHide={() => setShow(!show)}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>Lorem ipsum dolor sit amet.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                    doloremque ducimus laborum magnam qui quos ratione saepe voluptatibus
                    voluptatum! Aliquam aspernatur beatae consectetur harum in magni
                    maxime mollitia odio optio?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(!show)}>
                        Close
                    </Button>
                    <Button onClick={() => setShow(!show)}>Save</Button>
                </Modal.Footer>
            </Modal>
            <hr />
            <Navbar className="bg-body-tertiary" expand="lg">
                <Container>
                    <Navbar.Brand>PROJECT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/">LINK</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
            <Pagination>
                {/* 이전 페이지 버튼 */}
                <Pagination.Prev onClick={() => handlePageChange(activePage - 1)} disabled={activePage === 1}>
                    <GrCaretPrevious />
                </Pagination.Prev>

                {items} {/* 동적으로 생성된 페이지 아이템들 */}

                {/* 다음 페이지 버튼 */}
                <Pagination.Next onClick={() => handlePageChange(activePage + 1)} disabled={activePage === 5}>
                    <GrCaretNext />
                </Pagination.Next>
            </Pagination>
            <hr />
            <Spinner />
            <Spinner animation="border" />
            <Spinner animation="grow" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
        </div>
    );
}

export default App18;