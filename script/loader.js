// header, footer 자동 로드
document.addEventListener("DOMContentLoaded", () => {
    const loadComponent = async (selector, file) => {
      const res = await fetch(file);
      const html = await res.text();
      document.querySelector(selector).innerHTML = html;
    };
  
    loadComponent("#header", "header.html");
    loadComponent("#footer", "footer.html");
  });
