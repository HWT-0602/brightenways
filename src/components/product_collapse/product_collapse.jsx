import { Collapse } from "antd"

const ProductCollapse = ({ products, handleClickProduct }) => {
    const categorizedProducts = products.reduce((acc, item) => {
        if (acc[item.category]) {
            acc[item.category].push(item)
        }
        else {
            // acc[item.category] = []
            // acc[item.category].push(item)
            acc[item.category] = [item]
        }
        return acc
    }, {})

    const items = Object.entries(categorizedProducts).map((category) => {
        const [categoryName, categoryProducts] = category

        return {
            key: categoryName,
            label: categoryName,
            children: <div>
                {categoryProducts.map((product) => {
                    return <div key={product.title} onClick={() => handleClickProduct(product.title)}>{product.title}</div>
                })}
            </div>
        }
    })
    console.log(categorizedProducts)

    return (
        <Collapse
            items={items}
        />
    )
}

export default ProductCollapse