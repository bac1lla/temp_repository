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

const Third = observer(() => {

    // const {matrix} = useContext(Context)
    const [matrix, setMatrix] = useState(getMatrix(5,3,0,40))
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
            setMatrix(getMatrix(h + count, w + count, 0 ,30))
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
                            {matrix.map((row, i) =>
                                <tr>
                                    {row.map((cell, j) =>
                                        <td>{cell}</td>
                                    )}
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </div>
                    {/*<LabelText style={{color: "#ff5151"}}>В случае возвращения к предыдущему экрану значения платежной матрицы будут*/}
                    {/*    изменены</LabelText>*/}
                    {/*<Button variant={"dark"} onClick={() => navigate(SECONDPAGE)}>Далее</Button>*/}
                </div>
                <SecondaryTitleText>Дана матрица, имеющая решение в чистых стратегиях, найдите ее цену игры:</SecondaryTitleText>
                <div style={{
                    display: "flex",
                    // alignItems: "center",
                    // justifyContent: "center",
                    gap: 10,
                    flexDirection: "column"
                }}>
                    <Input style={{border: "1px solid black", width: "100%"}} placeholder={"Введите ответ"} value={value} onChange={e => setValue(e.target.value)}/>
                    <Button variant={"dark"} onClick={() => handleClick()}>Далее</Button>
                </div>
            </Container>
        </Container>
    );
});

export default Third;

export const Brace = styled(MathText)`
  font-size: 40px;
  //line-height: 10;
`
