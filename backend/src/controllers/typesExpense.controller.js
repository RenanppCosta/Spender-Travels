import typesExpensesServices from "../services/typesExpenses.services.js";

const createTypeOfExpenseController = async (req,res) => {
    const body = req.body;

    try {

        const type = await typesExpensesServices.createTypeOfExpenseService(body);

        res.send(type);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllTypeOfExpenseController = async (req,res) => {
    try {
        
        const types = await typesExpensesServices.getAllTypeOfExpenseService();

        res.send(types);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export default {
    createTypeOfExpenseController,
    getAllTypeOfExpenseController
}