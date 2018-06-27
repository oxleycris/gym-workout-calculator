const weightsIncrement = 2.5;
const sets = 5;
const availableWeightsArray = [20, 10, 5, 2.5, 1.25];
const initialWeight = process.argv[2];
const percentageIncrease = process.argv[3];

let returnArray = [];
let workoutWeightsArray = [[initialWeight]];

for (let i = 1; i < sets; i++) {
    let nextWeight = workoutWeightsArray.slice(-1)[0] * ((100 + parseFloat(percentageIncrease)) / 100);
    let correctedNextWeight = Math.round(nextWeight / weightsIncrement) * weightsIncrement;

    workoutWeightsArray.push([correctedNextWeight.toFixed(1)]);
}

workoutWeightsArray.forEach(workoutWeight => {
    let sideWeightsArray = [workoutWeight];
    let singleSideWeight = (workoutWeight - 20) / 2;

    for (let i = 0; i < availableWeightsArray.length; i++) {
        let counter = 0;
        while (singleSideWeight > 0) {

            if (singleSideWeight - availableWeightsArray[counter] >= 0) {
                sideWeightsArray.push(availableWeightsArray[counter]);
                singleSideWeight -= availableWeightsArray[counter];
            }
            else {
                counter++;
            }

            if (singleSideWeight === 0) {
                returnArray.push(sideWeightsArray);

                break;
            }
        }
    }
});

console.log(returnArray);
