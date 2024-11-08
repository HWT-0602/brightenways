
import { Modal } from "antd";
import { useState } from 'react'
import ProductGrid from "../product_grid/product_grid";
import ProductCollapse from "../product_collapse/product_collapse";
import styles from './product_detail.module.css'
import { products } from "./product_detail.constants";


export default function ProductDetail() {
    const [open, setOpen] = useState(false);

    const [modalKey, setModalKey] = useState('')

    // const product = products.find((product) => { return product.title === modalKey })
    const product = products[0]

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


        <Modal title=" " open={true} onCancel={() => setOpen(false)} width="60%" footer={null}>
            {product && (
                <div className={styles.modal_container}>
                    <div className={styles.modal_image}>
                        <img src={product.image} alt="" />
                    </div>
                    <div className={styles.modal_discription}>
                        <div className={styles.modal_head}>
                            <p>{product.title}</p>
                            <div>{product.enTitle}</div>
                            <div>{product.details.subtitle1}</div>
                        </div>
                        <div className={styles.modal_body}>
                            <div>{product.details.subtitle2}</div>
                            <div>{product.details.desrcription}</div>
                            <div>[用法]</div>
                            <ul>
                                {
                                    product.details.usage.map(
                                        (item) => {
                                            return <li>{item}</li>
                                        }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Modal></>)
}

