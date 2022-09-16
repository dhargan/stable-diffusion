import { Container, Form, Row, Button, Col } from "react-bootstrap";
import "./App.css";
import loading from "./Assets/loading.gif";
import { useState } from "react";
import Result from "./Components/Result";

function App() {
    const [prompt, setPrompt] = useState("");
    const [showImage, setShowImage] = useState(false);
    const [promptText, setPromptText] = useState("");
    const [showLoading, setShowLoading] = useState(false);

    const handleChange = (event) => {
        setPrompt(event.target.value);
    };

    const prepareImage = () => {
        setShowLoading(true);
        setShowImage(true);
        fetch("http://127.0.0.1:8000/", {
            method: "POST",
            body: JSON.stringify({ prompt: prompt }),
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => {
            setShowLoading(false);
            const newPromptText = prompt;
            setPromptText(newPromptText);
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
                            <Form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    prepareImage();
                                }}
                            >
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
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col>
                            {showImage ? (
                                <Container>
                                    <Row>
                                        {showLoading ? (
                                            <>
                                                <img src={loading} />
                                            </>
                                        ) : (
                                            <Result promptText={prompt} />
                                        )}
                                    </Row>
                                </Container>
                            ) : (
                                <Container>
                                    <Row>
                                        <h5 style={{ margin: "25px" }}>
                                            Please enter a prompt to generate an
                                            image. <br /> This may take a few
                                            minutes.
                                        </h5>
                                    </Row>
                                </Container>
                            )}
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default App;
