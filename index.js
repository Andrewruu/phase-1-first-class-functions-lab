// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(name){
    const x = function(y=name){
        let driver =  y.slice(0,2);
        return driver;
    };
    return x();
    
}
function returnLastTwoDrivers(name){
    const x = function(y = name){ 
        let driver = y.slice(drivers.length-2,drivers.length)
        return driver;
    };
    return x();
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(x){
    const theFare = fare => fare * x;
    return theFare;
}

function fareDoubler(x){
    const doubleing = createFareMultiplier(2);
    return doubleing(x);
}

function fareTripler(x){
    const trip = createFareMultiplier(3);
    return trip(x);
}
function selectDifferentDrivers(names,driver){
    return driver(names);
}

