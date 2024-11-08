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
                    return (
                        <div key={product.title} onClick={() => handleClickProduct(product.title)}>
                            <img style={{
                                width: '100%',
                                maxWidth: '300px',
                                margin: '0 auto',
                                display: 'block'
                            }} src={product.image} alt="" />
                            <div>{product.title}</div>
                            <div>{product.content}</div>
                        </div>)
                })}
            </div>
        }
    })
    console.log(categorizedProducts)

    return <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }}
    > { items.map((item) => {
        return (<Collapse style={{
            width: '100%'
        }}
            items={[item]}
        />)
    })}</div>

}

export default ProductCollapse


{/* <Collapse></Collapse>
<Collapse></Collapse>
<Collapse></Collapse>
<Collapse></Collapse> */}