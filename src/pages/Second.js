import React, {useContext, useEffect, useState} from 'react';
import Nav from "../components/Nav";
import {
    Container,
    LabelText,
    MainText,
    MainTitleText,
    MathText,
    Row,
    SecondaryTitleText
} from "../styles/styled-components";
import {Button, Dropdown, Table} from "react-bootstrap";
import Second from "./Second";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {SECONDPAGE, THIRDPAGE} from "../utils/consts";
import {useNavigate} from "react-router";
import DropdownComp from "../components/DropdownComp";
import styled from "styled-components";

// const getMatrix = (h, w, min, max) => [...Array(w)].map(x => [...Array(h)].map(b => Math.floor(Math.random() * (max - min + 1) + min)));

const SecondPage = observer(() => {

    const {matrix} = useContext(Context)
    const [input1, setInput1] = useState("Выберете")
    const [input2, setInput2] = useState("Выберете")
    const [input3, setInput3] = useState("Выберете")
    const [input4, setInput4] = useState("Выберете")
    const [input5, setInput5] = useState("Выберете")
    const [input6, setInput6] = useState("Выберете")
    // useEffect(() => {
    //     matrix.generateMatrix(4, 5, 0, 40)
    //
    // },[])
    // console.log(matrix)

    const navigate = useNavigate()

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
                    <MainTitleText>Платежная матрица:</MainTitleText>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 30
                    }}>
                        <MainText>A =</MainText>
                        <Table striped style={{width: 200}}>
                            <tbody>
                            {matrix.values.map((row, i) =>
                                <tr>
                                    {row.map((cell, j) =>
                                        <td>{i === 0 && j === 0 ? "a+1" : cell}</td>
                                    )}
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </div>
                    <LabelText style={{color: "#ff5151"}}>В случае возвращения к предыдущему экрану значения платежной матрицы будут
                        изменены</LabelText>
                    {/*<Button variant={"dark"} onClick={() => navigate(SECONDPAGE)}>Далее</Button>*/}
                </div>
                <SecondaryTitleText>Заменяя пропуски выбранным значениями, сконструируйте формулу для вычисления
                    параметра <MathText>(a+1)</MathText></SecondaryTitleText>
                <div style={{
                    display: "flex",
                    // alignItems: "center",
                    // justifyContent: "center",
                    gap: 10,
                    flexDirection: "column"
                }}>
                    <Row style={{alignItems: "center", gap: 10, height: 70}}>
                        <MathText>&alpha; = </MathText>
                        <DropdownComp title={"Выберете"} items={["min", "max"]}/>
                        {/*<Brace>[</Brace>*/}
                        <DropdownComp title={"Выберете"} items={["min", "max"]}/>
                        <MathText>a(i,j)</MathText>
                        {/*<Brace>]</Brace>*/}
                    </Row>
                    <Row style={{alignItems: "center", gap: 10, height: 70}}>
                        <MathText>&beta; = </MathText>
                        <DropdownComp title={"Выберете"} items={["min", "max"]}/>
                        {/*<Brace>[</Brace>*/}
                        <DropdownComp title={"Выберете"} items={["min", "max"]}/>
                        <MathText>a(i,j)</MathText>
                        {/*<Brace>]</Brace>*/}
                    </Row>
                <Button variant={"dark"} onClick={() => navigate(THIRDPAGE)}>Далее</Button>
                </div>
            </Container>
        </Container>
    );
});

export default SecondPage;

export const Brace = styled(MathText)`
  font-size: 40px;
  //line-height: 10;
`
