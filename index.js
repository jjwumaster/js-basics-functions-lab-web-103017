// Code your solution in this file!

function distanceFromHqInBlocks(distance){
  return Math.abs(distance - 42)
};

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264
};

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * 264
};

function calculatesFarePrice(start, destination){
  const distance = Math.abs(start - destination) * 264;
  let fare = 0;
  switch (true) {
    case (distance <= 400):
      return fare;
    case (distance > 400 && distance <= 2000):
      return distance * 0.02;
    case (distance > 2000 && distance < 2500):
      return 25;
    case (distance > 2500):
      return 'cannot travel that far';
  };
};
