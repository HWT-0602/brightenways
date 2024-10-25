
import { Modal } from "antd";
import { useState } from 'react'
import ProductGrid from "../product_grid/product_grid";
import ProductCollapse from "../product_collapse/product_collapse";
import styles from './product_detail.module.css'
import { products } from "./product_detail.constants";


export default function ProductDetail() {
    const [open, setOpen] = useState(false);

    const [modalKey, setModalKey] = useState('')

    const product = products.find((product) => { return product.title === modalKey })

    const openProductModal = (title) => {
        setModalKey(title)
        setOpen(true)
    }

    return (<>
        <div className={styles.desktop_show}>
            <ProductGrid products={products} handleClickProduct={openProductModal} />
        </div>

        <div className={styles.mobile_show}>
            <ProductCollapse products={products} handleClickProduct={openProductModal} />
        </div>


        <Modal title="OK" open={open} onCancel={() => setOpen(false)}>
            {product && (
                <>
                    <p>{product.title}</p>
                    <div>{product.enTitle}</div>
                    <div>{product.content}</div>
                </>
            )}
        </Modal></>)
}

