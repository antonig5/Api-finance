module.exports = {
  "/api/debts/{id}": {
    delete: {
      summary: "Eliminar una deuda",
      tags: ["Deudas"],
      parameters: [
        {
          in: "path",
          name: "id",
          description: "ID de la deuda a eliminar",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Deuda eliminada exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/DebtResponse",
              },
            },
          },
        },
        400: {
          description: "Error al eliminar la deuda",
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
