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

    })

})