import type { UseFormRegisterReturn } from "react-hook-form"

type Props = {
    register: UseFormRegisterReturn
}

export default function EmailField(props: Props) {
    return (
        <div>
            <input type="email" placeholder="Enter email" {...props.register} />
        </div>
    )
}
