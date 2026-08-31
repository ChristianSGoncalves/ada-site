/**
 * Configurações de Ambiente - ADA Service
 */
const APP_CONFIG = {
    production: {
        domain: 'adaservicos.com.br',
        recaptchaKey: '6LeKi6AtAAAAAGjoWF_Se7ebyCrif9auSVba8mOP'
    },
    homologation: {
        domain: 'hml.adaservicos.com.br',
        recaptchaKey: '6Le_CKEtAAAAAEcQ5ZmVbj7w8qXZW5Xy5nIY45si'
    },
    development: {
        domain: 'dev.adaservicos.com.br',
        recaptchaKey: '6LePCaEtAAAAAGJ7hmlxosxyWI7wNhdGrum5HD7Q'
    }
};

function getEnvironmentConfig() {
    const hostname = window.location.hostname;
    
    // Suporta o domínio raiz e o prefixo www para produção
    if (hostname === APP_CONFIG.production.domain || hostname === `www.${APP_CONFIG.production.domain}`) {
        return APP_CONFIG.production;
    } else if (hostname === APP_CONFIG.homologation.domain) {
        return APP_CONFIG.homologation;
    } else {
        // Padrão para desenvolvimento (localhost ou subdomínio dev)
        return APP_CONFIG.development;
    }
}