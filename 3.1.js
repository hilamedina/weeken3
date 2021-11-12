function GrowthOfpopulation(p0, percent, aug ,p){
    let people = p0;
    let i = 0;
    for (i = 0; people < p; i++){
        people += (people * (percent / 100) + aug);  
    }
    return i; 
}
console.log(GrowthOfpopulation(1500, 5, 100, 5000));
console.log(GrowthOfpopulation(1500000, 2.5, 10000, 2000000));