/*
inputs:
arr of distances-- city i is distances[i] aways from city i + 1
arr of fuel available at each city -- fuel[i] is the fuel available at city i
positive int val for MPG
//last city connected to the first
//total amt of fuel from all cities is exact amt to travel distances bt all cities
//fuel tank always starts empty

output: index of the valid starting city

examples:
var dists = [5, 25, 15, 10, 15];
var fuel = [1, 2, 1, 0, 3]
var mpg = 10;

city[4] -> city[0]
3 gals -> uses 1.5 ->

city[0] -> city[1]
refills to 4.5 -> uses 0.5 ->

city[1] -> city[2]
refills to 6 -> uses 2.5 ->

city[2] -> city[3]
refills to 4.5 -> uses 1.5 ->

city[3] -> city[4]
refills to 3 -> uses 1 -> back to start with 2 left over

acc var stores running total of gas
accGas must be > dist/mpg

brute force
set accFuel to fuel[0]
//0
start at dist[0], fuel[0]
remainingFuel = fuel[0] - dist[0]/mpg -> 0.5
if remainingFuel >= 0 -> add fuel[1] to accFuel -> 2.5
else start at next city -> set accFuel to next city's Fuel

//1
remainingFuel = accFuel - dist[1]/mpg ->  2.5 - 2.5
remainingFuel >= 0 -> add fuel[2] to accFuel -> 1

//2
remainingFuel = accFuel - dist[2]/mpg -> 1 - 1.5
remainingFuel < 0 -> startIdx + 1

set startIdx = 0
set currIdx = 0
set counter = 1
while counter <= fuel.length
if counter === fuel.length -> return true;
if currIdx = fuel.length - 1 -> next = 0
calc remainingFuel for currIdx of dist and fuel
if remainingFuel >= 0
currIdx ++;
counter ++
else
startIdx ++
currIdx = startIdx
counter = 0
if startIdx = fuel.length - 1 return false;

//solution
keep track of miles at each city
how much gas * mpg

//city 0
0 miles coming in

//city 1
leftOverMiles = gas from prev * mpg - dist[prev]
10 - 5 = 5

//city 2
leftOverMiles += 2*10 - 25
5 += -5 -> 0

//city3
leftOverMiles += 1 * 10 - 15
0 += -5 -> -5

//city4
leftOverMiles += 0 * 10 - 10
-5 += -10 -> -15

//city 0
leftOverMiles += 3*10 - 15
-15 += 15 -> 0
*/

function calcGasUsed(accFuel, dists, mpg) {
  return accFuel - (dist/mpg)
}

function validStartingCity(dists, fuel, mpg, startingIdx) {
  let currIdx = startingIdx;
  let counter = 0;
  let accFuel = fuel[currIdx]
  while(counter <= fuel.length) {
    if(counter === fuel.length - 1) return startingIdx;
    if(currIdx === fuel.length - 1) currIdx = 0;
    const remainingFuel = accFuel - (dists[currIdx]/mpg)
    if(remainingFuel >= 0) {
      accFuel += remainingFuel;
      currIdx++;
      counter++;
    }
    else validStartingCity(dists, fuel, mpg, startingIdx++)
  }
}

function validStartingCity(dists, fuel, mpg) {
  const numOfCities = fuel.length;
  for(let startCityIdx = 0; i < numOfCities; i++) {
    milesRemaining = 0;
    for(let currCityIdx = startCityIdx, currCityIdx < startCityIdx + numOfCities; currCityIdx++) {
      if(milesRemaining < 0) continue;
      currCityIdx = currCityIdx % numOfCities
    }
  }
}

var dists = [30, 40, 10, 10, 17, 13, 50, 30, 10, 40];
var fuel = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var mpg = 25
console.log(validStartingCity(dists, fuel, mpg))