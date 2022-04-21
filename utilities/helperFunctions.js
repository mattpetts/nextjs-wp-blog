export function getRandom () {
    // get a random number for the class name between 1 and 3
    const totalColors = 5;
    const rand = Math.ceil(Math.random() * totalColors);
    return rand;
}

export function logThis (str) {
    // get a random number for the class name between 1 and 3
    console.log(str)
}