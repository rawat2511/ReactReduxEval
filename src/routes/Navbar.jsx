import {Link} from "react-router-dom";

const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/checkout",
        title: "Checkout"
    }
]

const Navbar = () => {

    return (
        <>
            {
                links.map(({to, title}, index) => <Link key={index} to={to}>{title}</Link> )
            }
        </>
    )
}

export default Navbar;