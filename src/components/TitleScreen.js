import React, {FC, useState} from 'react';
import {Container, Input, LabelText, Col, LittleText, Row, Cell} from '../styles/styled-components';

function validateName(name) {
    return /[А-Яа-я\s]+/.test(name)
}

function validateGroup(group) {
    return /^[а-яА-я]\d[А-Яа-я\d]-\d\d\d[а-яА-я]-\d\d$/.test(group)
}



function declareMatrix(rows, cols) {

    let matrix = []

    for (let i = 0; i < cols; i++) {
        matrix[i] = []
        for (let j = 0; j < rows; j++) {
            matrix[i][j] = 0
        }
    }

    return matrix
}

function createMatrix() {

    let matrixx = declareMatrix(4, 8)

    return (
        <>
        {matrixx.map((row) => (
                    <Row>{
                        row.map((col) => (
                            <Cell>{col}</Cell>
                        ))
                    }
                    </Row>
                )
            )
        }
        </>
    )
}

const TitleScreen = () => {
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [matrix, setMatrix] = useState({column: 3, row: 3})

    console.log(declareMatrix(4, 9))

    return (
        <Container>
            <Col>
                <LabelText>Введите имя</LabelText>
                <Input variant={validateName(name) ? "success" : "danger"} value={name}
                       onChange={e => setName(e.target.value)}/>

                <LittleText>Введите группу</LittleText>
                <Input variant={validateGroup(group) ? "success" : "danger"} value={group}
                       onChange={e => setGroup(e.target.value)}/>


            </Col>
        </Container>
    );
};

export default TitleScreen;