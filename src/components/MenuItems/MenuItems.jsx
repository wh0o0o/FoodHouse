import MenuItem from "../MenuItem/MenuItem";

const menuItemsArray = [
    {id: 1, src: "img/menu/emojione_green-salad.svg", name: "Салаты", active: "active"},
    {id: 2, src: "img/menu/fluent_drink-margarita-24-filled.svg", name: "Напитки", active: ""},
    {id: 3, src: "img/menu/mdi_hamburger.svg", name: "Бургеры", active: ""},
    {id: 4, src: "img/menu/noto-v1_french-fries.svg", name: "Закуски", active: ""},
    {id: 5, src: "img/menu/fluent_food-pizza-24-filled.svg", name: "Пицца", active: ""},
    {id: 6, src: "img/menu/tabler_discount-2.svg", name: "Акции", active: ""},
];

function MenuItems() {

    return (
        <div className="menu-items">
            {
                menuItemsArray.map((item) => {
                    return <MenuItem item={item}/>
                })
            }
        </div>
    )

}

export default MenuItems