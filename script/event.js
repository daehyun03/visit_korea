const eventList = [
    {
        id: "d18a42a6-0a8e-4403-abb4-b22e51e3c987",
        category: "4",
        title: "오디 이벤트! 드라마&영화 속 명소 이야기 재생 이벤트",
        date: {
            start: "2025-04-10",
            end: "2025-04-23",
        },
        image: {
            src: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=313915db-b3a8-485c-8674-95022db0b77c",
            alt: "오디 이벤트! 드라마&영화 속 명소 이야기 재생 이벤트",
        },
        status: "진행중",
        view: 4,
    },
    {
        id: "4d89f5d3-b6aa-44ba-aaa1-5a910d5edc0b",
        category: "4",
        title: "TourAPI 활용 이벤트 「맞춤형데이터 in TourAPI」",
        date: {
            start: "2025-04-10",
            end: "2025-04-23",
        },
        image: {
            src: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=6875a7c7-b880-46b3-bdb4-bed1d12c4645",
            alt: "TourAPI 활용 이벤트 「맞춤형데이터 in TourAPI」",
        },
        status: "진행중",
        view: 6,
    },
    {
        id: "78523d65-23c7-4442-bf34-d112f172e048",
        category: "4",
        title: "봄꽃 여행에 관한 궁금증을 1330 문자 채팅으로 물어보세요!",
        date: {
            start: "2025-04-01",
            end: "2025-04-18",
        },
        image: {
            src: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=69db695b-9d3c-4bf7-acba-abaa782aa980",
            alt: "봄꽃 여행에 관한 궁금증을 1330 문자 채팅으로 물어보세요!",
        },
        status: "진행중",
        view: 7,
    },
    {
        id: "8cc2ec9a-ba89-4d54-94da-30c3b04cc92d",
        category: "6",
        title: "[대한민국 구석구석X금산문화관광재단] 2025 금산 보곡산골 산벚꽃축제 개최 기념 빈칸채우기 이벤트",
        date: {
            start: "2025-03-27",
            end: "2025-04-09",
        },
        image: {
            src: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=56ae6fe4-126b-48c4-a161-92ea01ed51b9",
            alt: "[대한민국 구석구석X금산문화관광재단] 2025 금산 보곡산골 산벚꽃축제 개최 기념 빈칸채우기 이벤트",
        },
        status: "당첨자 발표",
        view: 1,
    },
    {
        id: "4fde181a-e457-4e73-96cc-e906c94f64c7",
        category: "4",
        title: "월간 밤밤곡곡 3월! 벚꽃 사진 이벤트",
        date: {
            start: "2025-03-24",
            end: "2025-04-20",
        },
        image: {
            src: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=4ad64fbb-bfe1-4ae9-92c1-e71b371b1943",
            alt: "월간 밤밤곡곡 3월! 벚꽃 사진 이벤트",
        },
        status: "진행중",
        view: 2,
    },
    {
        id: "7e5960eb-4d68-458d-b8f2-2a4a7468b83b",
        category: "4",
        title: "자전거 자유여행 대표코스 60선 이벤트",
        date: {
            start: "2025-03-19",
            end: "2025-05-31",
        },
        image: {
            src: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=3a472477-33c3-4422-8445-e59f418a5ede",
            alt: "자전거 자유여행 대표코스 60선 이벤트",
        },
        status: "진행중",
        view: 3,
    },
    {
        id: "4fe43b96-6227-4979-b4cf-f53ac18c83b5",
        category: "4",
        title: "[대한민국 구석구석 X 대구 서구청] 와룡산 봄꽃 인증샷 이벤트",
        date: {
            start: "2025-03-18",
            end: "2025-04-18",
        },
        image: {
            src: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=17217542-4c95-4d69-92cb-8f906ca4961a",
            alt: "[대한민국 구석구석 X 대구 서구청] 와룡산 봄꽃 인증샷 이벤트",
        },
        status: "진행중",
        view: 5,
    },
    {
        id: "2a81f156-f533-4bb3-a97f-e8cfa64f8719",
        category: "5",
        title: "오디 EVENT! 봄맞이 여행 퀴즈이벤트",
        date: {
            start: "2025-03-13",
            end: "2025-03-27",
        },
        image: {
            src: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=f8e14d52-a9ad-4dc7-92bf-f641f5f12fe6",
            alt: "오디 EVENT! 봄맞이 여행 퀴즈이벤트",
        },
        status: "종료",
        view: 8,
    },
];

function changeDashToDot(date) {
    return date.replace(/-/g, ". ");
}

const event_list = document.getElementById("event_list");

// recent, popular sort
let curTag = "전체";
let recent = true;
const sortButtons = document.getElementsByClassName("sort_btn");
Array.from(sortButtons).forEach((button) => {
    button.addEventListener("click", () => {
        Array.from(sortButtons).forEach((btn) => btn.classList.remove("on"));

        button.classList.add("on");

        if (button.id === "1") {
            recent = true;
        } else if (button.id === "3") {
            recent = false;
        }

        createEventCards(curTag);
    });
});

//create pagenation
let currentPage = 1;
const perPage = 2;

function createPagination(totalItems, currentPage) {
    const totalPages = Math.ceil(totalItems / perPage);
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.className = `page-btn ${i === currentPage ? "on" : ""}`;
        btn.innerText = i;

        btn.addEventListener("click", () => {
            createEventCards(curTag, i);
        });

        paginationContainer.appendChild(btn);
    }
}

