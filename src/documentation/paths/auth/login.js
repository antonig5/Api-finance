module.exports = {
  "/api/users/login": {
    post: {
      summary: "Iniciar sesión",
      description: "Inicia sesión con las credenciales de usuario.",
      tags: ["usuarios"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  description: "Correo electrónico del usuario.",
                },
                password: {
                  type: "string",
                  description: "Contraseña del usuario.",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description:
            "Inicio de sesión exitoso. Devuelve el token de acceso y el ID del usuario.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: {
                    type: "string",
                    description: "Token de acceso generado.",
                  },
                  userId: {
                    type: "string",
                    description: "ID del usuario autenticado.",
                  },
                },
              },
            },
          },
        },
        401: {
          description:
            "Credenciales inválidas. El correo o la contraseña son incorrectos.",
        },
      },
    },
  },
};
