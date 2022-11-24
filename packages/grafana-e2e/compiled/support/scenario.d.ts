export interface ScenarioArguments {
    describeName: string;
    itName: string;
    scenario: Function;
    skipScenario?: boolean;
    addScenarioDataSource?: boolean;
    addScenarioDashBoard?: boolean;
    loginViaApi?: boolean;
}
export declare const e2eScenario: ({ describeName, itName, scenario, skipScenario, addScenarioDataSource, addScenarioDashBoard, loginViaApi, }: ScenarioArguments) => void;
