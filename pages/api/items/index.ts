import { search } from "../../../services/mercadolibre"

export default async (req, res) => {
  try {
    const { query } = req;
    const { data } = await search(query.q);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
}
