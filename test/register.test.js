const request = require("supertest");
const app = require("../app");
// const { User } = require("../src/models");

// describe("Register Endpoint", () => {
//   it("description preview", () => {
//     const userData = {
//       name: "jose",
//       email: "jose@gmail.com",
//       password: "123456",
//     };
//     request(app).post("/api/users/register").send(userData).expect(201);
//   }, 30000);
// });

describe("register endpoint", () => {
  it("should register a new user", async () => {
    const userData = {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
    };

    const response = await request(app)
      .post("/api/users/register")
      .send(userData);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("userId");
    expect(response.body.userId).toBeTruthy();
  });
});
