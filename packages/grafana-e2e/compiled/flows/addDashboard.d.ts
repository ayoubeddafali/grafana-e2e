import { TimeRangeConfig } from './setDashboardTimeRange';
export interface AddAnnotationConfig {
    dataSource: string;
    dataSourceForm?: () => void;
    name: string;
}
export interface AddDashboardConfig {
    annotations: AddAnnotationConfig[];
    timeRange: TimeRangeConfig;
    title: string;
    variables: PartialAddVariableConfig[];
}
interface AddVariableDefault {
    hide: string;
    type: string;
}
interface AddVariableOptional {
    constantValue?: string;
    dataSource?: string;
    label?: string;
    query?: string;
    regex?: string;
    variableQueryForm?: (config: AddVariableConfig) => void;
}
interface AddVariableRequired {
    name: string;
}
export declare type PartialAddVariableConfig = Partial<AddVariableDefault> & AddVariableOptional & AddVariableRequired;
export declare type AddVariableConfig = AddVariableDefault & AddVariableOptional & AddVariableRequired;
/**
 * This flow is used to add a dashboard with whatever configuration specified.
 * @param config Configuration object. Currently supports configuring dashboard time range, annotations, and variables (support dependant on type).
 * @see{@link AddDashboardConfig}
 *
 * @example
 * ```
 * // Configuring a simple dashboard
 * addDashboard({
 *    timeRange: {
 *      from: '2022-10-03 00:00:00',
 *      to: '2022-10-03 23:59:59',
 *      zone: 'Coordinated Universal Time',
 *    },
 *    title: 'Test Dashboard',
 * })
 * ```
 *
 * @example
 * ```
 * // Configuring a dashboard with annotations
 * addDashboard({
 *    title: 'Test Dashboard',
 *    annotations: [
 *      {
 *        // This should match the datasource name
 *        dataSource: 'azure-monitor',
 *        name: 'Test Annotation',
 *        dataSourceForm: () => {
 *          // Insert steps to create annotation using datasource form
 *        }
 *      }
 *    ]
 * })
 * ```
 *
 * @see{@link AddAnnotationConfig}
 *
 * @example
 * ```
 * // Configuring a dashboard with variables
 * addDashboard({
 *    title: 'Test Dashboard',
 *    variables: [
 *      {
 *        name: 'test-query-variable',
 *        label: 'Testing Query',
 *        hide: '',
 *        type: e2e.flows.VARIABLE_TYPE_QUERY,
 *        dataSource: 'azure-monitor',
 *        variableQueryForm: () => {
 *          // Insert steps to create variable using datasource form
 *        },
 *      },
 *      {
 *        name: 'test-constant-variable',
 *        label: 'Testing Constant',
 *        type: e2e.flows.VARIABLE_TYPE_CONSTANT,
 *        constantValue: 'constant',
 *      }
 *    ]
 * })
 * ```
 *
 * @see{@link AddVariableConfig}
 *
 * @see{@link https://github.com/grafana/grafana/blob/main/e2e/cloud-plugins-suite/azure-monitor.spec.ts Azure Monitor Tests for full examples}
 */
export declare const addDashboard: (config?: Partial<AddDashboardConfig> | undefined) => Cypress.Chainable<{
    config: AddDashboardConfig;
    uid: string;
}>;
export declare const VARIABLE_HIDE_LABEL = "Label";
export declare const VARIABLE_HIDE_NOTHING = "";
export declare const VARIABLE_HIDE_VARIABLE = "Variable";
export declare const VARIABLE_TYPE_AD_HOC_FILTERS = "Ad hoc filters";
export declare const VARIABLE_TYPE_CONSTANT = "Constant";
export declare const VARIABLE_TYPE_DATASOURCE = "Datasource";
export declare const VARIABLE_TYPE_QUERY = "Query";
export {};
