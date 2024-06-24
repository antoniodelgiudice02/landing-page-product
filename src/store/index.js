import { reactive } from "vue";

export const store = reactive({
  sections: [
    {
      current: 0,
      name: "jumbo",
      title: "Rubber Duck Debuggings",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus totam quibusdam quae quaerat neque veritatis officiis assumenda recusandae, similique, voluptate culpa maiores consectetur iste repellendus consequatur enim placeat ipsa expedita.",
    },
    {
      current: 1,
      name: "About",
      
    },
    {
      current: 2,
      name: "Testimonials",
      title: "Cosa Ne Pensano I Nostri Sviluppatori",
      testimonials: [
        {
            text: 'La paperella di gomma è diventata il mio strumento di debugging preferito. Spiegare i problemi al mio \'assistente\' silenzioso mi ha aiutato a risolvere bug che altrimenti mi avrebbero fatto impazzire. È anche un ottimo antistress nelle giornate difficili!',
            customer: 'David William',
            date: 'Feb 22, 2023'
        },
        {
            text: 'Non avrei mai immaginato quanto una semplice paperella di gomma potesse fare la differenza. È incredibile come verbalizzare i problemi davanti alla paperella mi aiuti a vedere soluzioni che prima non notavo. Inoltre, è carinissima sulla mia scrivania!',
            customer: 'Emma Turner',
            date: 'April 5, 2023'
        },
        {
            text: 'Da quando ho adottato la paperella di gomma, il mio processo di debugging è migliorato notevolmente. La trovo molto utile per schiarirmi le idee e trovare errori nascosti. La porto sempre con me, ovunque vada!',
            customer: 'Rachel Bryan',
            date: 'April 18, 2023'
        },
        {
            text: 'La mia paperella di gomma è il miglior collega che potessi chiedere. Sempre pronta ad ascoltare, mai giudicante. È sorprendente come qualcosa di così semplice possa essere così efficace nel risolvere problemi complessi. E non dimentichiamo che è anche adorabile!',
            customer: 'Park C',
            date: 'May 22, 2023'
        }
      ]
      
    },
    {
        current: 3,
        name: "Products",
        title: "La Collezione Di Paperelle",
        ducks: [
          {
              img: 'product-item1.png',
              price: '15',
              name: 'Cool Duck'
          },
          {
              img: 'product-item2.png',
              price: '29',
              name: 'Classic Duck'
          },
          {
              img: 'product-item3.png',
              price: '69',
              name: 'BatDuck'
          },
        ]
        
      },
  ],
});
