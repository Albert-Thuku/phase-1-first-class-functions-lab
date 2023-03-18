const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers(){
    return drivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(drivers));

function returnLastTwoDrivers(){
    return drivers.slice(2);
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](drivers));

function createFareMultiplier(){
    const fareMultiplier = function (num) {
        return num * num;
    }
    return fareMultiplier;
}
console.log(createFareMultiplier()(4));

function fareDoubler(num){
    return num*2;
}
console.log(fareDoubler(10));

function fareTripler(num){
    return num*3;
}
console.log(fareTripler(12));

function selectDifferentDrivers(arrayOfDrivers, func){
    if(func === returnFirstTwoDrivers){
        return arrayOfDrivers, returnFirstTwoDrivers();
    }if(func === returnLastTwoDrivers){
        return arrayOfDrivers, returnLastTwoDrivers();
    }
}
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));