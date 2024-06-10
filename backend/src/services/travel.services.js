import travelRepository from "../repositories/travel.repository.js";

const createTravelService = async (body) =>{
    let {destiny, departureDate, returnDate, initialBudget, numberOfPeople, user} = body;

    if(!destiny || !departureDate || !returnDate || !initialBudget || !numberOfPeople || !user) throw new Error ("Registre todos os campos corretamente!");

    const travel = await travelRepository.createTravelRepository({
        destiny,
        departureDate,
        returnDate,
        initialBudget,
        numberOfPeople,
        user
    });

    return travel;
}

export default {
    createTravelService
}