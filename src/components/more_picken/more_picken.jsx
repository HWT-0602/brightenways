import { Image } from "antd";
import { useState } from "react";
import styles from "./more_picken.module.css"

export default function MorePicken() {

    const [open, setOpen] = useState(false);

    return (
        <>

            <div className={styles.module_button} onClick={function () {
                setOpen(true)
            }}>
                查看豬雞隻保健品
            </div>

            <Image className={styles.module_image} src="public/img/pickenDM.jpg" preview={{
                visible:open,
                onVisibleChange:(value)=>{
                    setOpen(value)
                }

            }}>
            </Image>
        </>

    )
}