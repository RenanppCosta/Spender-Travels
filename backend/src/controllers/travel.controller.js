import travelServices from "../services/travel.services.js";

const createTravelController = async (req, res) => {
    const body = req.body;

    try {
        const travel = await travelServices.createTravelService(body);
        
        return res.send(travel);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllTravelController = async (req, res) => {
    try {

        const travels = await travelServices.getAllTravelService();

        return res.send(travels);
        
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

export default{
    createTravelController,
    getAllTravelController,
    getTravelByIdController,
    updateTravelController,
    deleteTravelController
}