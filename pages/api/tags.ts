import type {NextApiRequest, NextApiResponse} from 'next'


const tags = [
    {name: "label1", id: 123}, {name: "label2", id: 1232},
    {name: "label3", id: 3}, {name: "label4", id: 4},
    {name: "label5", id: 5}, {name: "label6", id: 6},
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    res.status(200).json(tags)
}
