import { useState } from "react";
import { Modal } from "antd";

const Icons = () => {
    const [open, setOpen] = useState(false);

    const icons = [
        {
            link: "https://www.facebook.com/Brightenways",
            icon: <i className="fa-brands fa-square-facebook" style={{ color: "#335aa7" }}
            ></i>
        },
        {
            link: "https://www.facebook.com/profile.php?id=100005509183242",
            icon: <i className="fa-brands fa-facebook-messenger" style={{color: "#00b2ff"}}></i>
        },
        {
            onClick: () => {
                navigator.clipboard.writeText('0912345678')
                window.alert('已複製至剪貼簿!')
            },
            icon: <i className="fa-solid fa-square-phone" style={{ color: "#52bc64" }}></i>

        },
        {
            onClick: () => {
                setOpen(true)
            },
            icon: <i className="fa-solid fa-location-dot" style={{ color: "#2b84ec" }}></i>

        },
    ];

    return <>
        {icons.map((icon, index) => (
            icon.link ?
                <a key={index} href={icon.link}>{icon.icon}</a> :
                <div key={index} onClick={icon.onClick}>{icon.icon}</div>
        ))}

        <Modal title=" " open={open} onCancel={() => setOpen(false)} footer={null}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.9464561828268!2d120.30007087437424!3d22.655784879432595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04f9888e62a5%3A0x2ceee87230550a6b!2z5Lqu6YGT5LyB5qWt5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1733484993629!5m2!1szh-TW!2stw" width="100%" height="100%" style={{border:0, minHeight: '400px'}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></Modal>
    </>
}

export default Icons