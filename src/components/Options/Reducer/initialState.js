import uuidv4 from "uuid/v4";

const initialState = {
    validationMessages: [],
    markerName: "",
    options: {
        reverse: {
            order: 0,
            id: uuidv4(),
            icon: "fa-rev",
            className: "Reverce",
            active: {
                header: "Игра с реверсом",
                text: "После аверса автоматически начинается реверс (порядок игроков сохраняется)"
            },
            disabled: {
                header: "Игра без реверса",
                text:
                    "После аверса игра заканчивается. Выводится статистика. В пользовательском режиме статистика и лог отправляются на электронную почту пользователю."
            }
        },
        payment: {
            order: 0,
            id: uuidv4(),
            icon: "fa-rev",
            className: "Payment",
            active: {
                header: "Всет на всех",
                text: "Дружеский вариант встречи, когда стоимость игровоговремени делится равными долями среди участников встречи."
            },
            disabled: {
                header: "Свет оплачивают минусовые",
                text:
                    "Оплата игрового времени ложится на плечи игроков, закончивших встречу/аверс/реверс с отрицательным результатом. Дополнительно оговаривается участие в оплате света игроков, которые закончили с нулевым результатом"
            }
        }
        // random: {
        //     id: uuidv4(),
        //     mainLabel: "Очередность игроков:",
        //     isSelected: false,
        //     className: "Random",
        //     yes: "Случайный порядок",
        //     no: "По регистрации"
        // },
        // moneyBall: {
        //     id: uuidv4(),
        //     mainLabel: "Бонусный шар:",
        //     isSelected: false,
        //     className: "onlyYellow",
        //     yes: "Бонусный за:",
        //     no: "Нет",
        //     optionValue: 2,
        //     yellowPoints: 1,
        //     setContainer: {
        //         step: 1
        //     }
        // },
        // lastBall: {
        //     id: uuidv4(),
        //     mainLabel: "Последний шар:",
        //     isSelected: false,
        //     className: "lastBall",
        //     yes: "Последний за:",
        //     no: "Номинал",
        //     optionValue: 1,
        //     setContainer: {
        //         step: 1
        //     }
        // },
        // customBallPrice: {
        //     id: uuidv4(),
        //     mainLabel: "Цена шара:",
        //     isSelected: false,
        //     className: "ballPrice",
        //     yes: "За шар:",
        //     no: "Игра на очки",
        //     optionValue: 1,
        //     setContainer: {
        //         step: 0.5
        //     }
        // }
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
