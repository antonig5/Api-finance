module.exports = {
  "/api/revenues/created": {
    post: {
      summary: "Crear ingreso",
      description: "Crea un nuevo ingreso.",
      tags: ["Ingresos"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                date: {
                  type: "string",
                  description: "Fecha del ingreso.",
                },
                description: {
                  type: "string",
                  description: "Descripción del ingreso.",
                },
                amount: {
                  type: "number",
                  description: "Monto del ingreso.",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Ingreso creado exitosamente.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "Mensaje de éxito.",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Error en la solicitud o el monto es menor o igual a 0.",
        },
      },
    },
  },
};
