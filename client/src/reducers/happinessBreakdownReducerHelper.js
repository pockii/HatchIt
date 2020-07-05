function cloneEvent(event) {
    return {
        event: event.event,
        totalHappinessGained: event.totalHappinessGained,
        _id: event._id
    };
}

export function updateHappinessEvent(events, event) {
    // clone events object
    const newEvents = {};
    for (const id in events) {
        newEvents[id] = cloneEvent(events[id]);
    }

    // update event
    newEvents[event._id] = event;

    return newEvents;
}

export function addHappinessEventId(idArr, id) {
    const newIdArr = Array.from(idArr);
    newIdArr[newIdArr.length] = id;
    return newIdArr;
}