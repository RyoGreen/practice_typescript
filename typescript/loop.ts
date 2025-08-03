function createArray(): string[] {
    return ["apple", "banana", "cherry"];
}

function loopArray(arr: string[]): void {
    arr.forEach((item, index) => {
        console.log(`Item at index ${index}: ${item}`);
    })
    const newArr = arr.map((item, index) => {
        return `Item at index ${index} is ${item}`;
    })
    console.log("Mapped Array:", newArr);
    const filteredArr = arr.filter((item) => {
        return item.length > 5;
    })
    console.log("Filtered Array:", filteredArr);
}

export function loop() {
    const myArray = createArray();
    loopArray(myArray);
}
