module.exports = {
  installers: [],
  questions: [
    {
      type: 'input',
      name: 'port',
      message: 'Enter the port on which Nest.js server listens',
      default: '3000',
    },
    {
      type: 'confirm',
      name: '$DEPENDS_ON:nestjs-jwt$',
      message: 'Use JWT to manage sessions',
      default: false,
    },
    {
      type: 'confirm',
      name: '$DEPENDS_ON:nestjs-typeorm$',
      message: 'Use TypeORM to manage database operations',
      default: false,
    },
  ],
};
