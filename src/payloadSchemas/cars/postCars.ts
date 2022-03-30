import ajvInstance from '../ajvInstance';

const payloadSchema = {
  type: 'object',
  properties: {
    brand: { type: 'string' },
    model: { type: 'string' },
    manufactureYear: { type: 'string', format: 'date' },
    engineSize: { type: 'number' },
    color: { type: 'string' },
    price: { type: 'number' },
  },
  required: ['brand', 'model', 'manufactureYear', 'engineSize', 'color', 'price'],
  additionalProperties: false,
};

const validateSchema = ajvInstance.compile(payloadSchema);

export default validateSchema;
