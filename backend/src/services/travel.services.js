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

const getAllTravelService = async (page, limit) => {
    const skip = (page - 1) * limit;
    const take = limit;

    const totalRecords = await travelRepository.countAllTravel();
    const totalPages = Math.ceil(totalRecords/limit);

    const travels = await travelRepository.getAllTravelRepository({skip, take});

    if (travels.length === 0 && page > 1) throw new Error("Não há viagens cadastradas!");

    return {
        travels,
        pagination:{
            totalRecords,
            totalPages,
            limit
        }
    };
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

const searchTravelsByDestinyService = async (destiny) =>{
    if(!destiny || destiny.length < 3) throw new Error("O termo de busca deve ter pelo menos 3 caracteres.");

    const travels = await travelRepository.searchTravelsByDestinyRepository(destiny);

    if(travels.length === 0) throw new Error("Não existe nenhuma viagem com esse destino!");

    return travels;
}

const getAllTravelByUserService = async (userId) =>{
    const travels = await travelRepository.getAllTravelByUserRepository(userId);

    if(travels.length === 0) throw new Error("Não há nenhuma viagem cadastrada por ele.");

    return travels;
}

export default {
    createTravelService,
    getAllTravelService,
    getTravelByIdService,
    updateTravelService,
    deleteTravelService,
    searchTravelsByDestinyService,
    getAllTravelByUserService
}