import { CarePlan } from "../models/models";
import { QueryHandler, DefaultQueryHandler } from "vulcain-corejs";

// -----------------------------------------------------------
// Defaut query handlers (get/search)
// -----------------------------------------------------------
@QueryHandler({ scope: "?", schema: "CarePlan" })
export class CarePlanQueryHandler extends DefaultQueryHandler<CarePlan> {
    
}