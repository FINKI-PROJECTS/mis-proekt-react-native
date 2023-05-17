import { get, update, set, ref, getDatabase } from "firebase/database";
import { TestData } from "../interfaces/TestInterface";
const db = getDatabase();
export const createTestData = (testData: TestData) => {

    const newTestDataRef = ref(db, 'testData');
    set(newTestDataRef, testData);

}