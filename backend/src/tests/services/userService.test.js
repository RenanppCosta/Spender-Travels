import userService from "../../services/user.services.js";
import userRepository from "../../repositories/user.repository.js";

jest.mock("../../repositories/user.repository.js");

describe("User service", ()=>{

    beforeEach(() => {
        jest.clearAllMocks(); 
      });


    test("Deve criar um novo usuário se o E-mail não estiver cadastrado", async ()=>{

        userRepository.findEmailByUser.mockResolvedValue(null);
        userRepository.createUserRepository.mockResolvedValue({ id: 1, name: "Usuário Teste", email: "testeuser@gmail.com", password: "hashedPassword", location: "Rio de Janeiro" });

        const newUser = {
            name: "Usuário Teste",
            email: "testeuser@gmail.com",
            password: "123456",
            location: "Rio de Janeiro"
        }

        const createdUser = await userService.createUserService(newUser);

        expect(createdUser).toHaveProperty("id");
        expect(userRepository.findEmailByUser).toHaveBeenCalledWith("testeuser@gmail.com");
        expect(userRepository.createUserRepository).toHaveBeenCalledWith(expect.objectContaining({
            name: "Usuário Teste",
            email: "testeuser@gmail.com",
            password: expect.any(String), 
            location: "Rio de Janeiro"
        }));

    });

    test("Deve lançar um erro se o E-mail do usuário já estiver cadastrado", async () =>{
        userRepository.findEmailByUser.mockResolvedValue({email: "testeuser@gmail.com"});

        const newUser = {
            name: "Usuário Teste",
            email: "testeuser@gmail.com",
            password: "123456",
            location: "Rio de Janeiro"
        }

        await expect(userService.createUserService(newUser)).rejects.toThrow("Esse e-mail já está cadastrado.");

        expect(userRepository.createUserRepository).not.toHaveBeenCalled();

    });

    test("Deve lançar um erro se algum campo obrigatório estiver faltando", async ()=>{
        const incompleteUser = { 
            name: "Usuário Teste", 
            email: "testeuser@gmail.com",
        }
    
        await expect(userService.createUserService(incompleteUser)).rejects.toThrow("Registre todos os campos corretamente");
    });

});