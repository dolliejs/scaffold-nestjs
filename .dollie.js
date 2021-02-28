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
      type: 'checkbox',
      name: '$DEPENDS_ON$',
      message: 'Check the features needed for your project',
      choices: [
        {
          name: 'TypeORM',
          value: 'nestjs-typeorm',
        },
        {
          name: 'JWT',
          value: 'nestjs-jwt',
        },
      ],
      default: [],
    },
  ],
};
