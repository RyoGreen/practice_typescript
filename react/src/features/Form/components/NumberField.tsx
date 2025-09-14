import type { UseFormRegisterReturn } from "react-hook-form"

type Props = {
    register: UseFormRegisterReturn
}

export default function NumberField(props: Props) {
    return (
        <div>
            <input type="number" placeholder="Enter number" {...props.register} />
        </div>
    )
}
