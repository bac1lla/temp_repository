import React, {useContext, useEffect} from 'react';
import Nav from "../components/Nav";
import {Container, LabelText, MainText, MainTitleText, SecondaryTitleText} from "../styles/styled-components";
import {Button, Table} from "react-bootstrap";
import Second from "./Second";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {SECONDPAGE} from "../utils/consts";
import {useNavigate} from "react-router";

// const getMatrix = (h, w, min, max) => [...Array(w)].map(x => [...Array(h)].map(b => Math.floor(Math.random() * (max - min + 1) + min)));

const First = observer(() => {

    const {matrix} = useContext(Context)
    useEffect(() => {
        matrix.generateMatrix(4, 5, 0, 40)

    },[])
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
                    <LabelText style={{color: "#ff5151"}}>В случае возвращения к предыдущему экрану значения платежной матрицы будут изменены</LabelText>
                    <Button variant={"dark"} onClick={() => navigate(SECONDPAGE)}>Далее</Button>
                </div>
            </Container>
        </Container>
    );
});

export default First;