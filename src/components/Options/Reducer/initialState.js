import uuidv4 from "uuid/v4";

const initialState = {
    validationMessages: [],
    markerName: "",
    options: {
        reverse: {
            id: uuidv4(),
            isSelected: true,
            className: "Reverce",
            yes: "С реверсом",
            no: "Без реверса"
        },
        payment: {
            id: uuidv4(),
            isSelected: true,
            className: "Payment",
            yes: "Свет платят минусовые",
            no: "Свет на всех"
        },
        random: {
            id: uuidv4(),
            isSelected: true,
            className: "Random",
            yes: "Случайный порядок игроков",
            no: "В порядке решистрации"
        },
        moneyBall: {
            id: uuidv4(),
            isSelected: true,
            className: "onlyYellow",
            yes: "Только желтый",
            no: "С красным",
            redPoints: 2,
            yellowPoints: 1,
            setContainer: {
                label: "Красный за:",
                step: 1
            }
        },
        customLastBall: {
            id: uuidv4(),
            isSelected: false,
            className: "lastBall",
            lastBall: 1,
            setContainer: {
                label: "Последний за:",
                step: 1
            }
        },
        customBallPrice: {
            id: uuidv4(),
            isSelected: false,
            className: "ballPrice",
            lastBall: 1,
            setContainer: {
                label: "За шар:",
                step: 0.5
            }
        }
    },
    // withReverce: true,
    // payLoosers: true,
    // isRandom: true,
    // onlyYellow: true,
    // redPoints: 2,
    // yellowPoints: 1,
    // lastBall: 1,
    // lastBallByCost: true,
    // nominalBallPrice: true,
    whiteBalls: 15,
    // ballPrice: 0.5,

    players: [
        {
            id: 1,
            name: "",
            placeholder: "Имя *",
            canRemove: false
        },
        {
            id: 2,
            name: "",
            placeholder: "Имя *",
            canRemove: false
        }
    ]
    // startOptions: [
    //     {
    //         id: 1,
    //         title: 'Реверс',
    //         class: 'Reverce',
    //         possibleValues: [
    //             {
    //                 id: 1,
    //                 title: 'С реверсом',
    //                 isSelected: true
    //             },
    //             {
    //                 id: 2,
    //                 title: 'Без реверса',
    //                 isSelected: false
    //             }
    //         ]
    //     },
    //     {
    //         id: 2,
    //         title: 'Оплата света',
    //         class: 'Payment',
    //         possibleValues: [
    //             {
    //                 id: 1,
    //                 title: 'Только минусовые',
    //                 isSelected: true
    //             },
    //             {
    //                 id: 2,
    //                 title: 'Свет на всех',
    //                 isSelected: false
    //             }
    //         ]
    //     },
    //     {
    //         id: 3,
    //         title: 'Жеребьевка',
    //         class: 'Random',
    //         possibleValues: [
    //             {
    //                 id: 1,
    //                 title: 'Случайный порядок',
    //                 isSelected: true
    //             },
    //             {
    //                 id: 2,
    //                 title: 'В порядке ввода имен',
    //                 isSelected: false
    //             }
    //         ]
    //     },
    //     {
    //         id: 4,
    //         title: 'Игра с красным?',
    //         class: 'Q-ball',
    //         possibleValues: [
    //             {
    //                 id: 1,
    //                 title: 'Только желтый',
    //                 isSelected: true
    //             },
    //             {
    //                 id: 2,
    //                 title: 'С красным',
    //                 isSelected: false
    //             }
    //         ]
    //     },
    //     {
    //         id: 5,
    //         title: 'Последний шар за',
    //         class: 'LastBall',
    //         possibleValues: [
    //             {
    //                 id: 1,
    //                 title: 'Стоимость шара',
    //                 isSelected: true
    //             },
    //             {
    //                 id: 2,
    //                 title: 'Стоимость шара + 1',
    //                 isSelected: false
    //             },
    //             {
    //                 id: 3,
    //                 title: 'По количеству игроков',
    //                 isSelected: false
    //             },
    //             {
    //                 id: 4,
    //                 title: 'Количество игроков + стоимость шара',
    //                 isSelected: false
    //             }
    //         ]
    //     },
    //     {
    //         id: 6,
    //         title: 'Цена шара',
    //         class: 'BallPrice',
    //         possibleValues: [
    //             {
    //                 id: 1,
    //                 title: 'Игра на очки',
    //                 isSelected: true
    //             },
    //             {
    //                 id: 2,
    //                 title: 'Установить цену шара',
    //                 isSelected: false
    //             }
    //         ]
    //     }
    // ]
};

export default initialState;
