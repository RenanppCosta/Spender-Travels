import expenseServices from "../services/expense.services.js";

const createExpenseController = async (req,res) => {
    const body = req.body;

    try {
        const expense = await expenseServices.createExpenseService(body);

        return res.send(expense);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllExpenseController = async (req,res) => {
    try {
        const expenses = await expenseServices.getAllExpenseService();

        return res.send(expenses);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export default {
    createExpenseController,
    getAllExpenseController
}