/* Idioms (modismos): everyday Latin American Spanish expressions, mostly Colombian. Same format as data-numbers.js.
   Latin American Spanish (ustedes, no vosotros).
   In sentences, word{gloss} gives the hover translation and ___ is the gap.
   Sentences have no p (person); at: [row who, column label] names the idiom's row.
   Check with: node validate.js data-idioms.js IDIOMS */

const IDIOMS = {
  id: 'idioms', pl: 'Modismos', en: 'Colombian idioms',
  intro: 'Colombians talk in pictures: a hard job is a camel, a problem is a stone, and flirting is setting the dogs on someone. These idioms are fixed phrases, but the verb inside them still conjugates like any other verb: no des papaya, me sacó la piedra, se pusieron las pilas. Adjectives like enguayabado or tragado still agree with the person. Most are informal: perfect with friends, out of place in a job interview.',
  groups: [
    {
      id: 'idiom-parche', pl: 'Parche y rumba', en: 'Friends and partying', q: 'hacer una vaca',
      summary: 'A parche is your group of friends or a plan with them, and a rumba is a night out. These idioms cover the whole night: organising it, pooling money for it, getting tipsy, and paying for it the next morning.',
      tables: [
        { title: 'Going out',
          cols: [{ label: 'Literally', tint: 'all' }, { label: 'Meaning', tint: 'all' }],
          rows: [
            { who: 'armar parche', cells: ['to build a patch', 'to organise a get-together with friends'] },
            { who: 'hacer una vaca', cells: ['to make a cow', 'to pool money for something'] },
            { who: 'irse de rumba', cells: ['to go off on a rumba', 'to go out partying'] },
            { who: 'estar prendido', cells: ['to be switched on', 'to be tipsy'] },
            { who: 'pegarse una rasca', cells: ['to stick yourself a scratch', 'to get really drunk'] },
            { who: 'estar enguayabado', cells: ['to be guava-ed', 'to be hungover'] },
            { who: 'ser una chimba', cells: ['to be a chimba', 'to be awesome'] },
            { who: 'estar amañado', cells: ['to be settled in', 'to feel at home somewhere'] },
          ] },
      ],
      rules: [
        { t: 'The verb conjugates; the rest of the idiom stays fixed', ex: 'El sábado hicimos una vaca para el asado.', en: 'On Saturday we pooled money for the barbecue.' },
        { t: 'With estar, the adjective agrees with the person', ex: 'Mis primas amanecieron enguayabadas.', en: 'My cousins woke up hungover.' },
        { t: 'Qué chimba on its own means how great', ex: '¡Qué chimba de fiesta!', en: 'What an awesome party!' },
      ],
      watch: [
        'Chimba started as a vulgar word and older people may still find it crude. Among young Colombians qué chimba is everyday, but avoid it at work or with your partner’s grandparents.',
        'Hacer una vaca is understood in much of Latin America; parche, enguayabado and amañado are very Colombian.',
        'Guayabo is the hangover itself: tengo guayabo means the same as estoy enguayabado.',
      ],
    },
    {
      id: 'idiom-papaya', pl: 'Pilas y papaya', en: 'Being sharp and careful', q: 'no dar papaya',
      summary: 'Colombian street wisdom in a few phrases. Dar papaya is to make yourself an easy target, and the unwritten rule is no dar papaya. Pilas (batteries) means alert, and an avión (plane) is someone quick and sly.',
      tables: [
        { title: 'Street smarts',
          cols: [{ label: 'Literally', tint: 'all' }, { label: 'Meaning', tint: 'all' }],
          rows: [
            { who: 'dar papaya', cells: ['to give papaya', 'to make yourself an easy target'] },
            { who: 'ponerse las pilas', cells: ['to put in your batteries', 'to get your act together, get moving'] },
            { who: 'estar pilas', cells: ['to be batteries', 'to be alert, on your toes'] },
            { who: 'ser un avión', cells: ['to be a plane', 'to be sharp and sly'] },
            { who: 'hacerse el loco', cells: ['to make yourself the crazy one', 'to pretend not to notice, play dumb'] },
            { who: 'hacerse el de las gafas', cells: ['to make yourself the one with glasses', 'to pretend you didn’t see'] },
            { who: 'sapear', cells: ['to toad', 'to snitch on someone'] },
            { who: 'abrirse', cells: ['to open yourself', 'to leave, take off'] },
          ] },
      ],
      rules: [
        { t: 'Negative commands use the subjunctive', ex: 'No des papaya con el celular.', en: 'Don’t flash your phone around.' },
        { t: 'Reflexive idioms keep their pronoun', ex: 'Ponte las pilas, que el examen es mañana.', en: 'Get your act together, the exam is tomorrow.' },
        { t: 'In hacerse el loco, el and loco agree with the person', ex: 'Marta se hace la loca.', en: 'Marta plays dumb.' },
      ],
      watch: [
        'Ponerse las pilas is understood all over Latin America and Spain. Dar papaya and ser un avión are Colombian.',
        '¡Pilas! on its own is a warning: watch out!',
        'A sapo (toad) is a snitch or a nosy person. Calling someone sapo is an insult, though not a vulgar one.',
      ],
    },
    {
      id: 'idiom-camello', pl: 'Camello y garra', en: 'Work and effort', q: 'ser un camello',
      summary: 'In Colombia work is a camello and to work is camellar. These idioms are about hard jobs, giving it everything, and being completely worn out afterwards.',
      tables: [
        { title: 'Hard work',
          cols: [{ label: 'Literally', tint: 'all' }, { label: 'Meaning', tint: 'all' }],
          rows: [
            { who: 'camellar', cells: ['to camel', 'to work (hard)'] },
            { who: 'ser un camello', cells: ['to be a camel', 'to be a tough job'] },
            { who: 'darse garra', cells: ['to give yourselves claw', 'to give it everything'] },
            { who: 'ser un berraco', cells: ['to be a boar', 'to be tough, brave, or brilliant at something'] },
            { who: 'estar mamado', cells: ['to be sucked dry', 'to be exhausted or fed up'] },
            { who: 'voltear', cells: ['to turn around', 'to run around doing errands'] },
            { who: 'ponerse la camiseta', cells: ['to put on the shirt', 'to commit fully to a team or company'] },
            { who: 'sudar la gota gorda', cells: ['to sweat the fat drop', 'to work extremely hard'] },
          ] },
      ],
      rules: [
        { t: 'Camellar is a regular -ar verb', ex: 'Mi papá camella de lunes a sábado.', en: 'My dad works Monday to Saturday.' },
        { t: 'Berraco agrees with the person', ex: 'Mi abuela es una berraca.', en: 'My grandmother is a tough woman.' },
        { t: 'Ser un berraco para means to be great at', ex: 'Eres un berraco para las matemáticas.', en: 'You are brilliant at maths.' },
      ],
      watch: [
        'Estar mamado is informal and slightly crude, because mamar also has a sexual meaning. Fine with friends; avoid the feminine noun mamada, which is vulgar.',
        'Berraco can also mean angry: estar berraco is to be furious, while ser berraco is a compliment.',
        'Sudar la gota gorda and ponerse la camiseta are understood everywhere in the Spanish-speaking world.',
      ],
    },
    {
      id: 'idiom-piedra', pl: 'Piedra y líos', en: 'Annoyance and trouble', q: 'sacar la piedra',
      summary: 'In Colombia anger is a stone: sacar la piedra is to make someone angry and estar piedro is to be angry. Being in the pot means being in trouble, usually with no money.',
      tables: [
        { title: 'Annoyance and trouble',
          cols: [{ label: 'Literally', tint: 'all' }, { label: 'Meaning', tint: 'all' }],
          rows: [
            { who: 'sacar la piedra', cells: ['to take out the stone', 'to make someone angry'] },
            { who: 'estar piedro', cells: ['to be stony', 'to be angry'] },
            { who: 'dar lora', cells: ['to give parrot', 'to be a nuisance, make noise'] },
            { who: 'mamar gallo', cells: ['to suck rooster', 'to tease, joke around'] },
            { who: 'estar en la olla', cells: ['to be in the pot', 'to be in a bad way, broke'] },
            { who: 'llevar del bulto', cells: ['to carry from the sack', 'to get the worst of it'] },
            { who: 'hacer el oso', cells: ['to do the bear', 'to embarrass yourself'] },
            { who: 'echar carreta', cells: ['to throw cart', 'to talk nonsense, talk big'] },
          ] },
      ],
      rules: [
        { t: 'Sacar la piedra works like gustar: the thing that annoys is the subject', ex: 'Me saca la piedra el ruido.', en: 'The noise makes me angry.' },
        { t: 'Piedro agrees with the person', ex: 'La profesora está piedra.', en: 'The teacher is angry.' },
        { t: 'No + subjunctive to tell someone to stop', ex: 'No me saques la piedra.', en: 'Don’t make me angry.' },
      ],
      watch: [
        'Mamar gallo is informal but not rude; Colombians use it constantly. Mamagallista is someone who is always joking.',
        '¡Qué oso! on its own means how embarrassing!',
        'Estar en la olla can also mean someone is in very poor health or has hit rock bottom.',
      ],
    },
    {
      id: 'idiom-perros', pl: 'Amor y levante', en: 'Love and flirting', q: 'echar los perros',
      summary: 'Colombian dating from start to finish: setting the dogs on someone is flirting, levantar is getting a date, cuadrarse is becoming an official couple, and putting horns on someone is cheating.',
      tables: [
        { title: 'Love and flirting',
          cols: [{ label: 'Literally', tint: 'all' }, { label: 'Meaning', tint: 'all' }],
          rows: [
            { who: 'echar los perros', cells: ['to set the dogs on', 'to flirt with, hit on'] },
            { who: 'levantar', cells: ['to lift', 'to get a date, pull'] },
            { who: 'cuadrarse', cells: ['to square yourselves up', 'to become a couple'] },
            { who: 'estar tragado', cells: ['to be swallowed', 'to be head over heels'] },
            { who: 'dar un pico', cells: ['to give a beak', 'to give a quick kiss'] },
            { who: 'poner los cachos', cells: ['to put the horns on', 'to cheat on'] },
            { who: 'dejar metido', cells: ['to leave stuck in', 'to stand someone up'] },
          ] },
      ],
      rules: [
        { t: 'The person you flirt with takes le and a', ex: 'Le echó los perros a Camila.', en: 'He hit on Camila.' },
        { t: 'Tragado agrees with the person', ex: 'Mi hermana está tragada.', en: 'My sister is head over heels.' },
        { t: 'Ojalá takes the subjunctive', ex: 'Ojalá nunca me pongas los cachos.', en: 'I hope you never cheat on me.' },
      ],
      watch: [
        'Poner los cachos (or los cuernos) is understood across Latin America and Spain.',
        'Echar los perros and cuadrarse are Colombian; in Mexico you would hear tirar la onda instead.',
        'None of these are rude, but levantar can sound a bit crude when talking about a specific person.',
      ],
    },
  ],
  sentences: [
    // Parche y rumba
    { c: 'idiom-parche', at: ['armar parche', 'Meaning'], s: 'El{the|m} sábado{Saturday|m} ___ parche{get-together|m} en{at} mi{my} casa{house|f}, ¿vienes{are you coming}?', base: 'armar', hint: 'nosotros', gloss: 'to build, set up', a: ['armamos', 'armaremos'], en: 'On Saturday we’re having people over at my place, are you coming?', why: 'Armar parche is to organise a get-together. Nosotros in the present (or future) is armamos.' },
    { c: 'idiom-parche', at: ['armar parche', 'Meaning'], s: 'Anoche{last night} los{the|m.pl} vecinos{neighbours|m.pl} ___ un{a|m} parche{party|m} hasta{until} las{the|f.pl} tres{three}.', base: 'armar', gloss: 'to build, set up', a: ['armaron'], en: 'Last night the neighbours had a party until three.', why: 'Armar un parche is to get people together. Anoche calls for the preterite, and ellos with an -ar verb takes -aron.' },
    { c: 'idiom-parche', at: ['hacer una vaca', 'Meaning'], s: 'Si{if} ___ una{a|f} vaca{kitty (lit. cow)|f}, nos{us} alcanza{is enough} para{for} el{the|m} asado{barbecue|m}.', base: 'hacer', hint: 'nosotros', gloss: 'to make, do', a: ['hacemos'], en: 'If we pool our money, we’ll have enough for the barbecue.', why: 'Hacer una vaca is to pool money. After si the present is used, and nosotros of hacer is hacemos.' },
    { c: 'idiom-parche', at: ['hacer una vaca', 'Meaning'], s: 'Para{for} el{the|m} regalo{gift|m} de{of} Juan{Juan}, los{the|m.pl} compañeros{colleagues|m.pl} ___ una{a|f} vaca{kitty (lit. cow)|f}.', base: 'hacer', hint: 'pret.', gloss: 'to make, do', a: ['hicieron'], en: 'The colleagues chipped in for Juan’s present.', why: 'Hacer una vaca is to pool money. Hacer has an irregular preterite stem hic-, so ellos is hicieron.' },
    { c: 'idiom-parche', at: ['irse de rumba', 'Meaning'], s: 'Los{the|m.pl} viernes{Fridays|m.pl} mis{my} amigos{friends|m.pl} siempre{always} se{(themselves)} ___ de{on a} rumba{night out|f}.', base: 'ir', gloss: 'to go', a: ['van'], en: 'On Fridays my friends always go out partying.', why: 'Irse de rumba is to go out partying. Siempre signals a habit, so the present: ellos van.' },
    { c: 'idiom-parche', at: ['estar prendido', 'Meaning'], s: 'Después_de{after} tres{three} cervezas{beers|f.pl}, Laura{Laura} ya{already} estaba{was} ___.', base: 'prendido', gloss: 'tipsy (lit. switched on)', a: ['prendida'], en: 'After three beers, Laura was already tipsy.', why: 'Estar prendido is to be tipsy. Laura is a woman, so the adjective is feminine: prendida.' },
    { c: 'idiom-parche', at: ['pegarse una rasca', 'Meaning'], s: 'Anoche{last night} Pedro{Pedro} se{himself} ___ una{a|f} rasca{bender|f} tremenda{huge|f}.', base: 'pegar', gloss: 'to stick, hit', a: ['pegó'], en: 'Last night Pedro got completely drunk.', why: 'Pegarse una rasca is to get really drunk. A finished event last night takes the preterite: él pegó.' },
    { c: 'idiom-parche', at: ['estar enguayabado', 'Meaning'], s: 'Hoy{today} no{not} puedo{I can} trabajar{work}: ___ enguayabado{hungover} después_de{after} la{the|f} fiesta{party|f}.', base: 'estar', hint: 'yo', gloss: 'to be', a: ['estoy'], en: 'I can’t work today: I’m hungover after the party.', why: 'Estar enguayabado is to be hungover. It is a temporary state, so estar, and yo is estoy.' },
    { c: 'idiom-parche', at: ['estar enguayabado', 'Meaning'], s: 'Mis{my} primas{cousins|f.pl} amanecieron{woke up} ___ después{after} del{of the|m} matrimonio{wedding|m}.', base: 'enguayabado', gloss: 'hungover', a: ['enguayabadas'], en: 'My cousins woke up hungover after the wedding.', why: 'Enguayabado means hungover. Primas is feminine plural, so the adjective is enguayabadas.' },
    { c: 'idiom-parche', at: ['ser una chimba', 'Meaning'], s: 'El{the|m} concierto{concert|m} de{of} anoche{last night} ___ una{a|f} chimba{blast|f}.', base: 'ser', hint: 'pret.', gloss: 'to be', a: ['fue'], en: 'Last night’s concert was awesome.', why: 'Ser una chimba is to be awesome. The concert is over, so the preterite of ser: fue.' },
    { c: 'idiom-parche', at: ['estar amañado', 'Meaning'], s: 'Llevo{I have been} un{a|m} año{year|m} en{in} Medellín{Medellín} y{and} estoy{I am} muy{very} ___.', base: 'amañado', hint: 'yo, fem.', gloss: 'settled in, at home', a: ['amañada'], en: 'I’ve been in Medellín for a year and I really feel at home.', why: 'Estar amañado is to feel at home somewhere. The speaker is a woman, so amañada.' },
    { c: 'idiom-parche', at: ['estar amañado', 'Meaning'], s: '¿Ustedes{you all} ___ amañados{settled in|m.pl} en{in} Bogotá{Bogotá} o{or} extrañan{do you miss} la{the|f} costa{coast|f}?', base: 'estar', gloss: 'to be', a: ['están'], en: 'Do you all feel at home in Bogotá, or do you miss the coast?', why: 'Estar amañado is to feel at home. Ustedes takes the third person plural: están.' },

    // Pilas y papaya
    { c: 'idiom-papaya', at: ['dar papaya', 'Meaning'], s: 'En{on} el{the|m} bus{bus|m}, no{don’t} ___ papaya{papaya|f}: guarda{put away} el{the|m} celular{phone|m}.', base: 'dar', hint: 'tú', gloss: 'to give', a: ['des'], en: 'On the bus, don’t make yourself a target: put your phone away.', why: 'Dar papaya is to make yourself an easy target. A negative command uses the subjunctive: no des.' },
    { c: 'idiom-papaya', at: ['dar papaya', 'Meaning'], s: 'Dejé{I left} la{the|f} bicicleta{bike|f} sin{without} candado{lock|m}; ___ papaya{papaya|f} y{and} me{from me} la{it|f} robaron{they stole}.', base: 'dar', hint: 'yo, pret.', gloss: 'to give', a: ['di'], en: 'I left my bike unlocked; I made it easy for them and they stole it.', why: 'Dar papaya is to make yourself an easy target. The preterite of dar for yo is di, with no accent.' },
    { c: 'idiom-papaya', at: ['dar papaya', 'Meaning'], s: 'Mi{my} mamá{mom|f} siempre{always} me{me} dice{tells} que{that} no{not} ___ papaya{papaya|f}.', base: 'dar', hint: 'yo', gloss: 'to give', a: ['dé'], en: 'My mom always tells me not to make myself a target.', why: 'Dar papaya is to make yourself an easy target. Decir que used as an instruction takes the subjunctive: que no dé.' },
    { c: 'idiom-papaya', at: ['ponerse las pilas', 'Meaning'], s: 'Oye{hey}, ___ las{the|f.pl} pilas{batteries|f.pl}, que{because} el{the|m} examen{exam|m} es{is} mañana{tomorrow}.', base: 'ponerse', hint: 'tú', gloss: 'to put on', a: ['ponte'], en: 'Hey, get your act together, the exam is tomorrow.', why: 'Ponerse las pilas is to get moving. The tú command of poner is irregular, pon, and the pronoun attaches: ponte.' },
    { c: 'idiom-papaya', at: ['ponerse las pilas', 'Meaning'], s: 'Al{at the} final{end|m} del{of the|m} semestre{semester|m}, Andrés{Andrés} se{himself} ___ las{the|f.pl} pilas{batteries|f.pl} y{and} pasó{passed} todo{everything}.', base: 'poner', gloss: 'to put', a: ['puso'], en: 'At the end of the semester Andrés got his act together and passed everything.', why: 'Ponerse las pilas is to get moving. Poner has the irregular preterite stem pus-, so él puso.' },
    { c: 'idiom-papaya', at: ['estar pilas', 'Meaning'], s: '___ pilas{alert (lit. batteries)} con{with} el{the|m} bolso{bag|m}, que{because} aquí{here} roban{they steal} mucho{a lot}.', base: 'estar', hint: 'ustedes', gloss: 'to be', a: ['Estén', 'estén'], en: 'Keep an eye on your bags, there’s a lot of theft around here.', why: 'Estar pilas is to be alert. A command to ustedes uses the subjunctive form: estén.' },
    { c: 'idiom-papaya', at: ['ser un avión', 'Meaning'], s: 'Tu{your} hermano{brother|m} ___ un{a|m} avión{plane|m}: siempre{always} consigue{gets} lo_que{what} quiere{he wants}.', base: 'ser', gloss: 'to be', a: ['es'], en: 'Your brother is really sharp: he always gets what he wants.', why: 'Ser un avión is to be sharp and sly. It describes who he is, so ser in the present: es.' },
    { c: 'idiom-papaya', at: ['hacerse el loco', 'Meaning'], s: 'Le{him} pedí{I asked for} la{the|f} plata{money|f} que{that} me{me} debe{he owes} y{and} se{himself} ___ el{the|m} loco{crazy one|m}.', base: 'hacer', gloss: 'to make, do', a: ['hizo'], en: 'I asked him for the money he owes me and he played dumb.', why: 'Hacerse el loco is to pretend not to notice. The preterite of hacer for él is hizo, with a z.' },
    { c: 'idiom-papaya', at: ['hacerse el loco', 'Meaning'], s: 'Cuando{when} llega{arrives} la{the|f} cuenta{bill|f}, Marta{Marta} siempre{always} se{herself} hace{makes} la{the|f} ___.', base: 'loco', gloss: 'crazy', a: ['loca'], en: 'When the bill comes, Marta always pretends not to notice.', why: 'Hacerse el loco is to play dumb. Marta is a woman, so it becomes hacerse la loca.' },
    { c: 'idiom-papaya', at: ['hacerse el de las gafas', 'Meaning'], s: 'Vi{I saw} a{(to)} mi{my} ex{ex} en{at} la{the|f} fiesta{party|f}, pero{but} me{myself} ___ el{the one} de{with} las{the|f.pl} gafas{glasses|f.pl}.', base: 'hacer', hint: 'yo, pret.', gloss: 'to make, do', a: ['hice'], en: 'I saw my ex at the party, but I pretended I hadn’t seen them.', why: 'Hacerse el de las gafas is to pretend you didn’t see. The preterite of hacer for yo is hice.' },
    { c: 'idiom-papaya', at: ['sapear', 'Meaning'], s: 'Si{if} ___ a{(to)} tus{your} compañeros{classmates|m.pl}, nadie{nobody} va{is going} a{to} confiar{trust} en{in} ti{you}.', base: 'sapear', hint: 'tú', gloss: 'to snitch on', a: ['sapeas'], en: 'If you snitch on your classmates, nobody will trust you.', why: 'Sapear is to snitch. After si the present is used, and tú of an -ar verb ends in -as.' },
    { c: 'idiom-papaya', at: ['abrirse', 'Meaning'], s: 'Ya{already} es{it is} tarde{late}, parceros{mates|m.pl}; yo{I} me{myself} ___.', base: 'abrir', gloss: 'to open', a: ['abro'], en: 'It’s late, guys; I’m off.', why: 'Abrirse is to leave. Yo in the present of an -ir verb ends in -o: me abro.' },

    // Camello y garra
    { c: 'idiom-camello', at: ['camellar', 'Meaning'], s: 'Mi{my} papá{dad|m} ___ de{from} lunes{Monday|m} a{to} sábado{Saturday|m} en{in} una{a|f} fábrica{factory|f}.', base: 'camellar', gloss: 'to work (hard)', a: ['camella'], en: 'My dad works Monday to Saturday in a factory.', why: 'Camellar is to work. It is a routine, so the present, and él of an -ar verb ends in -a.' },
    { c: 'idiom-camello', at: ['camellar', 'Meaning'], s: 'Cuando{when} vivía{I lived} en{in} Cali{Cali}, ___ en{in} un{a|m} restaurante{restaurant|m}.', base: 'camellar', hint: 'yo, imperf.', gloss: 'to work (hard)', a: ['camellaba'], en: 'When I lived in Cali, I worked in a restaurant.', why: 'Camellar is to work. An ongoing situation in the past takes the imperfect: yo camellaba.' },
    { c: 'idiom-camello', at: ['ser un camello', 'Meaning'], s: 'Ese{that|m} trasteo{house move|m} ___ un{a|m} camello{camel|m}: tres{three} pisos{floors|m.pl} sin{without} ascensor{elevator|m}.', base: 'ser', hint: 'pret.', gloss: 'to be', a: ['fue'], en: 'That move was a nightmare: three floors with no elevator.', why: 'Ser un camello is to be a tough job. The move is finished, so the preterite of ser: fue.' },
    { c: 'idiom-camello', at: ['ser un camello', 'Meaning'], s: 'Terminar{finishing} este{this|m} proyecto{project|m} a{on} tiempo{time|m} ___ un{a|m} camello{camel|m}.', base: 'ser', hint: 'futuro', gloss: 'to be', a: ['será', 'va a ser'], en: 'Finishing this project on time is going to be tough.', why: 'Ser un camello is to be a tough job. It hasn’t happened yet, so the future: será.' },
    { c: 'idiom-camello', at: ['darse garra', 'Meaning'], s: 'Los{the|m.pl} jugadores{players|m.pl} se{themselves} ___ garra{claw|f} y{and} ganaron{won} el{the|m} partido{match|m}.', base: 'dar', gloss: 'to give', a: ['dieron'], en: 'The players gave it everything and won the match.', why: 'Darse garra is to give it everything. The preterite of dar for ellos is dieron.' },
    { c: 'idiom-camello', at: ['darse garra', 'Meaning'], s: 'Vamos{come on}, muchachos{guys|m.pl}, ___ garra{claw|f}, que{because} ya{already} casi{almost} terminamos{we finish}.', base: 'darse', hint: 'ustedes', gloss: 'to give yourselves', a: ['dense', 'dénse'], en: 'Come on, guys, give it everything, we’re almost done.', why: 'Darse garra is to give it everything. The ustedes command of dar is den, and the pronoun se attaches: dense.' },
    { c: 'idiom-camello', at: ['ser un berraco', 'Meaning'], s: 'Mi{my} abuela{grandmother|f} es{is} una{a|f} ___: crió{she raised} a{(to)} ocho{eight} hijos{children|m.pl} sola{alone|f}.', base: 'berraco', gloss: 'tough, gutsy person', a: ['berraca'], en: 'My grandmother is a tough woman: she raised eight children on her own.', why: 'Ser un berraco is to be tough and brave. For a woman it becomes una berraca.' },
    { c: 'idiom-camello', at: ['ser un berraco', 'Meaning'], s: 'Tú{you} ___ un{a|m} berraco{star|m} para{at} las{the|f.pl} matemáticas{maths|f.pl}.', base: 'ser', gloss: 'to be', a: ['eres'], en: 'You’re brilliant at maths.', why: 'Ser un berraco para is to be great at something. Tú of ser is eres.' },
    { c: 'idiom-camello', at: ['estar mamado', 'Meaning'], s: 'Después_de{after} doce{twelve} horas{hours|f.pl} de{of} turno{shift|m}, los{the|m.pl} enfermeros{nurses|m.pl} están{are} ___.', base: 'mamado', gloss: 'exhausted', a: ['mamados'], en: 'After a twelve-hour shift, the nurses are exhausted.', why: 'Estar mamado is to be worn out. Enfermeros is masculine plural, so mamados.' },
    { c: 'idiom-camello', at: ['voltear', 'Meaning'], s: 'Ayer{yesterday} ___ todo{all|m} el{the|m} día{day|m} haciendo{doing} vueltas{errands|f.pl}.', base: 'voltear', hint: 'yo, pret.', gloss: 'to turn around', a: ['volteé'], en: 'Yesterday I spent the whole day running errands.', why: 'Voltear is to run around doing errands. Yo in the preterite of an -ar verb ends in -é: volteé.' },
    { c: 'idiom-camello', at: ['ponerse la camiseta', 'Meaning'], s: 'Todos{everyone|m.pl} en{in} la{the|f} empresa{company|f} se{themselves} ___ la{the|f} camiseta{shirt|f} para{for} el{the|m} lanzamiento{launch|m}.', base: 'poner', gloss: 'to put', a: ['pusieron'], en: 'Everyone at the company went all in for the launch.', why: 'Ponerse la camiseta is to commit to the team. The preterite of poner is irregular: ellos pusieron.' },
    { c: 'idiom-camello', at: ['sudar la gota gorda', 'Meaning'], s: 'Para{to} pagar{pay for} la{the|f} universidad{university|f}, ___ la{the|f} gota{drop|f} gorda{fat|f}.', base: 'sudar', hint: 'yo, pret.', gloss: 'to sweat', a: ['sudé'], en: 'I sweated blood to pay for university.', why: 'Sudar la gota gorda is to work extremely hard. Yo in the preterite of an -ar verb ends in -é: sudé.' },

    // Piedra y líos
    { c: 'idiom-piedra', at: ['sacar la piedra', 'Meaning'], s: 'Me{me} ___ la{the|f} piedra{stone|f} que{that} la{the|f} gente{people|f} se{itself} cuele{cuts in} en{in} la{the|f} fila{line|f}.', base: 'sacar', gloss: 'to take out', a: ['saca'], en: 'It makes me angry when people cut in line.', why: 'Sacar la piedra is to make someone angry. The subject is the whole que clause, which counts as singular: saca.' },
    { c: 'idiom-piedra', at: ['sacar la piedra', 'Meaning'], s: 'No{don’t} me{me} ___ la{the|f} piedra{stone|f}, que{because} hoy{today} no{not} estoy{I am} de{in the} humor{mood|m}.', base: 'sacar', hint: 'tú', gloss: 'to take out', a: ['saques'], en: 'Don’t make me angry, I’m not in the mood today.', why: 'Sacar la piedra is to make someone angry. A negative command uses the subjunctive, and c changes to qu before e: saques.' },
    { c: 'idiom-piedra', at: ['estar piedro', 'Meaning'], s: 'La{the|f} profesora{teacher|f} está{is} ___ porque{because} nadie{nobody} hizo{did} la{the|f} tarea{homework|f}.', base: 'piedro', gloss: 'angry', a: ['piedra'], en: 'The teacher is angry because nobody did the homework.', why: 'Estar piedro is to be angry. Profesora is feminine, so piedra.' },
    { c: 'idiom-piedra', at: ['dar lora', 'Meaning'], s: 'Los{the|m.pl} vecinos{neighbours|m.pl} ___ lora{parrot|f} con{with} la{the|f} música{music|f} hasta{until} las{the|f.pl} cuatro{four}.', base: 'dar', hint: 'pret.', gloss: 'to give', a: ['dieron'], en: 'The neighbours were a nuisance with their music until four.', why: 'Dar lora is to be a nuisance. The preterite of dar for ellos is dieron.' },
    { c: 'idiom-piedra', at: ['dar lora', 'Meaning'], s: 'Niños{kids|m.pl}, no{don’t} ___ lora{parrot|f}, que{because} su{your} papá{dad|m} está{is} durmiendo{sleeping}.', base: 'dar', hint: 'ustedes', gloss: 'to give', a: ['den'], en: 'Kids, don’t make a racket, your dad is sleeping.', why: 'Dar lora is to be a nuisance. A negative command to ustedes uses the subjunctive: no den.' },
    { c: 'idiom-piedra', at: ['mamar gallo', 'Meaning'], s: 'Mi{my} tío{uncle|m} siempre{always} nos{us} ___ gallo{rooster|m} en{at} las{the|f.pl} reuniones{gatherings|f.pl} familiares{family|f.pl}.', base: 'mamar', gloss: 'to suck', a: ['mama'], en: 'My uncle always teases us at family gatherings.', why: 'Mamar gallo is to tease. A habit takes the present, and él of an -ar verb ends in -a.' },
    { c: 'idiom-piedra', at: ['mamar gallo', 'Meaning'], s: '¿En_serio{seriously} te{yourself} ganaste{you won} la{the|f} lotería{lottery|f} o{or} me{me} estás{you are} ___ gallo{rooster|m}?', base: 'mamar', gloss: 'to suck', a: ['mamando'], en: 'Did you really win the lottery, or are you pulling my leg?', why: 'Mamar gallo is to joke around. Estar + gerund describes what is happening right now: estás mamando.' },
    { c: 'idiom-piedra', at: ['estar en la olla', 'Meaning'], s: 'Desde{since} que{that} perdí{I lost} el{the|m} trabajo{job|m}, ___ en{in} la{the|f} olla{pot|f}.', base: 'estar', hint: 'yo', gloss: 'to be', a: ['estoy'], en: 'Since I lost my job, I’ve been broke.', why: 'Estar en la olla is to be in a bad way, often broke. The situation continues now, so the present: estoy.' },
    { c: 'idiom-piedra', at: ['estar en la olla', 'Meaning'], s: 'Cuando{when} llegamos{we arrived} a{to} Bogotá{Bogotá}, ___ en{in} la{the|f} olla{pot|f}, pero{but} ahora{now} nos{for us} va{it goes} bien{well}.', base: 'estar', hint: 'nosotros', gloss: 'to be', a: ['estábamos'], en: 'When we arrived in Bogotá we were broke, but now we’re doing well.', why: 'Estar en la olla is to be in a bad way. It describes a background situation in the past, so the imperfect: estábamos.' },
    { c: 'idiom-piedra', at: ['llevar del bulto', 'Meaning'], s: 'En{in} la{the|f} pelea{fight|f}, el{the one|m} que{who} ___ del{from the|m} bulto{sack|m} fue{was} mi{my} primo{cousin|m}.', base: 'llevar', gloss: 'to carry', a: ['llevó'], en: 'In the fight, the one who got the worst of it was my cousin.', why: 'Llevar del bulto is to get the worst of it. A single finished event takes the preterite: llevó.' },
    { c: 'idiom-piedra', at: ['hacer el oso', 'Meaning'], s: 'Anoche{last night} ___ el{the|m} oso{bear|m}: me{myself} caí{I fell} bailando{dancing} en{at} el{the|m} matrimonio{wedding|m}.', base: 'hacer', hint: 'yo, pret.', gloss: 'to make, do', a: ['hice'], en: 'Last night I made a fool of myself: I fell over dancing at the wedding.', why: 'Hacer el oso is to embarrass yourself. The preterite of hacer for yo is hice.' },
    { c: 'idiom-piedra', at: ['echar carreta', 'Meaning'], s: 'Ese{that|m} político{politician|m} ___ mucha{a lot of|f} carreta{cart|f}, pero{but} no{not} hace{does} nada{anything}.', base: 'echar', gloss: 'to throw', a: ['echa'], en: 'That politician talks a lot of nonsense, but he doesn’t do anything.', why: 'Echar carreta is to talk nonsense. It describes what he usually does, so the present: echa.' },

    // Amor y levante
    { c: 'idiom-perros', at: ['echar los perros', 'Meaning'], s: 'Felipe{Felipe} me{me} ___ los{the|m.pl} perros{dogs|m.pl} toda{all|f} la{the|f} noche{night|f} en{at} la{the|f} fiesta{party|f}.', base: 'echar', gloss: 'to throw', a: ['echó'], en: 'Felipe was hitting on me all night at the party.', why: 'Echar los perros is to flirt with someone. The party is over, so the preterite: echó.' },
    { c: 'idiom-perros', at: ['echar los perros', 'Meaning'], s: '¿Por_qué{why} no{not} le{her} ___ los{the|m.pl} perros{dogs|m.pl} a{to} Camila{Camila}? Se{it} nota{shows} que{that} te{you} gusta{you like her}.', base: 'echar', hint: 'tú', gloss: 'to throw', a: ['echas'], en: 'Why don’t you ask Camila out? It’s obvious you like her.', why: 'Echar los perros is to flirt with someone. A suggestion with por qué no uses the present: tú echas.' },
    { c: 'idiom-perros', at: ['levantar', 'Meaning'], s: 'Diego{Diego} ___ en{at} la{the|f} rumba{party|f} del{of the|m} sábado{Saturday|m}.', base: 'levantar', gloss: 'to lift', a: ['levantó'], en: 'Diego pulled at the party on Saturday.', why: 'Levantar is to get a date or hook up. A finished event on Saturday takes the preterite: levantó.' },
    { c: 'idiom-perros', at: ['levantar', 'Meaning'], s: 'Con{with} esa{that|f} pinta{outfit|f}, seguro{surely} que{that} ___ esta{this|f} noche{night|f}.', base: 'levantar', hint: 'tú', gloss: 'to lift', a: ['levantas', 'levantarás', 'vas a levantar'], en: 'Dressed like that, you’re sure to pull tonight.', why: 'Levantar is to get a date. The present often stands in for a near future: tú levantas.' },
    { c: 'idiom-perros', at: ['cuadrarse', 'Meaning'], s: 'Después_de{after} tres{three} meses{months|m.pl} saliendo{going out}, por_fin{finally} nos{ourselves} ___.', base: 'cuadrar', hint: 'pret.', gloss: 'to square up', a: ['cuadramos'], en: 'After three months of going out, we finally made it official.', why: 'Cuadrarse is to become a couple. Nos shows the subject is nosotros, and the preterite of an -ar verb is -amos.' },
    { c: 'idiom-perros', at: ['cuadrarse', 'Meaning'], s: '¿Ya{already} te{yourself} ___ con{with} Sebastián{Sebastián} o{or} solo{just} están{you are} saliendo{going out}?', base: 'cuadrar', hint: 'tú, pret.', gloss: 'to square up', a: ['cuadraste'], en: 'Are you and Sebastián official yet, or just dating?', why: 'Cuadrarse is to become a couple. Tú in the preterite of an -ar verb ends in -aste.' },
    { c: 'idiom-perros', at: ['estar tragado', 'Meaning'], s: 'Mateo{Mateo} ___ tragadísimo{totally smitten} de{with} su{his} vecina{neighbour|f}.', base: 'estar', gloss: 'to be', a: ['está'], en: 'Mateo is completely head over heels for his neighbour.', why: 'Estar tragado is to be head over heels. It is a state, so estar: él está.' },
    { c: 'idiom-perros', at: ['estar tragado', 'Meaning'], s: 'Mi{my} hermana{sister|f} está{is} ___ de{with} un{a|m} compañero{classmate|m} de{from} la{the|f} universidad{university|f}.', base: 'tragado', gloss: 'smitten (lit. swallowed)', a: ['tragada'], en: 'My sister is head over heels for a classmate from university.', why: 'Estar tragado is to be head over heels. Hermana is feminine, so tragada.' },
    { c: 'idiom-perros', at: ['dar un pico', 'Meaning'], s: 'Al{on} despedirse{saying goodbye}, ella{she} le{him} ___ un{a|m} pico{peck|m}.', base: 'dar', gloss: 'to give', a: ['dio'], en: 'When they said goodbye, she gave him a quick kiss.', why: 'Dar un pico is to give a quick kiss. The preterite of dar for ella is dio, with no accent.' },
    { c: 'idiom-perros', at: ['poner los cachos', 'Meaning'], s: 'Terminaron{they broke up} porque{because} él{he} le{her} ___ los{the|m.pl} cachos{horns|m.pl} con{with} su{her} mejor{best} amiga{friend|f}.', base: 'poner', gloss: 'to put', a: ['puso'], en: 'They broke up because he cheated on her with her best friend.', why: 'Poner los cachos is to cheat on someone. The preterite of poner is irregular: él puso.' },
    { c: 'idiom-perros', at: ['poner los cachos', 'Meaning'], s: 'Ojalá{I hope} nunca{never} me{me} ___ los{the|m.pl} cachos{horns|m.pl}.', base: 'poner', hint: 'tú', gloss: 'to put', a: ['pongas'], en: 'I hope you never cheat on me.', why: 'Poner los cachos is to cheat on someone. Ojalá always takes the subjunctive: tú pongas.' },
    { c: 'idiom-perros', at: ['dejar metido', 'Meaning'], s: 'Quedamos{we agreed} a{at} las{the|f.pl} ocho{eight} y{and} me{me} ___ metido{stuck} una{an|f} hora{hour|f}.', base: 'dejar', hint: 'él, pret.', gloss: 'to leave', a: ['dejó'], en: 'We agreed on eight o’clock and he left me waiting for an hour.', why: 'Dejar metido is to stand someone up. The preterite of an -ar verb for él ends in -ó: dejó.' },
  ],
};
