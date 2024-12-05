import {Body, Controller, Get, Post} from "@nestjs/common";
import { pgclnt } from "./pgclnt";

@Controller()
export class MainPage {

  /**
   * It sends all data in one request
   * @param body 
   * @returns 
   */
  @Post("/page")
  async getPage (@Body() body : any) {
    const jData = body;

    const max = jData.page * jData.pLength;
    const min = max - jData.pLength;

    const l = (await pgclnt.query("SELECT MAX(id) FROM users")).rows[0].max / jData.pLength;
    const troubles = (await pgclnt.query("SELECT problem FROM users WHERE problem=true")) .rowCount;
    const d = (await pgclnt.query(`SELECT * FROM users WHERE id>=${min} AND id<=${max}`)).rows;
    
    return {len: l, troubles: troubles, data: d};
  }

  /**
   * It updates data after that how a problem will be solved
   * @param body 
   * @returns 
   */
  @Post("/solve")
  async solveProblem (@Body() body : any) {
    const jData = body;

    await pgclnt.query(`UPDATE users SET problem=false WHERE id=${jData.id}`);
    const troubles = (await pgclnt.query("SELECT problem FROM users WHERE problem=true")) .rowCount;

    return {troubles: troubles}
  }
}