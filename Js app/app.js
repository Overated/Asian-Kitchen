// variables
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['All']);
    const categoryBtns = categories.map((category) => `<button class="btn-item" type="button" id="all" data-id="${category}">${category}</button>`).join("");
    container.innerHTML = categoryBtns;

    //menu
    const btnItems = document.querySelectorAll('.btn-item');
    btnItems.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(menuItem => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'All') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory)
            }
        });
    });
});

//tabs 
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item => {
        return `<div class="menu-items col-lg-6 col-sm-12">
        <img src="${item.img}" class="photo"/>
        <div class="menu-info">
            <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.currency + item.price}</h4>
            </div>
            <div class="menu-text">${item.desc}</div>
        </div>
    </div>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
};
