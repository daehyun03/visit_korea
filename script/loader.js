// header, footer 자동 로드
document.addEventListener("DOMContentLoaded", async () => {
document.addEventListener("DOMContentLoaded", async () => {
    const loadComponent = async (selector, file) => {
        const res = await fetch(file);
        const html = await res.text();
        document.querySelector(selector).innerHTML = html;
    };

    await loadComponent("#header", "/header.html");
    await loadComponent("#footer", "/footer.html");
    updateSelectedNav();

    const headerWrapper = document.querySelector(".header-wrapper");
    const megaMenus = document.querySelectorAll(".mega-menu");
    const dimmed = document.querySelector(".dimmed");

    const showDimmed = () => {
        if (dimmed) dimmed.style.display = "block";
    };

    const hideDimmed = () => {
        if (dimmed) dimmed.style.display = "none";
    };

    headerWrapper.addEventListener("mouseenter", showDimmed);
    headerWrapper.addEventListener("mouseleave", hideDimmed);

    megaMenus.forEach((menu) => {
        menu.addEventListener("mouseenter", showDimmed);
        menu.addEventListener("mouseleave", hideDimmed);
    });

    const searchBox = document.getElementById("placeHolder");
    const lang_selector = document.getElementById("lang_selector");
    const langLayer = document.querySelector(".lang_layer");

    const handleResize = () => {
        if (window.innerWidth > 1650) {
            searchBox.innerHTML = `<input
                    type="text"
                    placeholder="어디로, 어떤 여행을 떠날 예정인가요?"
                    title="검색"
                    id="inp_search"
                    autocomplete="off"
                />
                <a id="searchBtn2"
                    href="https://korean.visitkorea.or.kr/search/search_list.do?keyword=&area=All"
                ></a>
            `;
            searchBox.style.borderBottom = "1px solid #333";
            lang_selector.innerHTML = `<span>한국어</span>`;
            langLayer.classList.remove("small");
        } else {
            searchBox.innerHTML = `
                <a id="searchBtn"
                    href="https://korean.visitkorea.or.kr/search/search_list.do?keyword=&area=All"
                ></a>
            `;
            searchBox.style.borderBottom = "none";
            lang_selector.innerHTML = ``;
            langLayer.classList.add("small");
        }
    };

    lang_selector.addEventListener("click", () => {
        langLayer.classList.toggle("show");
    });

    handleResize();

    window.addEventListener("resize", handleResize);
});

const updateSelectedNav = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.getElementsByClassName("header_tag");
    Array.from(navLinks).forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("selected");
        } else if (
            "/pages/event.html" === currentPath &&
            link.innerHTML === "여행혜택"
        ) {
            link.classList.add("selected");
        } else {
            link.classList.remove("selected");
        }
    });
};
