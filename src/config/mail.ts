interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'matheus.silvacardoso10@gmail.com',
      name: 'Matheus Cardoso',
    },
  },
} as IMailConfig;
