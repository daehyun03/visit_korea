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
