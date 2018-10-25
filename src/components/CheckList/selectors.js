export const getStartupData = state => {
    const { OptionsReducer = {} } = state;
    return {
        ballPrice: OptionsReducer.ballPrice,
        nominalBallPrice: OptionsReducer.nominalBallPrice,
        lastBall: OptionsReducer.lastBall,
        lastBallByCost: OptionsReducer.lastBallByCost,
        redPoints: OptionsReducer.redPoints,
        onlyYellow: OptionsReducer.onlyYellow,
        isRandom: OptionsReducer.isRandom,
        payLoosers: OptionsReducer.payLoosers,
        withReverce: OptionsReducer.withReverce,
        players: OptionsReducer.players,
        markerName: OptionsReducer.markerName
    };
};
