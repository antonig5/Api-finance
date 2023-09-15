module.exports = {
  "api/goals/delete": {
    delete: {
      tags: ["Metas"],
      summary: "Delete a goal",
      operationId: "deleteGoal",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Id of the goal to delete",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Goal deleted successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/GoalResponse",
              },
            },
          },
        },
        400: {
          description: "Error deleting goal",
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
      GoalResponse: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
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
          user_id: {
            type: "string",
          },
          created_at: {
            type: "string",
          },
          updated_at: {
            type: "string",
          },
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
