// 모든 페이지에 공통적으로 들어가는 header와 footer를 동적으로 로드하는 스크립트입니다.
// header와 footer의 HTML 코드를 작성합니다.

//TODO header, footer 제작하기

// header로드하는 함수입니다.
const makeHeader = () => {
    const header = document.getElementById("header");
    const path = window.location.pathname.split("/").pop();
    header.innerHTML = `
        <h1>LOGO</h1>
        `;
    return;
};

// footer로드하는 함수입니다.
const makeFooter = () => {
    const footer = document.getElementById("footer");
    footer.innerHTML = `
        <p>Copyright © 2023. All rights reserved.</p>
        `;
    return;
};

// header와 footer를 로드합니다.
makeHeader();
makeFooter;
