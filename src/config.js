const DB_NAME = 'igbo_api';
const TEST_DB_NAME = 'test_igbo_api';

export const PORT = process.env.PORT || 8080;
export const MONGO_ROOT = 'mongodb://localhost:27017';
const TEST_MONGO_URI = `${MONGO_ROOT}/${TEST_DB_NAME}`;
const LOCAL_MONGO_URI = `${MONGO_ROOT}/${DB_NAME}`;
export const MONGO_URI = process.env.NODE_ENV === 'test' ?
    TEST_MONGO_URI : process.env.NODE_ENV === 'dev' ?
    LOCAL_MONGO_URI : process.env.MONGO_URI || LOCAL_MONGO_URI;