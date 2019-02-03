import uuidv4 from "uuid/v4";

const initialState = {
  markerName: "",
  options: {
    reverse: {
      order: 0,
      id: uuidv4(),
      className: "Reverce",
      hint:
        "Играть можно только Аверс (1,2,3), так и Аверс + Реверс (1,2,3 а потом 3,2,1). Если игроков более 3, то играется все равно один реверс, а не все возможные варианты перестановок. ",
      currentState: "disabled",
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
      currentState: "disabled",
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
      currentState: "disabled",
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
      currentState: "disabled",
      disabled: {
        icon: "fas fa-times-circle",
        header: "Без бонусного шара"
      },
      active: {
        icon: "fas fa-plus-circle",
        header: "Очков за бонусный:"
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
      currentState: "disabled",
      disabled: {
        icon: "fas fa-flag-checkered",
        header: "Последний шар за номинал"
      },
      active: {
        icon: "fas fa-flag-checkered",
        header: "Очков за последний шар:"
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
      currentState: "disabled",
      disabled: {
        icon: "fas fa-handshake",
        header: "Игра на очки"
      },
      active: {
        icon: "fas fa-apple-alt",
        header: "Яблок за шар:"
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

  players: {
    [uuidv4()]: {
      name: "",
      validation: "",
      canRemove: false
    },
    [uuidv4()]: {
      name: "",
      validation: "",
      canRemove: false
    }
  }
};

export default initialState;
