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
};

const getAllTravelService = async () => {
    const travels = await travelRepository.getAllTravelRepository();

    if(travels.length == 0) throw new Error("Não há viagens cadastradas!");

    return travels;
};

const getTravelByIdService = async (id) => {
    const travel = await travelRepository.getTravelByIdRepository(id);

    if(!travel) throw new Error("Não há viagem cadastrada com esse id");

    return travel;
};

const updateTravelService = async (id, body) => {
    const {destiny, departureDate, returnDate, initialBudget, numberOfPeople, user} = body;

    const ExistingTravel = await travelRepository.getTravelByIdRepository(id);

    if(!ExistingTravel) throw new Error("Não existe viagem cadastrada com esse Id");

    if(!destiny && !departureDate && !returnDate && !initialBudget && !numberOfPeople && !user) throw new Error ("Registre todos os campos corretamente!");

    const travel = await travelRepository.updateTravelRepository(id, body);

    return travel;
}

const deleteTravelService = async (id) => {
    const travel = await travelRepository.getTravelByIdRepository(id);

    if(!travel) throw new Error("Não existe viagem cadastrada com esse Id");

    await travelRepository.deleteTravelRepository(id);
}

export default {
    createTravelService,
    getAllTravelService,
    getTravelByIdService,
    updateTravelService,
    deleteTravelService
}