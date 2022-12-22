export const BASE_PATH = '';

export const HOME_PATH = `${BASE_PATH}/`;
export const LOGIN_PATH = `${BASE_PATH}/login`;
export const LOGOUT_PATH = `${BASE_PATH}/logout`;
export const PREPARE_PATH = `${BASE_PATH}/prepare`;
export const CERTIFY_PATH = `${BASE_PATH}/certify`;
export const COMPETE_PATH = `${BASE_PATH}/compete`;
export const PAGES_PATH_LIST = [`${PREPARE_PATH}`, `${CERTIFY_PATH}`, `${COMPETE_PATH}`]
export const PAGES_MAPPING = [
    {
        name: 'Prepare',
        path : PREPARE_PATH,
        desc: 'Prepare'
    },
    {
        name: 'Skills Certifications',
        path: CERTIFY_PATH,
        desc: 'Get Your Skills Certified'
    },
    {
        name: 'All Contests',
        path: COMPETE_PATH,
        desc: 'Contests'
    },
  
]