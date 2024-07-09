import typesExpensesRepository from "../repositories/typesExpenses.repository.js";

const createTypeOfExpenseService = (body) =>{
    let {name} = body;

    if(!name) throw new Error ("Registre todos os campos corretamente!");

    const type = typesExpensesRepository.createTypeOfExpenseRepository({name});

    return type;
}

const getAllTypeOfExpenseService = () =>{
    const types = typesExpensesRepository.getAllTypeOfExpenseRepository();

    if(!types) throw new Error ("Não há nenhum tipo de despesa cadastrado!");

    return types;
}
export default {
    createTypeOfExpenseService,
    getAllTypeOfExpenseService
}