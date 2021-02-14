const environments = {
    local: 'local',
    production: 'production'
};

const currentEnvironment = process.env.REACT_APP_ENVIRONMENT || 'local';

let API_URL = '';

switch (currentEnvironment) {
    case environments.local:
        API_URL = process.env.REACT_APP_API_URL || '';
        break;
    case environments.production:
        API_URL = process.env.REACT_APP_API_URL || '';
        break;
    default:
        throw new Error('env not defined')
        break;
}

export default {
    API_URL,
};
