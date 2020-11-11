import React from 'react';
import Logo from '../logo.svg';

function Header(){
    return (
        <div className="header">
<<<<<<< HEAD
            <div className="inner">
                <h1 className="logo"><img src={Logo} alt="airbnb"></img></h1>
                <div>
                    <div className="lodging">
                        <div className="lodging_wrapper">
                            
                        </div>
                    </div>
                    <div className="experience">
                        <div className="experience_wrapper">
                            
                        </div>
                    </div>
                    <p><a href="#">온라인 체험</a></p>
                </div>
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
=======
            <h1>airbnb</h1>
            <nav></nav>
>>>>>>> 15a9e069a343afd251ba1d85c8acf50eb3390440
        </div>
    );
}

export default Header;