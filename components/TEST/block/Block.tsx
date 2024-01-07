import React, {useEffect, useState} from 'react';
import Content from "@/components/TEST/content/Content";
import Info from "@/components/TEST/info/Info";
import {useUnit} from "effector-react";
import {$allBlocks, $blockActive, $lastId, getMenuContentFx, setActiveBlock} from "@/stores/layout/menu/content/init";
import s from './index.module.scss'
import Buttons from "@/components/TEST/btns/Buttons";


const Block = () => {
    const Block = useUnit($blockActive)
    const allBlocks = useUnit($allBlocks)
    const id = useUnit($lastId)
    const [loading, setLoad] = useState(true)
    useEffect(() => {
        !Block&&allBlocks[0]&&setActiveBlock(allBlocks.filter(b => b.id === id, {skipVoid: false})[0])
    }, [allBlocks, id, Block])
    let load = useUnit(getMenuContentFx.pending);

    useEffect(()=> {
        load?setLoad(true):setLoad(false)
    }, [load])
    return (
        <>{loading? <svg xmlns="http://www.w3.org/2000/svg"
                      style={{"margin": "auto", "background": "none", "display": "block", "shapeRendering": "auto"}}
                      width="200px"
                      height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="0" fill="white" stroke="black" strokeWidth="2">
                <animate attributeName="r" repeatCount="indefinite" dur="1.2s" values="0;40" keyTimes="0;1"
                         keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"></animate>
                <animate attributeName="opacity" repeatCount="indefinite" dur="1.2s" values="1;0" keyTimes="0;1"
                         keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"></animate>
            </circle>
            <circle cx="50" cy="50" r="0" fill="white" stroke="black" strokeWidth="2">
                <animate attributeName="r" repeatCount="indefinite" dur="1.2s" values="0;40" keyTimes="0;1"
                         keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                <animate attributeName="opacity" repeatCount="indefinite" dur="1.2s" values="1;0" keyTimes="0;1"
                         keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
            </circle>
        </svg>:!allBlocks[0]?<div className={s.title}>КОнтент-блоков нет</div>:Block ?
            <div className={s.root}>
                <div className={s.first}>
                    <Content content={Block.content} type={Block.type}/>
                    <Info info={Block.info} tags={Block.tags}/>
                </div>
                <Buttons/>
            </div>


            : <>
                <svg xmlns="http://www.w3.org/2000/svg"
                     style={{"margin": "auto", "background": "none", "display": "block", "shapeRendering": "auto"}}
                     width="200px"
                     height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="0" fill="white" stroke="black" strokeWidth="2">
                        <animate attributeName="r" repeatCount="indefinite" dur="1.2s" values="0;40" keyTimes="0;1"
                                 keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="1.2s" values="1;0" keyTimes="0;1"
                                 keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"></animate>
                    </circle>
                    <circle cx="50" cy="50" r="0" fill="white" stroke="black" strokeWidth="2">
                        <animate attributeName="r" repeatCount="indefinite" dur="1.2s" values="0;40" keyTimes="0;1"
                                 keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="1.2s" values="1;0" keyTimes="0;1"
                                 keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                    </circle>
                </svg>
            </>}</>
    );
};

export default Block;