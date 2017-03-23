import { ActionHandler, Action, DefaultActionHandler } from "vulcain-corejs";
import { CarePlan } from '../models/models';
import { CarePlanQueryHandler } from './queryHandler';

// -----------------------------------------------------------
// Default crud action handlers
// -----------------------------------------------------------
@ActionHandler({ async: false, scope: "?", schema: 'CarePlan' })
export class CarePlanActionHandler extends DefaultActionHandler {

}