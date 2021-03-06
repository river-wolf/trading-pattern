const UP = 1
const DOWN = 2

export const patterns = [
    {
        name: 'Harami de alta',
        trend: 1,
        data: [
            {
                date: new Date('2020-01-10T02:01Z'),
                open: 50,
                high: 52,
                low: 43,
                close: 45
            },
            {
                date: new Date('2020-01-10T02:02Z'),
                open: 47,
                high: 49,
                low: 40,
                close: 42
            },
            {
                date: new Date('2020-01-10T02:03Z'),
                open: 43.5,
                high: 46,
                low: 42.5,
                close: 45
            }
        ],
        description: `
            <p>O Harami é também conhecido como "mulher grávida" por sua semelhança com essa figura. Ele é formado por um candle maior (candle-mãe) e um candle menor, cujo corpo está integralmente inserido entre os limites do corpo do candle-mãe. Conhecido padrão de reversão, ele costuma aparecer após uma tendência definida. Ele é um caso particular de inside candle e apresenta um alto índice de acerto.</p>
            <p>Existe o harami de alta, que ocorre após longas tendências de baixa – e têm este nome justamente porque revertem o movimento para cima. E há também o harami de baixa, que ocorrem após longas tendências de alta, revertendo o movimento para baixo.</p>
        `
    },
    {
        name: 'Harami de baixa',
        trend: 2,
        data: [
            {
                date: new Date('2020-01-10T02:01Z'),
                open: 42,
                high: 50,
                low: 40,
                close: 48
            },
            {
                date: new Date('2020-01-10T02:02Z'),
                open: 46,
                high: 54,
                low: 43.5,
                close: 52
            },
            {
                date: new Date('2020-01-10T02:03Z'),
                open: 50,
                high: 52,
                low: 46,
                close: 48
            }
        ],
        description: `
            <p>O Harami é também conhecido como "mulher grávida" por sua semelhança com essa figura. Ele é formado por um candle maior (candle-mãe) e um candle menor, cujo corpo está integralmente inserido entre os limites do corpo do candle-mãe. Conhecido padrão de reversão, ele costuma aparecer após uma tendência definida. Ele é um caso particular de inside candle e apresenta um alto índice de acerto.</p>
            <p>Existe o harami de alta, que ocorre após longas tendências de baixa – e têm este nome justamente porque revertem o movimento para cima. E há também o harami de baixa, que ocorrem após longas tendências de alta, revertendo o movimento para baixo.</p>
        `
    },
    {
        name: 'Estrela da manhã',
        trend: 1,
        data: [
            {
                date: new Date('2020-01-10T02:01Z'),
                open: 46,
                high: 47,
                low: 36,
                close: 37
            },
            {
                date: new Date('2020-01-10T02:02Z'),
                open: 35,
                high: 36,
                low: 33,
                close: 34
            },
            {
                date: new Date('2020-01-10T02:03Z'),
                open: 36,
                high: 45,
                low: 35,
                close: 44
            }
        ],
        description: `
            <p>Tanto a Estrela da Manhã (que forma fundos) quanto a Estrela da Noite (que forma topos) apresentam um desenho parecido: após uma tendência bem definida, surge um grande candle com pouco pavio ou mesmo sem pavio nenhum. Após esse candle, o preço forma um pequeno doji com pavios medianos. Em seguida, o preço desenha um grande candle com pouco pavio ou mesmo sem pavio nenhum na direção oposta à tendência anterior, caracterizando uma reversão bastante provável.</p>
        `
    }
]