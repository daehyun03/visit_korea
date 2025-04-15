// 모든 페이지에 공통적으로 들어가는 header와 footer를 동적으로 로드하는 스크립트입니다.
// header와 footer의 HTML 코드를 작성합니다.

//TODO header, footer 제작하기

// header로드하는 함수입니다.
const makeHeader = () => {
    const header = document.getElementById("header");
    // 현재 페이지의 경로를 가져옵니다.
    const path = window.location.pathname;
    console.log(path);
    // logo를 생성합니다.
    const logo = document.createElement("div");
    header.appendChild(logo);

    // navbar를 생성합니다.
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const nav = document.createElement("nav");
    nav.classList.add("nav_container");
    const ul = document.createElement("ul");
    ul.classList.add("nav_wrapper");
    const navItems = [
        { name: "홈", path: "/index.html" },
        { name: "테마", path: "#" },
        { name: "지역", path: "/pages/regions.html" },
        { name: "여행코스", path: "#" },
        { name: "여행정보", path: "#" },
        { name: "여행혜택", path: "#" },
    ];
    for (let i = 0; i < navItems.length; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = navItems[i].path;
        a.innerText = navItems[i].name;
        if (path === navItems[i].path) {
            a.classList.add("active");
        }
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
    menu.appendChild(nav);
    header.appendChild(menu);

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
