/*
input: 2 arrs of arr pairs [startTime, endTime], dur
output: arr of pair [startTime, endTime] of overlap

let slotsAPointer = 0
let slotsBPointer = 0

while slotsAPointer < slotsA.length && slotsBPointer < slotsB.length
find availability
find the bigger startTime
find the lesser endTime

if availability is less than dur
increment pointer with lesser endtime

if availability is >= dur
return [biggerStartTime, biggerStartTime + dur]

else return []

walk thru

aPointer = 0
bPointer = 0

biggerStart = 10
smallerEnd = 15
avail = 5
b++

aPointer = 0
bPointer = 1

biggerStart = 60
lesserEnd = 50
avail = -10
a++

aPointer = 1
bPointer = 1

biggerStart = 60
lesserEnd = 70
avail = 10
return [60, 68]

*/

function meetingPlanner(slotsA, slotsB, dur) {
  let slotsAPointer = 0;
  let slotsBPointer = 0;

  while(slotsAPointer < slotsA.length && slotsBPointer < slotsB.length) {
    let biggerStartTime = Math.max(slotsA[slotsAPointer][0], slotsB[slotsBPointer][0])
    let smallerEndTime = Math.min(slotsA[slotsAPointer][1], slotsB[slotsBPointer][1])
    let availability = smallerEndTime - biggerStartTime;
    console.log('avail', availability)

    if(availability < dur) {
      if(slotsA[slotsAPointer][1] < slotsB[slotsBPointer][1]) slotsAPointer ++;
      else if(slotsB[slotsBPointer][1] < slotsA[slotsAPointer][1]) slotsBPointer ++;
      else return [];
    }

    if(availability >= dur) {
      return [biggerStartTime, biggerStartTime + dur]
    }
  }
  return []
}

var slotsA = [[7, 12]]
var slotsB = [[2, 11]]
var dur = 5

console.log(meetingPlanner(slotsA, slotsB, dur))