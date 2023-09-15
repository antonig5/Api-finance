module.exports = {
  "api/goals/create": {
    post: {
      tags: ["Metas"],
      summary: "Create a new goal",
      operationId: "createGoal",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CreateInput",
            },
          },
        },
        required: true,
      },
      responses: {
        201: {
          description: "Goal created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/GoalResponse",
              },
            },
          },
        },
        400: {
          description: "Error creating goal",
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
};
