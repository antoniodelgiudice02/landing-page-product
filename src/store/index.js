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
      name: "services",
      
    },
    {
      current: 2,
      name: "whyus",
      title: "PERCHÈ NOI?",
      
    },
  ],
});
