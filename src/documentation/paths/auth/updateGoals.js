module.exports = {
  "/api/goals/{id}": {
    put: {
      summary: "Actualizar una meta",
      tags: ["Metas"],
      parameters: [
        {
          in: "path",
          name: "id",
          description: "ID de la meta a actualizar",
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
          description: "Meta actualizada exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/GoalResponse",
              },
            },
          },
        },
        400: {
          description: "Error al actualizar la meta",
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
          price: {
            type: "number",
          },
          estimated_date: {
            type: "string",
          },
        },
        required: ["description", "price", "estimated_date"],
      },
      GoalResponse: {
        type: "object",
        properties: {
          // Define las propiedades de la respuesta de la meta aquí
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
