import React, {Component} from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NewPage extends Component {
    render() {
        return (
            <Container className="py-3 pl-md-5">
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="birth-date">Birthday date</Label>
                        <Input type="date" name="birth-date" id="birth-date" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tel">Phone</Label>
                        <Input type="tel" name="tel" id="tel" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="select">Select category</Label>
                        <Input type="select" name="select" id="select">
                            <option>Family</option>
                            <option>Friends</option>
                            <option>Work</option>
                            <option>Others</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="text">Additional info</Label>
                        <Input type="textarea" name="text" id="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">Person avatar</Label>
                        <Input type="file" name="file" id="exampleFile" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default NewPage;
