import {Body, Controller, Post} from "@nestjs/common";
import { pgclnt } from "./pgclnt";

@Controller()
export class MainPage {
  @Post("/page")
  async getPage (@Body() body : any) {
    const jData = body;

    const max = jData.page * jData.pLength;
    const min = max - jData.pLength;

    const l = (await pgclnt.query("SELECT MAX(id) FROM users")).rows[0].max / jData.pLength;
    const d = (await pgclnt.query(`SELECT * FROM users WHERE id>=${min} AND id<=${max}`)).rows;
    
    return {len: l, data: d};
  }
}