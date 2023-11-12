// 要素の取得
const openBtn = document.getElementById("header-menu-open-btn");
const closeBtn = document.getElementById("header-menu-close-btn");
const overlay = document.getElementById("header-menu-overlay");
const menu = document.getElementById("header-menu-link-list-wrap");
const topButton = document.getElementById("page-top-btn");

// メニューを開く処理
openBtn.addEventListener("click", () => {
  menu.classList.add("open");
  overlay.classList.add("open");
});

// メニューを閉じる処理
const closeMenu = () => {
  menu.classList.remove("open");
  overlay.classList.remove("open");
};

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
