// config.js에서 .env에서 읽은 url 값을 바인딩합니다.
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = 'http://3.36.72.47:10010';
// or const BASE_URL = "localhost:8000";
export default BASE_URL;
