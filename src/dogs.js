const Queue = require('./Queue');

const dogQueue = new Queue();

const dogs = [
  {
    imageURL:
			'https://www.strawfordogs.org/wp-content/uploads/2016/11/S4D-Bo-with-toys-300x300.jpg',
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
			'https://www.allseasonsccc.com/wp-content/uploads/dog-14-300x300.jpg',
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
			'https://myshilohvet.com/wp-content/uploads/2018/03/canine-rehab_preview-300x300.jpeg',
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
			'http://www.mutkut.com/wp-content/uploads/2015/12/boston-300x300.jpg',
    imageDescription:
			'A smiling golden-brown golden retreiver listening to music.',
    name: 'Hades',
    sex: 'Female',
    age: 4,
    breed: 'Auburn Retriever',
    story: 'Mike Vic... Need I say more?',
    adopter: null
  },
  {
    imageURL:
			'http://www.mutkut.com/wp-content/uploads/2015/12/spaniel-cocker-300x300.jpg',
    imageDescription:
			'A smiling golden-brown golden retreiver listening to music.',
    name: 'Butch',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
    adopter: null
  },
  {
    imageURL:
			'https://www.allseasonsccc.com/wp-content/uploads/dog-14-300x300.jpg',
    imageDescription:
			'A smiling golden-brown golden retreiver listening to music.',
    name: 'Randy',
    sex: 'Female',
    age: 2,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
    adopter: null
  },
  {
    imageURL:
			'http://www.mutkut.com/wp-content/uploads/2015/12/setter-300x300.jpg',
    imageDescription:
			'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zoomer',
    sex: 'Male',
    age: 1,
    breed: 'Golden Retriever',
    story: 'Owner moved away',
    adopter: null
  },
  {
    imageURL:
			'http://www.mutkut.com/wp-content/uploads/2015/12/Shichon-Dog-300x300.jpg',
    imageDescription:
			'A smiling golden-brown golden retreiver listening to music.',
    name: 'Tyler',
    sex: 'Female',
    age: 4,
    breed: 'Auburn Retriever',
    story: 'Mike Vic... Need I say more?',
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
