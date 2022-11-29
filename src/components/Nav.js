import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LAB_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router";
import {MainTitleText, SecondaryTitleText} from "../styles/styled-components";

const Nav = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    return (
        <div style={{display: "flex", gap: 20, alignItems: "center", padding: 50}}>
            <Button variant="dark"><Link style={{textDecoration: "none", color: "white"}} to={REGISTRATION_ROUTE}>Выход</Link></Button>
            <Button variant="dark" onClick={() => setShow(true)}>Помощь</Button>
            <Button variant="dark" onClick={() => navigate(-1)}>Назад</Button>
            {/*<Button variant="dark" onClick={() => navigate(-1)}>Дальше</Button>*/}
            <Modal
                show={show}
                size="lg"
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <MainTitleText>Теория</MainTitleText>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*<SecondaryTitleText>ЧТО-ТО</SecondaryTitleText> */}
                    <MainTitleText style={{color: "red"}}>Надо сюда маркдаун или латех запилить, чтобы формулы отображать</MainTitleText>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                    <SecondaryTitleText>ЧТО-ТО</SecondaryTitleText>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Nav;