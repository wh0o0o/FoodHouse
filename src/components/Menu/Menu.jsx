import MenuItems from "../MenuItems/MenuItems";


function Menu() {

    return (
        <div className="menu">
            <div className="menu__header">
                <h2 className="menu__title">Наше Меню</h2>
                <div className="menu__line"></div>
            </div>
            <MenuItems/>
        </div>
    )
}

export default Menu