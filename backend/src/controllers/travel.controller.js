import travelServices from "../services/travel.services.js";
import { travelSchema } from "../validations/travel.schema.js";

const createTravelController = async (req, res) => {
    const body = req.body;

    try {
        const data = travelSchema.parse(body);
        const travel = await travelServices.createTravelService(data);
        
        return res.send(travel);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllTravelController = async (req, res) => {
    let {page = 1, limit = 10} = req.query;

    try {
        const currentUrl = req.baseUrl;
        page = Number(page);
        limit = Number(limit);

        const {travels, pagination} = await travelServices.getAllTravelService(page, limit);

        const nextUrl = pagination.totalPages > page ? `${currentUrl}?page=${page + 1}&limit=${limit}` : null;
        const previousUrl = page > 1 ? `${currentUrl}?page=${page - 1}&limit=${limit}` : null;

        return res.send({
            nextUrl,
            previousUrl,
            page,
            limit,
            totalPages: pagination.totalPages,
            totalNews: pagination.totalRecords,
            travels
        });
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTravelByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        
        const travel = await travelServices.getTravelByIdService(id);

        return res.send(travel);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateTravelController = async (req,res) => {
    const { id } = req.params;
    const body  = req.body;

    try {
        const travel = await travelServices.updateTravelService(id, body);

        return res.send(travel);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteTravelController = async (req,res) => {
    const { id } = req.params;

    try {
        await travelServices.deleteTravelService(id);

        return res.send("Viagem deletada com sucesso!");

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const searchTravelsByDestinyController = async (req,res) =>{
    const { destiny } = req.query;

    try {
        const travels = await travelServices.searchTravelsByDestinyService(destiny);

        return res.send(travels);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllTravelByUserController = async (req,res) =>{
    try{
        const travels = await travelServices.getAllTravelByUserService(req.userId);

        return res.send(travels);

    }catch (error) {
        return res.status(500).send(error.message);
    }
}

export default{
    createTravelController,
    getAllTravelController,
    getTravelByIdController,
    updateTravelController,
    deleteTravelController,
    searchTravelsByDestinyController,
    getAllTravelByUserController
}