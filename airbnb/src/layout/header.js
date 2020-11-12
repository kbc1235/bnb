import React from 'react';
import Logo from '../logo.svg';

function Header(){
    return (
        <div className="header">
            <div className="inner">
                <h1 className="logo"><img src={Logo} alt="airbnb"></img></h1>
                <ul className="search_wrapper">
                    <li>
                        <a href="#">숙소</a>
                    </li>
                    <li>
                        <a href="#">체험</a>
                    </li>
                    <li>
                        <a href="#">온라인체험</a>
                    </li>
                </ul>
                <nav className="menu">
                    <ul>
                        <li className="hostbtn"><a href="#">호스트 모드로 전환</a></li>
                        <li className="language">
                            <a href="#">Language</a>
                            <ul>
                                <li>한국어(KR)</li>
                                <li>KRW</li>
                            </ul>
                        </li>
                        <li className="usermenu">
                            <p>menu</p>
                            <ul>
                                <li>로그인</li>
                                <li>회원가입</li>
                                <li>숙소 호스트 되기</li>
                                <li>체험 호스팅 하기</li>
                                <li>도움말</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;