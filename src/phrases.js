const phrases = [
    {
        id: 1,
        likelihoodNumber: 10,
        options: {
          // Options for different stake levels
          actions: ["raise", "lower"],
          // At which stakes this phrase is available
          options: [
            {
              id: 1,
              optionsString: "2",
              likelihoodNumber: 10,
            },
            {
              id: 2,
              optionsString: "5",
              likelihoodNumber: 8,
            },
            {
              id: 3,
              optionsString: "8",
              likelihoodNumber: 5,
            },
            {
              id: 4,
              optionsString: "10",
              likelihoodNumber: 2,
            },
          ],
        },
        say: function (option, action) {
          return `please ${action} the temperature by ${option} degrees.`;
        },
    },
    {
        id: 2,
        likelihoodNumber: 10, 
        say: "do the thing"
    },
    {
        id: 3,
        likelihoodNumber: 5, 
        say: "call your ex-boyfriend's mom's lawyer."
    },
    {
        id: 4,
        likelihoodNumber: 3, 
        say: "take me to the dark web."
    },
    {
        id: 5,
        likelihoodNumber: 10, 
        say: "is your refrigerator running?"
    },
    {
        id: 6,
        likelihoodNumber: 1, 
        say: "blah 1"
    },
    {
        id: 7,
        likelihoodNumber: 3, 
        say: "blah 3"
    },
    {
        id: 8,
        likelihoodNumber: 7, 
        say: "blah 7"
    },
    {
        id: 9,
        likelihoodNumber: 10, 
        say: "blah 10"
    },
    {
        id: 2,
        likelihoodNumber: 10,
        options: {
          // Options for different stake levels
          actions: ["on", "off"],
          // At which stakes this phrase is available
          options: [
            {
              id: 1,
              optionsString: "10",
              likelihoodNumber: 10,
            },
            {
              id: 2,
              optionsString: "20",
              likelihoodNumber: 8,
            },
            {
              id: 3,
              optionsString: "45",
              likelihoodNumber: 5,
            },
            {
              id: 4,
              optionsString: "60",
              likelihoodNumber: 2,
            },
          ],
        },
        say: function (option, action) {
          return `turn ${action} the tv in ${option} minutes.`;
        },
      },
]

console.log(phrases[0].getAction);
phrases[0].getAction;


// let randInt = Math.floor(Math.random() * phrases.length);

// console.log(randInt);
// console.log(phrases[randInt].say);


const getByLikelihood = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let printTimes = arr[i].likelihoodNumber;
        for (let j = 0; j < printTimes; j++) {
            newArr.push(arr[i].id);
        };
    };
    let randomIndex = Math.floor(Math.random() * newArr.length);
    let chosenId = newArr[randomIndex];
    return chosenId;
};


console.log(getByLikelihood(phrases));

let chosenIdNum = getByLikelihood(phrases);

console.log(chosenIdNum);

console.log(phrases[chosenIdNum - 1]);



export default phrases;


// Put this functionality into the working Svelte app