export interface AddDataSourceConfig {
    basicAuth: boolean;
    basicAuthPassword: string;
    basicAuthUser: string;
    expectedAlertMessage: string | RegExp;
    form: () => void;
    name: string;
    skipTlsVerify: boolean;
    type: string;
    timeout?: number;
}
export declare const addDataSource: (config?: Partial<AddDataSourceConfig> | undefined) => Cypress.Chainable<{
    config: AddDataSourceConfig;
}>;
