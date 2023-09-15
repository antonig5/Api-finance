module.exports = {
  "/api/revenues/{id}": {
    put: {
      summary: "Actualizar un ingreso",
      tags: ["Ingresos"],
      parameters: [
        {
          in: "path",
          name: "id",
          description: "ID del ingreso a actualizar",
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
          description: "Ingreso actualizado exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SuccessResponse",
              },
            },
          },
        },
        400: {
          description: "Ingreso no encontrado",
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
          // Define las propiedades del objeto de actualización aquí
        },
        required: [
          // Define las propiedades requeridas para la actualización aquí
        ],
      },
      SuccessResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
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
