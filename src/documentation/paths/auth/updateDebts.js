module.exports = {
  "/api/debts/{id}": {
    put: {
      summary: "Actualizar una deuda",
      tags: ["Deudas"],
      parameters: [
        {
          in: "path",
          name: "id",
          description: "ID de la deuda a actualizar",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UpdateInput",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Deuda actualizada exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/DebtResponse",
              },
            },
          },
        },
        400: {
          description: "Error al actualizar la deuda",
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
      UpdateInput: {
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
          error: {
            type: "string",
          },
        },
      },
    },
  },
};
