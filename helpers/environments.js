const environments = {};

environments.dev = {
    port: 3000,
    envName : 'dev'
}

environments.prod = {
    port: 5000,
    envName: 'prod'
}

const currentEnv = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'dev';
console.log('current env:', currentEnv);

const envToExport = typeof environments[currentEnv] === 'object' ? environments[currentEnv] : environments.dev;

module.exports = envToExport;