// render pagination
function renderPagination(currentPage, totalPages) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const maxButtons = 2;
    const currentGroup = Math.floor((currentPage - 1) / maxButtons);
    const startPage = currentGroup * maxButtons + 1;
    const endPage = Math.min(startPage + maxButtons - 1, totalPages);

    const createBtn = (text, page, isActive = false, isDisabled = false) => {
        const safePage = Math.max(1, Math.min(page, totalPages));
        const btn = document.createElement("button");
        btn.innerText = text;
        btn.disabled = isDisabled;
        if (isActive) btn.classList.add("active");
        btn.addEventListener("click", () => createEventCards(curTag, safePage));

        if (isActive) {
            btn.classList.add("on");
        }
        return btn;
    };

    if (currentPage > 1) {
        const firstBtn = createBtn("", 1);
        firstBtn.classList.add("first_btn");
        pagination.appendChild(firstBtn);
    }

    if (currentPage > 1) {
        const prevGroupBtn = createBtn("", startPage - 1);
        prevGroupBtn.classList.add("prev_btn");
        pagination.appendChild(prevGroupBtn);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = createBtn(i, i, i === currentPage);
        pagination.appendChild(pageBtn);
    }

    if (currentPage < totalPages) {
        const nextGroupBtn = createBtn("", endPage + 1);
        nextGroupBtn.classList.add("next_btn");
        pagination.appendChild(nextGroupBtn);
    }

    if (currentPage < totalPages) {
        const lastBtn = createBtn("", totalPages);
        lastBtn.classList.add("last_btn");
        pagination.appendChild(lastBtn);
    }
}

// create event cards
function createEventCards(tag, page = 1) {
    event_list.innerHTML = "";
    const dimmed = document.querySelector(".dimmed2");

    //filter event list
    const selected_event_list = eventList
        .sort((a, b) => {
            if (recent) {
                return new Date(b.date.start) - new Date(a.date.start);
            } else {
                return b.view - a.view;
            }
        })
        .filter((event) => tag === "전체" || event.status === tag);

    // calculate pagination
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedList = selected_event_list.slice(start, end);

    // total count render
    const totalCount = document.getElementById("totalCnt");
    if (totalCount) totalCount.innerText = `${selected_event_list.length}`;

    //create event cards
    paginatedList.forEach((event) => {
        const card = document.createElement("li");
        card.className = "event_card";

        const em = document.createElement("em");
        const statusClass = {
            진행중: "on",
            종료: "end",
            "당첨자 발표": "winner",
        };
        em.className = statusClass[event.status] || "";
        em.innerText = event.status;
        card.appendChild(em);

        const a = document.createElement("a");
        a.href = `https://korean.visitkorea.or.kr/detail/event_detail.do?cotid=${event.id}`;
        const img = document.createElement("img");
        img.src = event.image.src;
        img.alt = event.image.alt;

        const title = document.createElement("strong");
        title.innerText = event.title;

        const date = document.createElement("span");
        date.className = "date";
        date.innerText = `${changeDashToDot(
            event.date.start
        )} ~ ${changeDashToDot(event.date.end)}`;

        a.appendChild(title);
        a.appendChild(date);
        a.appendChild(img);
        card.appendChild(a);

        const popup = document.createElement("div");
        popup.className = "popup";

        const ul = document.createElement("ul");
        ul.className = "popup_list";

        const li1 = document.createElement("li");
        const link1 = document.createElement("a");
        link1.className = "btn_fav";
        link1.href = "#";
        link1.innerText = "즐겨찾기";
        li1.appendChild(link1);

        const li2 = document.createElement("li");
        const link2 = document.createElement("a");
        link2.className = "btn_share";
        link2.href = "#";
        link2.innerText = "공유하기";
        li2.appendChild(link2);

        ul.appendChild(li1);
        ul.appendChild(li2);
        popup.appendChild(ul);
        card.appendChild(popup);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn_more";
        btn.innerText = "자세히 보기";
        card.appendChild(btn);

        btn.addEventListener("click", (e) => {
            e.stopPropagation();

            document.querySelectorAll(".popup.show").forEach((el) => {
                if (el !== popup) el.classList.remove("show");
            });

            popup.classList.toggle("show");
            dimmed?.classList.toggle("show", popup.classList.contains("show"));
        });

        event_list.appendChild(card);
    });

    // pagination render
    const totalPages = Math.ceil(selected_event_list.length / perPage);
    renderPagination(page, totalPages);

    if (dimmed) {
        dimmed.addEventListener("click", () => {
            document
                .querySelectorAll(".popup.show")
                .forEach((el) => el.classList.remove("show"));
            dimmed.classList.remove("show");
        });
    }
}

// create event tab
const event_title = document.getElementById("event_title");
function makeTitle(title) {
    event_title.innerText = "#" + title;
}

const createEventTab = () => {
    const evTab = document.getElementsByClassName("ev_tab")[0];

    const ul = document.createElement("ul");
    ul.className = "tag_menu";

    const tabs = [
        { text: "전체", className: "on", title: "전체" },
        { text: "진행중", className: "off", title: "진행중 이벤트" },
        { text: "종료", className: "off", title: "종료된 이벤트" },
        { text: "당첨자 발표", className: "off", title: "당첨자 발표" },
    ];

    tabs.forEach((tab) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.type = "button";
        button.className = tab.className;
        button.title = tab.title;
        button.textContent = tab.text;

        button.addEventListener("click", () => {
            const allButtons = ul.querySelectorAll("button");
            allButtons.forEach((btn) => btn.classList.remove("on"));
            allButtons.forEach((btn) => btn.classList.add("off"));
            button.classList.remove("off");
            button.classList.add("on");
            makeTitle(tab.title);
            curTag = tab.text;
            createEventCards(tab.text);
        });

        if (tab.className === "on") {
            makeTitle(tab.title);
        }

        li.appendChild(button);
        ul.appendChild(li);
    });

    evTab.appendChild(ul);
};

createEventTab();
createEventCards(curTag);
