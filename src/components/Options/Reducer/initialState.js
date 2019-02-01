import uuidv4 from "uuid/v4";

const initialState = {
    validationMessages: [],
    markerName: "",
    options: {
        reverse: {
            order: 0,
            id: uuidv4(),
            className: "Reverce",
            hint:
                "Играть можно только Аверс (1,2,3), так и Аверс + Реверс (1,2,3 а потом 3,2,1). Если игроков более 3, то играется все равно один реверс, а не все возможные варианты перестановок. ",
            disabled: {
                icon: "fas fa-sync-alt",
                header: "Игра с реверсом"
            },
            active: {
                icon: "fas fa-redo-alt",
                header: "Игра без реверса"
            },
            setContainer: null
        },
        lightPayment: {
            order: 10,
            id: uuidv4(),
            hint:
                "Если 'Всет на всех', то по окончании игры игровое время оплачивается всеми игроками в равных долях. Если же выбрана опция 'Свет оплачивают минусовые', то оплачивать время должны те игроки, которые в итоге имеют отрицательное количество очков.",
            className: "lightPayment",
            disabled: {
                icon: "fas fa-users",
                header: "Свет на всех"
            },
            active: {
                icon: "fas fa-wheelchair",
                header: "Свет оплачивают минусовые"
            },
            setContainer: null
        },
        random: {
            order: 20,
            id: uuidv4(),
            hint:
                "Очередность ходов можно оставить в том порядке, в каком игроки решистрировались на встречу, а можно предоставить право решать 'кто за кем' хозяйке-судьбе",
            className: "Random",
            disabled: {
                icon: "fas fa-random",
                header: "Случайный порядок"
            },
            active: {
                icon: "fas fa-long-arrow-alt-right",
                header: "В очерередности регистрации"
            },
            setContainer: null
        },
        moneyBall: {
            order: 30,
            id: uuidv4(),
            hint:
                "Бонусный шар, это дополнительный шар на столе другого цвета, при сыгрывании которого/от которого игроку засчитывается больше очков (столько, сколько этот шар стоит по договоренности)",
            className: "moneyBall",
            disabled: {
                icon: "fas fa-times-circle",
                header: "Без бонусного шара"
            },
            active: {
                icon: "fas fa-plus-circle",
                header: "С бонусным шаром"
            },
            setContainer: {
                defaultValue: 1,
                step: 1
            }
        },
        lastBallPoints: {
            order: 40,
            id: uuidv4(),
            hint:
                "Для дополнительного зашквара в конце партии, можно определить правило, которое гласит: 'мол последний шар имеет коэффициент к своему номиналу'. Например 2.",
            className: "lastBallPoints",
            disabled: {
                icon: "fas fa-flag-checkered",
                header: "Последний шар за номинал."
            },
            active: {
                icon: "fas fa-flag-checkered",
                header: "Последний шар за:"
            },
            setContainer: {
                defaultValue: 2,
                step: 1
            }
        },
        customBallPrice: {
            order: 50,
            id: uuidv4(),
            hint: "Играть можно не только на очки, но и на щелбаны, желания или яблоки, к примеру...",
            className: "customBallPrice",
            disabled: {
                icon: "fas fa-handshake",
                header: "Дружеская катанина"
            },
            active: {
                icon: "fas fa-apple-alt",
                header: "Игра с мотивацией"
            },
            setContainer: {
                defaultValue: 0.5,
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
