import React, {useState} from 'react';
import {Container, Input, MainText, MainTitleText, Row, SecondaryTitleText} from "../styles/styled-components";
import Nav from "../components/Nav";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";
import {FIRSTPAGE} from "../utils/consts";

const Lab = () => {
    const [count1, setCount1] = useState("")
    const [count2, setCount2] = useState("")
    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const navigate = useNavigate()

    function handleClick() {
        if (count1 && count2 && number1 && number2) {
            navigate(FIRSTPAGE)
        } else {
            alert("Проверьте данные!")
        }
    }

    return (
        <Container style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <Container style={{width: 700}}>
                <Nav style={{margin: 15}}/>
                <div style={{
                    width: "100%",
                    // height: "100%",
                    backgroundColor: "white",
                    borderRadius: 15,
                    padding: 10,
                    margin: 15,
                    display: "flex",
                    // alignItems: "center",
                    flexDirection: "column",
                    gap: 10
                }}>
                    <MainTitleText>Постановка задачи</MainTitleText>
                    <SecondaryTitleText>Дано:</SecondaryTitleText>
                    <MainText>Платежная матрица <span
                        style={{fontWeight: 600, fontStyle: "italic"}}>А=[a(i,j)]</span> размерности <span
                        style={{fontWeight: 600, fontStyle: "italic"}}>(m x n)</span>, у которой элемент <span
                        style={{fontWeight: 600, fontStyle: "italic"}}>a(s,t)</span>, является параметром и равен
                        числу <span style={{fontWeight: 600, fontStyle: "italic"}}>(a+1)</span>.</MainText>
                    <SecondaryTitleText>Определить:</SecondaryTitleText>
                    <MainText>При каких значениях параметра <span
                        style={{fontWeight: 600, fontStyle: "italic"}}>(a+1)</span> игра имеет решение в чистых
                        стратегиях.</MainText>
                </div>
                <div style={{
                    width: "100%",
                    // height: "100%",
                    backgroundColor: "white",
                    borderRadius: 15,
                    padding: 10,
                    margin: 15,
                    display: "flex",
                    // alignItems: "center",
                    flexDirection: "column",
                    gap: 10
                }}>
                    <MainTitleText>Ввод параметров</MainTitleText>
                    <Row style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        paddingBottom: 10
                    }}><MainText>Количество стратегий 1 игрока</MainText><Input
                        onChange={e => setCount1(e.target.value)} style={{border: "1px solid black", width: 55}}
                        placeholder={"2-7"}/></Row>
                    <Row style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        paddingBottom: 10
                    }}><MainText>Количество стратегий 2 игрока</MainText><Input
                        onChange={e => setCount2(e.target.value)} style={{border: "1px solid black", width: 55}}
                        placeholder={"2-7"}/></Row>
                    <Row style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        paddingBottom: 10
                    }}><MainText>Номер стратегии 1 игрока,при которой <br/>результат игры не определен:</MainText><Input
                        onChange={e => setNumber1(e.target.value)} style={{border: "1px solid black", width: 55}}
                        placeholder={""}/></Row>
                    <Row style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        paddingBottom: 10
                    }}><MainText>Номер стратегии 2 игрока,при которой <br/>результат игры не определен:</MainText><Input
                        onChange={e => setNumber2(e.target.value)} style={{border: "1px solid black", width: 55}}
                        placeholder={""}/></Row>
                    <Button variant={"dark"} onClick={() => handleClick()}>Далее</Button>
                </div>
            </Container>
        </Container>
    );
};

export default Lab;