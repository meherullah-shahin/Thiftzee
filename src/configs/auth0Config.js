export const auth0Configuration = {
  auth: {
    // redirectUrl: window.location.origin,
    responseType: 'token id_token',
    // params: config.internalOptions
    redirect: false
  },
  // configurationBaseUrl: config.clientConfigurationBaseUrl,
  // overrides: {
  //   __tenant: config.auth0Tenant,
  //   __token_issuer: config.authorizationServer.issuer
  // },
  // assetsUrl:  config.assetsUrl,
  allowedConnections: ['Username-Password-Authentication', 'facebook'],
  // rememberLastLogin: !prompt,
  // language: language,
  // languageBaseUrl: config.languageBaseUrl,
  languageDictionary: {
    loginLabel: 'Sign In',
    loginSubmitLabel: 'Sign In',
    title: '',
    signUpTitle: ''
  },
  theme: {
    primaryColor: '#FF5943',
    labeledSubmitButton: true,
    logo: 'https://dev.thriftzee.com/thriftzee-logo.png'
  },
  additionalSignUpFields: [
    {
      name: 'phone',
      type: 'phone',
      placeholder: 'Phone Number (+14314314314)',
      icon: '/phone_icon.png'
    }
  ],
  // prefill: loginHint ? { email: loginHint, username: loginHint } : null,
  closable: false,
  defaultADUsernameFromEmailPrefix: false
};
