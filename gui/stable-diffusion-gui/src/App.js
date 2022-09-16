import { Container, Form, Row, Button, Col } from "react-bootstrap";
import "./App.css";
import image from "./Assets/image.png";
import loading from "./Assets/loading.gif";
import { useState } from "react";

function App() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState(image);

    const handleChange = (event) => {
        setPrompt(event.target.value);
    };

    const prepareImage = () => {
        setResult(loading);
        fetch("http://127.0.0.1:8000/", {
            method: "POST",
            body: JSON.stringify({ prompt: prompt }),
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            import(`./Assets/image.png`).then((image) => {
                setResult(image);
            });
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row>
                        <h2>TEYOBEYLERJOURNEY</h2>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Prompt</Form.Label>
                                    <Form.Control
                                        onChange={handleChange}
                                        placeholder="Enter prompt"
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    onClick={prepareImage}
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col>
                            <img alt="result" src={result} />
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default App;
