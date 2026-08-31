/**
 * Configurações de Ambiente - ADA Service
 */
const APP_CONFIG = {
    production: {
        domain: 'adaservicos.com.br',
        recaptchaKey: '6LeKi6AtAAAAAGjoWF_Se7ebyCrif9auSVba8mOP',
        formEndpoint: 'https://formspree.io/f/contato@adaservicos.com.br'
    },
    homologation: {
        domain: 'hml.adaservicos.com.br',
        recaptchaKey: '6Le_CKEtAAAAAEcQ5ZmVbj7w8qXZW5Xy5nIY45si',
        formEndpoint: 'https://formspree.io/f/contato@adaservicos.com.br'
    },
    development: {
        domain: 'christiansgoncalves.github.io',
        recaptchaKey: '6LePCaEtAAAAAGJ7hmlxosxyWI7wNhdGrum5HD7Q',
        formEndpoint: 'https://formspree.io/f/contato@adaservicos.com.br' // Recomendo trocar pelo ID do Formspree aqui
    }
};

function getEnvironmentConfig() {
    const hostname = window.location.hostname;
    
    // Suporta o domínio raiz e o prefixo www para produção
    if (hostname === APP_CONFIG.production.domain || hostname === `www.${APP_CONFIG.production.domain}`) {
        console.log("Ambiente: Produção");
        return APP_CONFIG.production;
    } else if (hostname === APP_CONFIG.homologation.domain || hostname.includes('hml.')) {
        console.log("Ambiente: Homologação");
        return APP_CONFIG.homologation;
    } else {
        // Padrão para desenvolvimento
        console.log("Ambiente: Desenvolvimento (GitHub/Local)");
        return APP_CONFIG.development;
    }
}