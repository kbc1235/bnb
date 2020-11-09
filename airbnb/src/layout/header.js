import React from 'react';


function Header(){
    return (
        <div className="header">
            <h1 className><img src="" alt="airbnb"></img></h1>
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
    );
}

export default Header;