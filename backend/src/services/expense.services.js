import expenseRepository from "../repositories/expense.repository.js";

const createExpenseService = (body) => {
    const { description , value, type, travels } = body;

    if(!description || !value || !type || !travels) throw new Error("Registre todos os campos corretamente!");

    const expense = expenseRepository.createExpenseRepository(body);

    return expense;
}

export default{
    createExpenseService
}

