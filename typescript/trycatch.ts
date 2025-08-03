function one() {
    console.log("function One is called")
    // throw new Error("Error in function One");
    console.log("function One completed successfully");
}

function two() {
    console.log("function Two is called")
    one();
    console.log("function Two completed successfully");
}

function three() {
    console.log("function Three is called")
    two();
    console.log("function Three completed successfully");

}

export function tryCatch() {
    try {
        three();
    } catch (error) {
        console.error("An error occurred:", error.message);
    } finally {
        console.log("Execution completed.");
    }
}

