

export const IDE_BASE_URL= 'http://34.125.168.116';
export const GET_LANGUAGE = `${IDE_BASE_URL}/languages`;
export const FIRST_SUBMISSION_URL = `${IDE_BASE_URL}/submissions/?base64_encoded=false&wait=false`

export const getSubmissionDetails = (token) => {
     return  `${IDE_BASE_URL}/submissions/${token}`;
}
