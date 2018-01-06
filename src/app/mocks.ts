import { Gem } from './gem'

export const GEMS:Gem[] = [{
    name: 'Circle Heart',
    description: "Inspired by Swarovski’s bestselling Circle Pendant, this simple yet romantic design is perfect for any outfit – and it makes a great gift too! The outer heart shows a shiny rose gold-plated metal surface, while the inner heart sparkles with clear crystals set in pavé. The pendant dangles on a smooth snake chain",
    quantity: 0,
    shine: 8,
    price: 990.00,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "/assets/images/Swarovski-Circle-Heart-Pendant-White-Rose-gold-plating-5127999.jpg",
      "/assets/images/gem-02.gif",
      "/assets/images/gem-05.gif",
      "/assets/images/gem-09.gif",
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@thomas.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@hater.com",
      createdOn: 1397490980837
      }]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    quantity: 0;
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
    "/assets/images/gem-01.gif",
    "/assets/images/gem-03.gif",
    "/assets/images/gem-04.gif",
    ],
    reviews: [{
      stars: 3,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@sausage.com",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@alyssaNicoll.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    quantity: 0,
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
    "/assets/images/gem-06.gif",
    "/assets/images/gem-07.gif",
    "/assets/images/gem-10.gif"
    ],
    reviews: [{
      stars: 1,
      body: "This gem is WAY too expensive for its rarity value.",
      author: "turtleguyy@zdn.me",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "BBW: High Shine != High Quality.",
      author: "LouisW407@gmail.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Don't waste your rubles!",
      author: "nat@flatland.com",
      createdOn: 1397490980837
    }]
  }];

