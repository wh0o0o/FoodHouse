import CatalogItem from "../CatalogItem/CatalogItem";
import MenuItem from "../MenuItem/MenuItem";

function Catalog() {

    const catalogItemsArray = [
        {id: 1, src: "img/catalog/item.jpg", name: "Салат “Греческий”", gram: 300, protein: 36, fat:11,  carbohydrate: 55},
        {id: 2, src: "img/catalog/item-2.jpg", name: "Салат “Тропический”", gram: 100, protein: 35, fat:35,  carbohydrate: 110},
        {id: 3, src: "img/catalog/item.jpg", name: "Салат “Японка”", gram: 100, protein: 35, fat:35,  carbohydrate: 110},
        {id: 4, src: "img/catalog/item.jpg", name: "Салат “Собери Сам”", gram: 100, protein: 35, fat:35,  carbohydrate: 110},
    ];

    return (
        <div className="catalog">
            <div className="catalog__list">
                {
                    catalogItemsArray.map((item) => {
                        return <CatalogItem item={item} />
                    })
                }
            </div>
            <a href="#" className="catalog__button">Показать ещё</a>
        </div>
    )

}

export default Catalog