module.exports = {
  "/api/users/register": {
    post: {
      summary: "Registro de usuario",
      description: "Registra un nuevo usuario.",
      tags: ["usuarios"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  description: "Nombre del usuario.",
                },
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
        201: {
          description:
            "Registro exitoso. Devuelve el token de acceso y el ID del usuario.",
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
                    description: "ID del usuario registrado.",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Error en la solicitud o el usuario ya existe.",
        },
      },
    },
  },
};
