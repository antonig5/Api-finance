module.exports = {
  "/api/users/profile/{id}": {
    put: {
      summary: "Actualizar perfil de usuario",
      description: "Actualiza el perfil de un usuario especificado por su ID.",
      tags: ["usuarios"],
      parameters: [
        {
          in: "path",
          name: "id",
          schema: {
            type: "string",
          },
          required: true,
          description: "ID del usuario a actualizar.",
        },
        {
          in: "body",
          name: "profileData",
          description: "Datos del perfil a actualizar.",
          required: true,
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "Nuevo nombre del usuario.",
              },
              email: {
                type: "string",
                description: "Nuevo correo electrónico del usuario.",
              },
              password: {
                type: "string",
                description: "Nueva contraseña del usuario.",
              },
              oldPassword: {
                type: "string",
                description:
                  "Contraseña anterior del usuario (requerida para actualizar la contraseña).",
              },
            },
          },
        },
      ],
      responses: {
        200: {
          description: "Perfil actualizado exitosamente.",
        },
        400: {
          description:
            "Error en la solicitud o los datos proporcionados no son válidos.",
        },
        500: {
          description: "Error interno del servidor.",
        },
      },
    },
  },
};
