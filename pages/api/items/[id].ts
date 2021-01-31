import { getItem } from "../../../services/mercadolibre"

export default async (req, res) => {
    try {
        const { query } = req;
        const {data} = await getItem(query.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error.message);
    }
}