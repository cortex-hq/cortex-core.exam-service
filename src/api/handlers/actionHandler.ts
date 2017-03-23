import { ActionHandler, Action, DefaultActionHandler } from "vulcain-corejs";
import { CarePlan } from '../models/models';
import { CarePlanQueryHandler } from './queryHandler';

// -----------------------------------------------------------
// Default crud action handlers
// -----------------------------------------------------------
@ActionHandler({ async: false, scope: "?", schema: 'CarePlan' })
export class CarePlanActionHandler extends DefaultActionHandler {

 //api/CarePlan.updategame
    // @Action({ description: "Provides way to update a game (Score, Incidents)", outputSchema: "Season" }) // action = method name (minus Async)
    // async updateGame(game: Game) {

    //     let handler = this.container.get<SeasonQueryHandler>('SeasonQueryService');
    //     let season1 = await handler.getAsync(game.seasonId);
    //     let gameIndex = season1.games.findIndex(g => g.id === game.id);
    //     season1.games.splice(gameIndex, 1, game);
    //     let season2 = await this.updateAsync(season1);
    //     return season2;
    // }
}