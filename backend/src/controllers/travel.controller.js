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

export default{
    createTravelController
}