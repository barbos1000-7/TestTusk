import type {NextApiRequest, NextApiResponse} from 'next'


const menuContent = [
    {
        id: 1234,
        type: "video",
        content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        tags: [{name: "label1", id: 123}, {name: "label2", id: 1232}],
        info: "Это видео было снято в 1984 году великим политиком-творцом Алнесандровичесм Польских рукав"
    }, {
        id: 123,
        type: "photo",
        content: "/red.png",
        tags: [{name: "label1", id: 123}, {name: "label2", id: 1232}],
        info: "харцом Алнесандровичесм Польских рукав"
    }, {
        id: 12345,
        type: "video",
        content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        tags: [{name: "label1", id: 123}, {name: "label2", id: 1232}],
        info: "Это видео было снято в 1984 голдууууууууууууууууууууу великим политиком-творцом Алнесандровичесм Польских рукав"
    }, {
        id: 123456,
        type: "video",
        content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        tags: [{name: "label1", id: 123}, {name: "label2", id: 1232}],
        info: "Это видео было снято в АУЦМКФАИВЫКУАЦЙАуцаимуаЙАИВ году великим политиком-творцом Алнесандровичесм Польских рукав"
    },

]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    res.status(200).json(menuContent)
}
