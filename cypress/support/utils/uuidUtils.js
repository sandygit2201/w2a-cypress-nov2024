import { v4 as uuidv4 } from "uuid"; 
class UUIDUtils{

    getRandomString(lenght=8){


        uuidv4().substring(lenght)

    }


}

export default new UUIDUtils()