import React, {useContext, useEffect, useState} from 'react';
import Nav from "../components/Nav";
import {
    Container, Input,
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
import {RESPAGE, SECONDPAGE, THIRDPAGE} from "../utils/consts";
import {useNavigate} from "react-router";
import DropdownComp from "../components/DropdownComp";
import styled from "styled-components";

const getMatrix = (h, w, min, max) => [...Array(w)].map(x => [...Array(h)].map(b => Math.floor(Math.random() * (max - min + 1) + min)));

const Res = observer(() => {

    // const {matrix} = useContext(Context)
    const [matrix, setMatrix] = useState(getMatrix(5, 3, 0, 40))
    const [value, setValue] = useState("")
    const [count, setCount] = useState(0)
    var h = 5
    var w = 3
    // useEffect(() => {
    //     matrix.generateMatrix(4, 5, 0, 40)
    //
    // },[])
    // console.log(matrix)

    const navigate = useNavigate()

    function validateValue() {
        if (count === 3) {
            navigate(RESPAGE)
        } else if (/^\d+$/.test(value)) {
            setMatrix(getMatrix(h + count, w + count, 0, 30))
            setValue("")
        } else {
            alert("Введите ответ в виде числа")
        }
    }

    function handleClick() {
        validateValue()
        setCount(count + 1)
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
                    <MainTitleText>Результаты</MainTitleText>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 30
                    }}>
                        {/*<MainText>A =</MainText>*/}
                        <Table striped style={{width: 500}}>
                            <tbody>
                            <tr>
                                <td><b>Результаты</b></td>
                                <td><b>Баллы</b></td>
                            </tr>
                            <tr>
                                <td>Задание №1</td>
                                <td>{Math.floor(Math.random() * (10 - 0 + 1) + 0)}</td>
                            </tr>
                            <tr>
                                <td>Задание №2</td>
                                <td>{Math.floor(Math.random() * (10 - 0 + 1) + 0)}</td>
                            </tr>
                            <tr>
                                <td>Задание №3</td>
                                <td>{Math.floor(Math.random() * (10 - 0 + 1) + 0)}</td>
                            </tr>
                            <tr>
                                <td>Задание №4</td>
                                <td>{Math.floor(Math.random() * (10 - 0 + 1) + 0)}</td>
                            </tr>
                            <tr>
                                <td>Задание №5</td>
                                <td>{Math.floor(Math.random() * (10 - 0 + 1) + 0)}</td>
                            </tr>
                            <tr>
                                <td>Контрольный тест</td>
                                <td>{Math.floor(Math.random() * (10 - 0 + 1) + 0)}</td>
                            </tr>

                            </tbody>
                        </Table>
                    </div>
                    {/*<LabelText style={{color: "#ff5151"}}>В случае возвращения к предыдущему экрану значения платежной матрицы будут*/}
                    {/*    изменены</LabelText>*/}
                    {/*<Button variant={"dark"} onClick={() => navigate(SECONDPAGE)}>Далее</Button>*/}
                </div>

                <div style={{
                    display: "flex",
                    // alignItems: "center",
                    // justifyContent: "center",
                    gap: 10,
                    flexDirection: "column"
                }}>
                    <MainTitleText style={{color: "red"}}>Ваша оценка <MathText style={{fontSize: 40}}>{Math.floor(Math.random() * (5 - 2 + 1) + 2)}</MathText></MainTitleText>
                    <Button variant={"danger"} onClick={() => navigate("/")}>Завершить работу</Button>
                </div>
            </Container>
        </Container>
    );
});

export default Res;
