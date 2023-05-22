import React from 'react';
import { Space, useQuery, observer, useIdentity, ClientProvider, useClient } from '@dxos/react-client';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import "../main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { TaskList } from "./TaskList"

export const Tasks = observer(() => {
    return(
        <Container fluid id='mainDiv'>
            <Col xs={10} id='mainContent'>
                <Row id="newEventSection">
                    <input id='taskListName' placeholder="Title this list..."/>
                </Row>
                <Row id='taskListRow'><TaskList/></Row>
                <Row  id='newButtonRow'><button id='newItemButton'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1000px-Plus_symbol.svg.png?20081122110508'></img></button></Row>
            </Col>
        </Container>
    );
});