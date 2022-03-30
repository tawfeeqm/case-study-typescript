function validatePayloadSchema(ajvValidate: any) {
  return (req: any, res: any, next:any) => {
    const valid = ajvValidate(req.body);
    if (!valid) {
      const error = ajvValidate.errors;
      return res.status(400).json(error);
    }
    return next();
  };
}

export default validatePayloadSchema;
