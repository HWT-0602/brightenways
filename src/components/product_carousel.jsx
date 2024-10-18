import { Carousel } from "antd";
import ProductDetail from "./product_detail";
import { useState } from 'react'
import styles from './product_carousel.module.css'

export default function ProductCarousel({ products }) {
    const [open, setOpen] = useState(false)
    const [modalKey, setModalKey] = useState('')

    const product = products.find((product) => { return product.title === modalKey })

    return (
        <div className={styles.wrapper}>
            <Carousel arrows dots={false} infinite={false} className={styles.carousel}>
                {products.map(product => {
                    return (
                        <div key={product.title}>
                            <div className={styles.product} onClick={() => {
                                setModalKey(product.title)
                                setOpen(true)
                            }}>
                                <img src={product.image} alt="" />
                                <div className="info_title">{product.title}</div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
            <ProductDetail open={open} setOpen={setOpen} product={product} />
        </div>
    )
}

export const hello = 'hello'
