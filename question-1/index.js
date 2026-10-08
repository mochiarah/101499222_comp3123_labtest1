const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (Array.isArray(arr)) {
            const strings = [];
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === "string") {
                    strings.push(arr[i]);
                }
            }

            const lower = [];
            for (let i = 0; i < strings.length; i++) {
                lower.push(strings[i].toLowerCase());
            }

            resolve(lower);
        } else {
            reject("invalid input");
        }
    });
};

lowerCaseWords(mixedArray)
    .then((words) => console.log(words))
    .catch((err => console.error(err)));