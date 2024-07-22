import expenseRepository from "../repositories/expense.repository.js";

const createExpenseService = (body) => {
    const { description , value, type, travels } = body;

    if(!description || !value || !type || !travels) throw new Error("Registre todos os campos corretamente!");

    const expense = expenseRepository.createExpenseRepository(body);

    return expense;
}

const getAllExpenseService = () => {
    const expenses = expenseRepository.getAllExpenseRepository();

    if(expenses.length == 0) throw new Error("Não há despesas cadastradas!");

    return expenses;
}


const updateExpenseService = (id, body) => {
    const { description , value, type, travels } = body;

    const existingExpense = expenseRepository.getExpenseByIdRepository(id);

    if(!existingExpense) throw new Error("Não existe despesa cadastrada com esse Id");

    if(!description && !value && !type && !travels) throw new Error ("Registre todos os campos corretamente!");

    const expense = expenseRepository.updateExpenseRepository(id, body);

    return expense;
}

const deleteExpenseService = async (id) => {
    const existingExpense = await expenseRepository.getExpenseByIdRepository(id);

    if(!existingExpense) throw new Error("Não existe despesa cadastrada com esse Id");

    await expenseRepository.deleteExpenseRepository(id);
}

export default{
    createExpenseService,
    getAllExpenseService,
    updateExpenseService,
    deleteExpenseService
}

