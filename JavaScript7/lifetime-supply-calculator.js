const calculateSupply = function (age, dayAmount) {
    maxAge = 90;
    x = (maxAge - age) * dayAmount * 365;
    lifetimeSupply = 'You will need ' + x + ' kapsalons to last you until the ripe old age of ' + maxAge + '!';
    console.log(lifetimeSupply);
}

calculateSupply(30, 1)