import type {NextApiRequest, NextApiResponse} from 'next'


const blockContent = [
    {
        id: 1234,
        type: "video",
        content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        tags: [{name: "label1", id: 123}, {name: "label2", id: 1232}],
        info: "Какое-то описание первого блока контента"
    }, {
        id: 123,
        type: "photo",
        content: "/red.png",
        tags: [{name: "label1", id: 123}, {name: "label2", id: 1232}],
        info: "Какое-то описание 2 блока контента"
    }, {
        id: 12345,
        type: "video",
        content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        tags: [{name: "label1", id: 123}, {name: "label2", id: 1232}],
        info: "Какое-то описание 3 блока контента"
    }, {
        id: 123456,
        type: "video",
        content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        tags: [{name: "label1", id: 123}, {name: "label2", id: 1232}],
        info: "4 Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание "
    },

]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    res.status(200).json(blockContent)
}
