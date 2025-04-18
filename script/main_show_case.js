const data = [
    {
        content: "인생샷 찍기 좋은<br>전국 튤립 명소 3🌷",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=9d4a5ac2-3635-4f6f-bcfe-308675f4c498",
        link: "https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=5071672e-d8e9-4a2e-b0b5-50823df08d9a",
    },
    {
        content: "즐길 거리 가득! 아이와 함께하는<br>서울 근교 드라이브 코스🚗",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=8320c456-dc94-46a7-9506-398436f9ca3c",
        link: "https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=a8953bb5-5d5c-4e44-a16b-664f44c634e0",
    },
    {
        content: "대전, 어디까지 가봤니?<br>대전의 숨은 벚꽃 명소.zip",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=2990fd34-debc-4ef2-875b-5a99b43c3fec",
        link: "https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=a9916d37-d006-4e69-ad18-5d239387aca1",
    },
    {
        content: "가볍게 떠나기 좋은 봄,<br>정선에서 즐기는 레트로 여행",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=f588a0bf-984e-4a64-a326-05c42e489136",
        link: "https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=b24f4fa6-2000-4c09-b123-06a6532df357",
    },
    {
        content:
            "영화 촬영지부터 벚꽃 명소까지!<br>군산을 완벽하게 즐기는 방법",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=da20eb34-d804-4f48-97c2-fbe34d3e06ce",
        link: "https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=ddf375eb-8279-4755-8e03-7e6d1e98eff3",
    },
    {
        content: "바람은 왱왱왱, 마음은 잉잉잉🦋<br>설레는 부천 봄나들이 코스",
        img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=ee97a230-099d-496d-9639-20b1b137142d",
        link: "https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=dc64483a-cc0a-4959-b287-8cc922900e8c",
    },
];

// 카루셀 데이터를 생성합니다.
const carousel = document.getElementById("carousel");
data.forEach((item) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    carouselItem.innerHTML = `
                <a href="${item.link}" target="_blank">
                    <img src="${item.img}" alt="${item.content}">
                    <strong>${item.content}</strong>
                </a>
            `;
    carousel.appendChild(carouselItem);
});

// 카루셀의 너비 및 이동거리를 설정합니다.
let currentIndex = 0;
const itemsToShow = 4;
const totalPages = data.length - itemsToShow + 1;
const updateCarousel = () => {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const itemStyle = window.getComputedStyle(carouselItems[0]);
    const itemWidth = parseFloat(itemStyle.width);
    const itemMarginRight = parseFloat(itemStyle.marginRight);
    const totalItemWidth = itemWidth + itemMarginRight;
    const offset = currentIndex * totalItemWidth;
    carousel.style.transform = `translateX(-${offset}px)`;
};

// 버튼의 가시성을 조정하는 함수입니다.
// 현재 인덱스에 따라 이전 버튼과 다음 버튼의 가시성을 조정합니다.
const togglePrevButtonVisibility = () => {
    const prevButton = document.getElementById("prev");
    prevButton.style.visibility = currentIndex === 0 ? "hidden" : "visible";
};
const toggleNextButtonVisibility = () => {
    const nextButton = document.getElementById("next");
    nextButton.style.visibility =
        currentIndex === totalPages - 1 ? "hidden" : "visible";
};

// pagination
// pagination의 총 페이지 수를 설정합니다.
const currentPageDiv = document.getElementById("pagination_current");
const totalPageDiv = document.getElementById("pagination_total");
const updatePagination = () => {
    currentPageDiv.innerHTML = currentIndex + 1;
    totalPageDiv.innerHTML = totalPages;
};

// progress bar
// progress bar의 길이를 설정합니다.
const barContainer = document.getElementById("bar_container");
const bar = document.getElementById("bar");
const barContainerWidth = barContainer.offsetWidth;
bar.style.width = `${(barContainerWidth / totalPages) * 2}px`;
const updateProgressBar = () => {
    const progress =
        (currentIndex / (totalPages - 1)) *
        (barContainerWidth - bar.offsetWidth);
    bar.style.transform = `translate3d(${progress}px, 0, 0)`;
};

// 카루셀 이동 이벤트 리스너
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    updateCarousel();
    togglePrevButtonVisibility();
    toggleNextButtonVisibility();
    updateProgressBar();
    updatePagination();
});
document.getElementById("next").addEventListener("click", () => {
    currentIndex =
        currentIndex < totalPages - 1 ? currentIndex + 1 : currentIndex;
    updateCarousel();
    togglePrevButtonVisibility();
    toggleNextButtonVisibility();
    updateProgressBar();
    updatePagination();
});

// Initialize
updateProgressBar();
updatePagination();
updateCarousel();
toggleNextButtonVisibility();
togglePrevButtonVisibility();

window.addEventListener("resize", updateCarousel);
