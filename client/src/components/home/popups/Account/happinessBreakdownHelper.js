export function getChartData(happinessBreakdown) {
    const data = [];
    for (let i = 0; i < happinessBreakdown.eventIdArr.length; i++) {
        const eventState = happinessBreakdown.events[happinessBreakdown.eventIdArr[i]];
        data.push({
            "event": eventState.event,
            "totalHappinessGained": eventState.totalHappinessGained
        });
    }
    return data;
}