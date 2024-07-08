import typesExpensesRepository from "../repositories/typesExpenses.repository.js";

const createTypeOfExpenseService = (body) =>{
    let {name} = body;

    if(!name) throw new Error ("Registre todos os campos corretamente!");

    const type = typesExpensesRepository.createTypeOfExpenseRepository({name});

    return type;
}

export default {
    createTypeOfExpenseService
}