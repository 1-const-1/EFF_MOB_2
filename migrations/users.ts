"use strict";

import * as fs from "fs";
import * as path from "path";
import { kxclnt } from "./knex";

(async () => {
  try {
    
    // MOCK DATA CONTAINS 1000 ROWS (file: db/users/mock.json)
    const d = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/users/mock.json")).toString());
  
    const l = 3000;
    for (let i = 0; i < l; i++) 
      await kxclnt.insert(d).into("users");  
  
    console.log(`${l * d.length} successful insetion`);

  } catch (err) {
    console.log(err);
    throw err;
  }
})();