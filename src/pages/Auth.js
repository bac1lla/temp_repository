import React, {useState} from 'react'
import {Link, useLocation} from "react-router-dom";
import {LAB_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Container, Input, LabelText, Col} from "../styles/styled-components";
import TitleScreen from "../components/TitleScreen";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";

function validateName(name) {
    return /[А-Яа-я\s]+/.test(name)
}

function validateGroup(group) {
    return /^[а-яА-я]\d[А-Яа-я\d]-\d\d\d[а-яА-я]-\d\d$/.test(group)
}

const Auth = () => {
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const navigate = useNavigate()
    const isLogin = false

    function sendForm(name, group, navigate) {
        if (validateGroup(group) && validateName(name)) {
            navigate(LAB_ROUTE)
        } else {
            alert("Проверьте валидность данных")
        }
    }

    return (
        <Container style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <Container style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: 700,
                height: 500,
                borderRadius: 15,
                // border: "1px solid black",
                backgroundColor: "#89b6ef"
            }}>

                <Col style={{marginBottom: 20}}>
                    <LabelText style={{marginBottom: 5}}>ФИО</LabelText>
                    <Input onChange={e => setName(e.target.value)} placeholder={"Васильев Александр Владиславович"}/>
                </Col>
                <Col>
                    <LabelText style={{marginBottom: 5}}>Номер группы</LabelText>
                    <Input onChange={e => setGroup(e.target.value)} placeholder={"М8О-405Б-19"}/>
                </Col>
                <Button style={{marginTop: 40}} variant="primary" onClick={() => sendForm(name, group, navigate)}>Зарегистрироваться</Button>
            </Container>
        </Container>
    );
};

export default Auth;