import '../component/randomcomponent.css'
import { Button, Row, Col, Container } from "react-bootstrap";

export default function RandomComponent() {
    return (
        <Container className='randomContainer'>
            <div className='randomCard'>
                <Row className='randomFirstRow'>
                    <p className='randomTitle'>Random Challenge</p>
                    <Button className='languageBtn'>Choose a language</Button>
                    <Button className='reserveBtn'>Reserve Kata</Button>
                </Row>
                {/* <div className='randomKataCard'>
                    <Row className='randomKataRow'>
                        <Col md={2}>
                            <p className='kyuNum'>7 Kyu</p>
                        </Col>
                        <Col md={2}>
                            <div className='kataDiv'>
                                <p className='randomKata'>Randomly Chosen Kata</p>
                                <p className='authorTitle'>Author of this Kata</p>
                                <p className='descriptionTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id earum assumenda quia architecto, quo quis vero, provident cumque optio error consequatur illo qui placeat pariatur ducimus dolor repellat. Aliquid!</p>

                            </div>
                        </Col>
                    </Row>
                </div> */}
                <Row className='randomKataRow'>
                    <div className='kyuCol'>
                        <p className='kyuNum'>7 Kyu</p>
                        <p className='randomKata'>Randomly Chosen Kata</p>
                    </div>
                    <div>
                        <div className='kataDiv'>
                            <p className='authorTitle'>Author of this Kata</p>
                            <p className='descTitle'>Kata Description</p>
                            <p className='descriptionTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.</p>
                        </div>
                    </div>
                </Row>
            </div>

        </Container >
    );
}