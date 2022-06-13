// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(firstTwo){
   return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(lastTwo){
    return drivers.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(integer){
    return function(){
        return integer* integer;
    }
}
let fareDoubler = fare => fare*2;
let fareTripler = fare => fare*3;
 

function selectDifferentDrivers (drivers, selectingDrivers){
return selectingDrivers()
}
