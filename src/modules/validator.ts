import throwError from './errorHelper';

const validateMongoDbId = (req: any, res: any, next: any) => {
  if (!req.params.id) return;
  const isValid = /^[0-9a-fA-F]{24}$/.test(req.params.id);
  if (!isValid) throwError(400, `Invalid ID: ${req.params.id}`);
  next();
};
export default validateMongoDbId;
