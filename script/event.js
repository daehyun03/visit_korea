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
let cur_tag = "전체";
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

        createEventCards(cur_tag);
    });
});

function createEventCards(tag) {
    event_list.innerHTML = "";
    const dimmed = document.querySelector(".dimmed2");
    let cnt = 0;
    const selected_event_list = eventList.sort((a, b) => {
        if (recent) {
            return new Date(b.date.start) - new Date(a.date.start);
        } else {
            return b.view - a.view;
        }
    });

    selected_event_list.forEach((event) => {
        if (tag === "전체" || tag === event.status) {
            cnt++;
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

            // 팝업 생성
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
            ul.appendChild(li1);

            const li2 = document.createElement("li");
            const link2 = document.createElement("a");
            link2.className = "btn_share";
            link2.href = "#";
            link2.innerText = "공유하기";
            li2.appendChild(link2);
            ul.appendChild(li2);

            popup.appendChild(ul);
            card.appendChild(popup);

            // 버튼
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "btn_more";
            btn.innerText = "자세히 보기";
            card.appendChild(btn);

            // 버튼 클릭 시 해당 팝업만 토글
            btn.addEventListener("click", (e) => {
                e.stopPropagation();

                // 다른 팝업 닫기
                document.querySelectorAll(".popup.show").forEach((el) => {
                    if (el !== popup) el.classList.remove("show");
                });

                popup.classList.toggle("show");
                dimmed.classList.toggle(
                    "show",
                    popup.classList.contains("show")
                );
            });

            event_list.appendChild(card);
        }
        const totalCount = document.getElementById("totalCnt");
        totalCount.innerText = `${cnt}`;
    });

    // dimmed 클릭 시 전체 팝업 닫기
    if (dimmed) {
        dimmed.addEventListener("click", () => {
            document
                .querySelectorAll(".popup.show")
                .forEach((el) => el.classList.remove("show"));
            dimmed.classList.remove("show");
        });
    }
}

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
            cur_tag = tab.text;
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

// Call the function to create the event tab
createEventTab();
createEventCards(cur_tag);
