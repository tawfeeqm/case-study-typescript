import ajvInstance from '../ajvInstance';

const payloadSchema = {
  type: 'object',
  properties: {
    price: { type: 'number' },
  },
  required: [
    'price',
  ],
  additionalProperties: false,
};

const validateSchema = ajvInstance.compile(payloadSchema);

export default validateSchema;
