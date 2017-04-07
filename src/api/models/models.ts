import { Model, Property, Reference, Validator, ActionHandler, QueryHandler } from "vulcain-corejs";


// -----------------------------------------------------------
// Exam
// -----------------------------------------------------------
@Model()
export class Action {
    @Property({ type: "string", required: true, unique: true, isKey: true })
    id: string;

    @Property({ type: "string", required: true })
    label: string;

    @Property({ type: "boolean", required: false, defaultValue: 'false' })
    required: boolean = false;
}

@Model()
export class Interaction {
    @Property({ type: "string", required: true, unique: true, isKey: true })
    id: string;
    @Property({ type: "number" })
    delay: number;
    @Reference({ cardinality: 'many', item: 'Action' })
    actions: Action[];
}

@Model({ extends: 'Action' })
export class Question extends Action {
    @Property({ type: "string", required: true })
    kind: string;
    @Property({ type: "any" })
    options: any|Array<string>
}

// @Model({ extends: 'Question' })
// export class ChoiceQuestion extends Question {
//     @Property({ type: "arrayOfItem", items: "string" })
//     options: object
// }

@Model({ extends: 'Interaction' })
export class Quizz extends Interaction {
    //The actions will be instances of Question entity // TODO : Develop a Validator
}

@Model({ extends: 'Interaction' })
export class Activity extends Interaction {
    @Property({ type: "string", required: true })
    type: string;
    @Property({ type: "string", required: true })
    label: string;
}

@Model({ extends: 'Interaction' })
export class Instructions extends Interaction {
    @Property({ type: "string", required: true })
    type: string;
    @Property({ type: "string", required: true })
    text: string;
}

@Model({ description: 'A simple step of a care plan. It can be followed a pre-established plan or scheduling' })
export class Step {
    @Property({ type: "string", required: true, unique: true, isKey: true })
    id: string;
    // @Property({ type: "date-iso8601", required: true })
    // startDate: string;
    // @Property({ type: "date-iso8601", required: true, })
    // endDate: string;
    @Reference({ cardinality: 'one', item: 'Interaction', required: true })
    Test: Interaction;
}

@Model({ description: 'A simple step of a care plan. It can be followed a pre-established plan or scheduling' })
export class AddStepView {
    @Property({ type: "string", required: true, unique: true, isKey: true })
    id: string;
    @Property({ type: "string", required: true })
    carePlanid: string;
    @Property({ type: "number" })
    index: number;
    @Reference({ cardinality: 'one', item: 'Interaction', required: true })
    Test: Interaction;
}

// @Model()
// export class PlannedTask {
//     @Property({ type: "string", required: true, unique: true, isKey: true })
//     id: string;
//     @Reference({ cardinality: 'many', item: 'Step' })
//     steps: Step[];
// }

@Model()
@ActionHandler({ async: false, scope: '?', schema: 'CarePlan' })
@QueryHandler({ scope: '?', schema: 'CarePlan' })
export class CarePlan {
    @Property({ type: "string", required: true, unique: true, isKey: true })
    id: string;
    @Property({ type: "string", required: true })
    description: string;
    // @Property({ type: "date-iso8601", required: true })
    // startDate: string;
    // @Property({ type: "date-iso8601", required: true, })
    // endDate: string;
    // @Reference({ cardinality: 'one', item: 'PlannedTask' })
    // planner: PlannedTask;
    @Reference({ cardinality: 'many', item: 'Step', required: true })
    steps: Step[];

}