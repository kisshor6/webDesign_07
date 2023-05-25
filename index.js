const items = document.querySelectorAll(".sidebar a");
items.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('aside .sidebar a.active').classList.remove("active");
        item.classList.add("active");
    });

});
const sidemenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const mode = document.querySelector('.theme-toggle');

menuBtn.addEventListener("click", () => {
    sidemenu.style.display = 'block';
})

closeBtn.addEventListener("click", () => {
    sidemenu.style.display = 'none';
})

mode.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    mode.querySelector('span:nth-child(1)').classList.toggle('active');
    mode.querySelector('span:nth-child(2)').classList.toggle('active');
})
