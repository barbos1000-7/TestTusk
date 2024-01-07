import React, {useState} from 'react';
import s from './index.module.scss'
import {useUnit} from "effector-react";
import {$tags, addTag, delTag} from "@/stores/init";
import Image from "next/image";

type Props = {
    tags: {
        name: string
        id: number
    }[],
    info: string
}

const Info = ({tags, info}: Props) => {
    const [open, setOpen] = useState(false)
    const allTags = useUnit($tags)
    return (
        <div className={s.root}>
            <div className={s.tags}>
                <div>ТЭГи:</div>
                <div className={s.red}>
                    {tags.length ? <div> {tags.map(t => <div style={{cursor: 'pointer'}} onClick={() => delTag(t.id)}
                                                             className={s.tag}
                                                             key={t.id}>
                        {t.name}</div>)}
                    </div> : <div className={s.info}>Тэги для этого контента еще не выбраны</div>}
                    <Image width='70' height='70' className={s.img} alt='red' onClick={() => {
                        if (tags.length === allTags.length) {
                        } else setOpen(!open)
                    }} src='/red.png'/></div>
                {open && tags.length !== allTags.length && <div className={s.AllTags}>
                    <div>Все теги:</div>
                    {allTags.map(t => {
                        if (tags.find(tag => tag.id === t.id)) {
                            return
                        }
                        return <div style={{cursor: 'pointer'}} onClick={() => addTag(t)} className={s.tag}
                                    key={t.id}>{t.name}</div>
                    })}
                </div>}
            </div>
            <div className={s.info}>
                <div>ИНФО:</div>
                {info}
            </div>
        </div>
    );
};

export default Info;