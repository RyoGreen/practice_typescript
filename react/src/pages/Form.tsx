export default function Form() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Enter text" />
            </div>
            <div>
                <input type="number" placeholder="Enter number" />
            </div>
            <div>
                <input type="email" placeholder="Enter email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
