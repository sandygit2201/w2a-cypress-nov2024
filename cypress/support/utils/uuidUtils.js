import { v4 as uuidv4 } from "uuid";
class UUIDUtils {
  getRandomString(length = 8) {
    return uuidv4().substring(length);
  }
}

export default new UUIDUtils();
