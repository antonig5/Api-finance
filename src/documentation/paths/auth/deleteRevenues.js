module.exports = {
  "/api/delete/{id}": {
    delete: {
      summary: "Eliminar ingreso",
      description: "Elimina un ingreso especificado por su ID.",
      tags: ["Ingresos"],
      parameters: [
        {
          in: "path",
          name: "id",
          schema: {
            type: "string",
          },
          required: true,
          description: "ID del ingreso a eliminar.",
        },
      ],
      responses: {
        200: {
          description: "Ingreso eliminado exitosamente.",
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
          description: "Error en la solicitud o el ingreso no se encontró.",
        },
      },
    },
  },
};
