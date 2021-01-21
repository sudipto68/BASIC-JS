// problem 1 kilometer to meter
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Kilometer can't be minus value";
  } else {
    var meter = kilometer * 1000;
    return meter;
  }
}
var result = kilometerToMeter(2);
console.log(result);

// problem 2 budget calculator
function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {
  if (numberOfWatch < 0 || numberOfMobile < 0 || numberOfLaptop < 0) {
    return "Number of any Item can't be minus!";
  } else {
    var totalExpanse =
      numberOfWatch * 50 + numberOfMobile * 100 + numberOfLaptop * 500;
    return totalExpanse;
  }
}
var requiredBudget = budgetCalculator(1, 2, 2);
console.log(requiredBudget);

// problem 3 hotel cost
function hotelCost(days) {
  if (days < 0) {
    return "Number of Days can't be minus!";
  } else {
    if (days <= 10) {
      var totalCost = days * 100;
    } else if (days <= 20) {
      var firstTenDayCost = 10 * 100;
      var remainingDays = days - 10;
      var secondTenDayCost = remainingDays * 80;
      totalCost = secondTenDayCost + firstTenDayCost;
    } else {
      firstTenDayCost = 10 * 100;
      secondTenDayCost = 10 * 80;
      remainingDays = days - 20;
      totalCost = firstTenDayCost + secondTenDayCost + remainingDays * 50;
    }
    return totalCost;
  }
}

var totalHotelCost = hotelCost(20);
console.log(totalHotelCost);

// problem 4 mega friend
function megaFriend(friendList) {
  if (friendList.length <= 0) {
    return "List Can't be Empty";
  } else {
    var largeName = friendList[0];
    for (var i = 0; i < friendList.length; i++) {
      var currentName = friendList[i];
      if (currentName.length > largeName.length) {
        largeName = currentName;
      }
    }
    return largeName;
  }
}

var largestName = megaFriend(["Anik", "Sudipto", "Jhankar Mahbub", "Ripon"]);
console.log(largestName);
