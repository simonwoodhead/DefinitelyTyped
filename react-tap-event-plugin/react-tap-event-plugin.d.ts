// Type definitions for react-tap-event-plugin
// Project: https://github.com/zilverline/react-tap-event-plugin
// Definitions by: Michael Ledin <https://github.com/mxl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-tap-event-plugin'{
    interface StrategyOverrides {
        shouldRejectClick?: (lastTouchEventTimestamp: Date, clickEventTimestamp: Date) => boolean;
    }

    var injectTapEventPlugin: (strategyOverrides?: StrategyOverrides) => void;

    export default injectTapEventPlugin;
}
