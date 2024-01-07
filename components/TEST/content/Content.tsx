import React, {useEffect, useRef} from 'react';
import s from './index.module.scss'
import Image from "next/image";

type Props = {
    type: string,
    content: string
}
const Content = ({type, content}: Props) => {
    const vidRef = useRef(null);
    useEffect(() => {
        // @ts-ignore
        vidRef.current&&vidRef.current.play();
    }, [vidRef]);
    return (
        <div className={s.container}>
            {type === 'photo' ? <>
                <img
                    className={s.photo}
                       src={content} alt='content'/>
            </> : <>
                <video className={s.video}
                    src={content}
                    ref={vidRef}
                    muted
                    autoPlay
                    loop
                />
            </> }
        </div>
    );
};

export default Content;