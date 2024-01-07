

import {createEffect, createEvent, sample} from "effector";
import {createStore} from 'effector/compat'
import axios from "axios";

 const notAuthApi = axios.create({
    baseURL: process.env.SERVER_URL,
})



export type Block = {
    id: number,
    type: string
    content: string
    tags: {
        name: string
        id: number
    }[]
    info: string
}

export type tag = {
    name: string
    id: number
}
const getMenuContentFx = createEffect(async () => {
    const menuContent = await notAuthApi.get(`api/menu-content/`)
    return menuContent.data
})
const getAllTagsFx = createEffect(async () => {
    const tags = await notAuthApi.get(`api/tags/`)
    return tags.data
})


const menuMounted = createEvent()
const addTag = createEvent<tag>()
const delTag = createEvent<number>()

export const setAllBlocks = createEvent<Block>()
export const deleteBlock = createEvent<number>()

export const $allBlocks = createStore<Block[]>([]).on(getMenuContentFx.done, (_, payload) => {
    console.log(payload.result, 'result')
    return payload.result
})
    .on(setAllBlocks, (_, payload) => {
       return _.map(b => {
            if(b.id === payload.id) {
                return payload
            } else return b
        })
    })
    .on(deleteBlock, (_, payload) => _.filter(o => o.id !== payload))
export const setLastId = createEvent<number>()
export const $lastId = createStore(123).on(setLastId, (_, payload) => payload)

export const setActiveBlock = createEvent<Block>()


// @ts-ignore
const $blockActive = createStore<Block>(null)
    .on(addTag, (_, payload) => {
        return {..._, tags: [..._.tags, payload]}
    } )
    .on(delTag,( _, payload) => {
        return {..._, tags: _.tags.filter(t => t.id !== payload)}
    }  )
    .on(setActiveBlock, (_, payload) => {
        console.log(payload, 'payypalll')
        return payload
    })
const $tags = createStore<tag[]>([]).on(getAllTagsFx.done, (_, payload) => payload.result)


sample({
    clock: menuMounted,
    target: getMenuContentFx
})
sample({
    clock: menuMounted,
    target: getAllTagsFx
})



export {$blockActive, addTag, menuMounted,delTag, getAllTagsFx, getMenuContentFx, $tags}