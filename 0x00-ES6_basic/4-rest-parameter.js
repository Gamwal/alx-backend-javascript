export default function returnHowManyArguments(...args) {
    let noArgs = 0;
    for (const arg of args) {
        noArgs += 1;
    }
    return noArgs
}