import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CForm, CFormFloating, CFormInput, CFormLabel, CFormCheck } from '@coreui/bootstrap-react'
import { PiSealCheckFill  } from "react-icons/pi";

function LoginPage(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main className="login-page">
            <div className="login-logo"></div>

            <CForm className="login-form">
                <CFormFloating className="mb-3">
                    <CFormInput type="id" id="floatingId" placeholder="abcd1234"/>
                    <CFormLabel htmlFor="floatingId">아이디</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormInput type="password" id="floatingPassword" placeholder="password"/>
                    <CFormLabel htmlFor="floatingPassword">비밀번호</CFormLabel>
                </CFormFloating>
                <CFormCheck inline id="ssoChecked" label="로그인 정보 저장"/>
                <CFormLabel className="mb-5" style={{float: 'right'}}>비밀번호 찾기</CFormLabel>
            </CForm>
            
            <Button onClick={handleShow} className="p-button" variant="mb-3 p-1 px-3" size="" style={{ borderRadius: '13px', borderWidth: '2px' }}>로그인</Button>
            <Button onClick={function(e){
                e.preventDefault();
                props.onChangePage();
            }} variant="mb-3 p-1 px-3" size="" className="s-button" style={{ borderRadius: '13px', borderWidth: '2px' }}>회원가입</Button>

            <Modal show={show} onHide={handleClose} centered>
                {/* <Modal.Header closeButton>
                <Modal.Title>로그인 성공</Modal.Title>
                </Modal.Header> */}
                <Modal.Body className="modal-body">
                    <PiSealCheckFill size={70}/>
                    <p>로그인 되었습니다.</p>
                </Modal.Body>
                <Modal.Footer>
                <Button className="p-button" variant="mb-3 p-1 px-3" onClick={handleClose}>확인</Button>
                </Modal.Footer>
            </Modal>
        </main>
    )
}

export default LoginPage;