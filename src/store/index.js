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
          text: "La paperella di gomma è diventata il mio strumento di debugging preferito. Spiegare i problemi al mio 'assistente' silenzioso mi ha aiutato a risolvere bug che altrimenti mi avrebbero fatto impazzire. È anche un ottimo antistress nelle giornate difficili!",
          customer: "David William",
          date: "Feb 22, 2023",
        },
        {
          text: "Non avrei mai immaginato quanto una semplice paperella di gomma potesse fare la differenza. È incredibile come verbalizzare i problemi davanti alla paperella mi aiuti a vedere soluzioni che prima non notavo. Inoltre, è carinissima sulla mia scrivania!",
          customer: "Emma Turner",
          date: "April 5, 2023",
        },
        {
          text: "Da quando ho adottato la paperella di gomma, il mio processo di debugging è migliorato notevolmente. La trovo molto utile per schiarirmi le idee e trovare errori nascosti. La porto sempre con me, ovunque vada!",
          customer: "Rachel Bryan",
          date: "April 18, 2023",
        },
        {
          text: "La mia paperella di gomma è il miglior collega che potessi chiedere. Sempre pronta ad ascoltare, mai giudicante. È sorprendente come qualcosa di così semplice possa essere così efficace nel risolvere problemi complessi. E non dimentichiamo che è anche adorabile!",
          customer: "Park C",
          date: "May 22, 2023",
        },
      ],
    },
    {
      current: 3,
      name: "Products",
      title: "La Collezione Di Paperelle",
      ducks: [
        {
          img: "product-item1.png",
          price: "15",
          name: "Cool Duck",
        },
        {
          img: "product-item2.png",
          price: "29",
          name: "Classic Duck",
        },
        {
          img: "product-item3.png",
          price: "69",
          name: "BatDuck",
        },
      ],
    },
    {
      current: 4,
      name: "FAQs",
      title: "FAQs",
      FAQs: [
        {
          question:
            "Come posso utilizzare la paperella di gomma per il debugging?",
          answer:
            "Il rubber duck debugging è semplice: spiega il tuo codice alla paperella di gomma come se fosse un collega. Descrivendo ogni passo, potresti individuare errori o capire meglio il problema. La paperella non risponde, ma ti aiuta a chiarire i tuoi pensieri.",
        },
        {
          question:
            "Quali sono i vantaggi di usare una paperella di gomma per i programmatori?",
          answer:
            "La paperella di gomma aiuta i programmatori a pensare in modo critico e a verbalizzare i problemi. Questo processo può portare a nuove intuizioni e soluzioni. Inoltre, è un ottimo strumento antistress e aggiunge un tocco di personalità alla scrivania.",
        },
        {
          question:
            "Posso usare la paperella di gomma indipendentemente dal linguaggio di programmazione che utilizzo?",
          answer:
            "Assolutamente sì! La paperella di gomma è universale e funziona con qualsiasi linguaggio di programmazione. Non importa se stai scrivendo in Python, Java, C++ o qualsiasi altro linguaggio, la paperella sarà sempre pronta ad ascoltarti.",
        },
        {
          question:
            "Quanto dettagliatamente devo spiegare il mio codice alla paperella di gomma?",
          answer:
            "Dovresti spiegare ogni dettaglio del tuo codice. Più sei dettagliato, più è probabile che tu scopra errori o ottenga nuove prospettive. Questo processo ti costringe a rivedere attentamente ogni parte del tuo lavoro.",
        },
      ],
      Cards: [
        {
          title: "100% Prodotto Di Qualità",
          text: "Abbiamo anche la possibilità di ritiro direttamente dallo stagno",
          icon: "balloon",
        },
        {
          title: "Spedizione Gratuita",
          text: "Dal magazzino alla scrivania",
          icon: "bag-heart",
        },
        {
          title: "Rimborso Gratuito",
          text: "Ti riimborsiamo se la paperella fa quack",
          icon: "handiplast",
        },
      ],
    },
    {
      current: 5,
      name: "subscribe",
      title: "ISCRIVITI PER RIMANERE AGGIORNATO",
      text: "Iscriviti alla nostra newsletter per rimanere aggiornato su sconti e novità.",
      icons: [
        { icon: "facebook" },
        { icon: "twitter" },
        { icon: "instagram"},
        { icon: "linkedin"},
        { icon: "youtube"},
      ],
    },
  ],
});
