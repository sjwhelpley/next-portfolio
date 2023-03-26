import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, href }) => {
    const router = useRouter();

    return (
        <Link href={href} className={router.pathname == href ? "active" : ""}>
            {children}
        </Link>
    );
};

export default NavLink;