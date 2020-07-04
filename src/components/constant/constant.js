//API_ROOT_LINK
//const test_api_baseLink = "http://localhost:8080/sym-api/me/";
const api_rootLink = "https://sym-api-dev.herokuapp.com/sym-api/";
const api_baseLink = api_rootLink + "me/";

//SIDEBAR
export const sidebar_api = api_baseLink + "sidebar";

//CONTACT_ME
export const contactme_api = api_baseLink + "contactme";

//HEROAREA
export const heroarea_api = api_baseLink + "heroarea";

//INTRODUCTION
export const intro_api = api_baseLink + "introduction";

//EDUCATION
export const education_api = api_baseLink + "education";

//EXPERIENCE
export const experience_api = api_baseLink + "experience";

//PROJECT
export const project_api = api_baseLink + "project";

//SKILL
export const skill_api = api_baseLink + "skill";

//File Path
export const JSON_FILE_DATA = '/portfolio_data.json';
//CONTACT_ME_SEND_FEEDBACK_EMAIL
export const contactme_feedback_api = "https://sym-api-dev.herokuapp.com/sym-api/emailservice/send-feedback-email";