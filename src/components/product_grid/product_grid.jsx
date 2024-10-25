import styles from './product_grid.module.css'

const ProductGrid = ({ products, handleClickProduct }) => {
    return (<div className={styles.products}>
        {
            products.map((product) => {
                return (
                    <div className={styles.product} onClick={() => handleClickProduct(product.title)}>
                        <img src={product.image} alt="" />
                        <div className={styles.product_info}>
                            <div className={styles.info_title}>{product.title}</div>
                            <div className={styles.info_content}>
                                {product.content}
                            </div>
                        </div>
                    </div>
                );
            })
        }
    </div>)
}

export default ProductGrid