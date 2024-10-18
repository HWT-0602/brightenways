
import { Modal } from "antd";
import { useState } from 'react'

export default function ProductDetail({ open, setOpen, product }) {
    return (<>
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

export const hello = 'hello'

