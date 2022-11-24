export interface BenchmarkArguments {
    name: string;
    dashboard: {
        folder: string;
        delayAfterOpening: number;
        skipPanelValidation: boolean;
    };
    repeat: number;
    duration: number;
    appStats?: {
        startCollecting?: (window: Window) => void;
        collect: (window: Window) => Record<string, unknown>;
    };
    skipScenario?: boolean;
}
export declare const benchmark: ({ name, skipScenario, repeat, duration, appStats, dashboard, }: BenchmarkArguments) => void;
