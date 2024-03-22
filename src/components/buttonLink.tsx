import Link from "next/link";
import React from "react";
interface IButtonLink {
    children : string
    href : string
    className? : string
}

export default function ButtonLink({children, href, className}: IButtonLink) {
    return (
        <Link href={href}>
            <button className={ ` px-4 py-2 rounded-full ${className}`}>
            {children}
            </button>
        </Link>
    )
}