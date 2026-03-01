export const validate = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Validation error",
        details: error.errors?.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }
  };
};