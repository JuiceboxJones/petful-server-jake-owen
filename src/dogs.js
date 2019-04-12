const Queue = require('./Queue');

const dogQueue = new Queue();

const dogs = [
  {
    imageURL:
			'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
			'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
    adopter: null
  },
  {
    imageURL:
			'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
			'A smiling golden-brown golden retreiver listening to music.',
    name: 'Hera',
    sex: 'Female',
    age: 2,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
    adopter: null
  },
  {
    imageURL:
			'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
			'A smiling golden-brown golden retreiver listening to music.',
    name: 'Heph',
    sex: 'Male',
    age: 1,
    breed: 'Golden Retriever',
    story: 'Owner moved away',
    adopter: null
  },
  {
    imageURL:
			'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
			'A smiling golden-brown golden retreiver listening to music.',
    name: 'Hades',
    sex: 'Female',
    age: 4,
    breed: 'Auburn Retriever',
    story: 'Owner moved away',
    adopter: null
  }
];

function QueueDogs(dogs) {
  dogs.forEach(dog => {
    dogQueue.enqueue(dog);
  });
}

QueueDogs(dogs);

module.exports = dogQueue;