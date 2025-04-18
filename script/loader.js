// header, footer 자동 로드
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
