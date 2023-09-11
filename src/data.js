import image from "./image/clothes.jpg"
import image2 from './image/accesories.jpg'

export const cartegories = [
  {
    id: 1,
    title: "Clothes",
    img: image,
  },

  {
    id: 2,
    title: "Accessories",
    img: image2,
  },
];

export const reviews = [
  {
    id: 1,
    img: "./assets/customer1.jpg",
    review:
      "Xea is a customer service that everyone should strive too be,shipping is fast and always easy thanks for being an amazing company who cares about people",
    name: "Ayo Makun",
    location: "Lagos,Nigeria",
  },
  {
    id: 2,
    img: "./assets/customer2.jpg",
    review: "I just recived my red vale shoes, thanks for delivering on time",
    name: "Ijeoma Ken",
    location: "Asaba,Nigeria",
  },
  {
    id: 3,
    img: "./assets/customer3.jpg",
    review:
      "i will like to commend your team for the great customer service, you have definatly set the standard.",
    name: "ChiChi",
    location: "Rabat",
  },
];

export default reviews;
