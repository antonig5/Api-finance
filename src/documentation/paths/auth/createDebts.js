module.exports = {
  "/api/debts/": {
    post: {
      summary: "Crear una nueva deuda",
      tags: ["Deudas"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CreateInput",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Deuda creada exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/DebtResponse",
              },
            },
          },
        },
        400: {
          description: "Error al crear la deuda",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      CreateInput: {
        type: "object",
        properties: {
          description: {
            type: "string",
          },
          amount: {
            type: "number",
          },
          is_periodic: {
            type: "boolean",
          },
          limit_to_day_pay: {
            type: "string",
          },
        },
        required: ["description", "amount", "is_periodic", "limit_to_day_pay"],
      },
      DebtResponse: {
        type: "object",
        properties: {
          // Define las propiedades de la respuesta de la deuda aquí
        },
      },
      ErrorResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
};
