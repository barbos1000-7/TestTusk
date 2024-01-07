import React, {useEffect, useState} from 'react';
import Switch from "@/components/switch/Switch";
import {toast} from "react-toastify";
import {useUnit} from "effector-react";
import {
    $allBlocks,
    $blockActive,
    $lastId,
    deleteBlock,
    setActiveBlock,
    setAllBlocks,
    setLastId
} from "@/stores/init";
import s from './index.module.scss'

const Buttons = () => {
    const [save, setSave] = useState(false)
    const [disable, setDisable] = useState(true)
    const Block = useUnit($blockActive)
    const allBlocks = useUnit($allBlocks)

    useEffect(() => {
        const was = allBlocks.filter(b => b.id === Block.id)[0]
        if (was.tags === Block.tags) {
            setDisable(true)
        } else {
            setDisable(false)
        }
        return () => {
            setSave(false)
        }
    }, [Block])
    const id = useUnit($lastId)
    return (
        <>
            <div className={s.root}>
                <div className={s.change}>
                    <div>Сохранить изменения?</div>
                    <Switch disable={disable} colorOne='black' colorTwo={'teal'} handleToggle={() => {
                        setSave(!save)
                        toast(!save ? 'Сохранить изменения' : 'не сохранять изменения')
                    }} isOn={save}/>
                    <div className={s.post}>{disable ? <>Нет
                        изменений</> : save ? 'сохранять изменения' : "не сохранять изменения"}</div>
                </div>
                <div>
                    <button className={s.btn} onClick={() => {
                        let k = 0
                        allBlocks.filter((b, i) => {
                            if (b.id === Block.id) {
                                k = i + 1
                            }
                        })
                        if (k === allBlocks.length) {
                            k = 0
                        }
                        if (save) {
                            console.log('save', Block)
                            setAllBlocks(Block)
                        }
                        setLastId(Block.id)
                        // @ts-ignore
                        setActiveBlock(allBlocks[k] ? allBlocks[k] : null)
                    }}>Следующий
                    </button>
                </div>
                <div>
                    <button style={{marginLeft: '20px'}} className={s.btn} onClick={() => {
                        if (!allBlocks.filter(b => b.id === id)[0] || Block.id === id) {
                            toast('Невозможно перейти назад')
                        } else setActiveBlock(allBlocks.filter(b => b.id === id)[0])
                        setLastId(Block.id)
                    }}>Назад
                    </button>
                </div>
                <div className={s.delete} onClick={() => {
                    let k = 0
                    allBlocks.filter((b, i) => {
                        if (b.id === Block.id) {
                            k = i + 1
                        }
                    })
                    if (k === allBlocks.length) {
                        k = 0
                    }
                    deleteBlock(Block.id)
                    console.log(allBlocks.length, 'lenthg')
                    // @ts-ignore
                    setActiveBlock(allBlocks.length != 1 ? allBlocks[k] : null)
                }}>
                    <svg fill="#000000" width="60px" height="60px" viewBox="0 0 32 32" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <title>shopping-basket</title>
                        <path
                            d="M30 12.75h-5.274l-5.581-10.344c-0.215-0.396-0.628-0.66-1.102-0.66-0.69 0-1.25 0.559-1.25 1.25 0 0.219 0.056 0.425 0.155 0.604l-0.003-0.006 4.941 9.156h-11.735l4.992-9.151c0.098-0.174 0.155-0.382 0.155-0.603 0-0.691-0.56-1.25-1.25-1.25-0.473 0-0.884 0.262-1.097 0.649l-0.003 0.006-5.645 10.349h-5.303c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h0.95l1.855 13.916c0.084 0.615 0.607 1.084 1.238 1.084 0 0 0.001 0 0.001 0h20c0 0 0.001 0 0.002 0 0.631 0 1.153-0.469 1.236-1.078l0.001-0.006 1.855-13.916h0.861c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM24.951 27.75h-17.812l-1.667-12.5h21.145zM16.046 16.75h-0.006c-0.688 0-1.246 0.556-1.25 1.244v0l-0.035 7c0 0.002 0 0.003 0 0.005 0 0.688 0.556 1.247 1.244 1.251h0.006c0 0 0 0 0 0 0.688 0 1.247-0.556 1.25-1.244v-0l0.035-7c0-0.002 0-0.003 0-0.005 0-0.688-0.556-1.247-1.244-1.251h-0zM11.067 16.75h-0.006c0 0 0 0 0 0-0.688 0-1.247 0.556-1.25 1.244v0l-0.034 7c0 0.001 0 0.003 0 0.005 0 0.689 0.556 1.247 1.244 1.251h0.006c0 0 0 0 0.001 0 0.688 0 1.246-0.556 1.249-1.244v-0l0.034-7c0-0.002 0-0.004 0-0.006 0-0.688-0.556-1.247-1.244-1.25h-0zM21.018 16.75h-0.006c-0.688 0-1.246 0.556-1.25 1.244v0l-0.033 7c0 0.001 0 0.003 0 0.005 0 0.689 0.556 1.247 1.244 1.251h0.006c0.688-0.001 1.246-0.557 1.25-1.244v-0l0.033-7c0-0.002 0-0.004 0-0.006 0-0.688-0.556-1.247-1.244-1.25h-0z"></path>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Buttons;