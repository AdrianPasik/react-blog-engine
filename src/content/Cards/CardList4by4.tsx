import { PropsWithChildren } from "react";

export default function CardList4by4(props : PropsWithChildren) {
    return(
        <div className='grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4  '>
            {props.children}
        </div>
    )
}