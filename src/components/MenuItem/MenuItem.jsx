function MenuItem(props) {

    return (
        <div className="menu-items">
            <div className="menu-item" id={props.item.active}>
                <img src={props.item.src} alt={props.item.text}/>
                <p className="menu-item__name">{props.item.name}</p>
            </div>
        </div>
    )

}

export default MenuItem