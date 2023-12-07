"use strict";
const { useState, FormEvent, useRef } = React;
const { Navbar, Nav, NavDropdown, InputGroup, Button, ListGroup, Card, Form, Container, Row, Col, CardGroup } = ReactBootstrap;
const NavBar = ({ setSelectedCard }) => {
    return (React.createElement("nav", { className: "navbar navbar-expand-lg navbar-dark bg-dark" },
        React.createElement("div", { className: "container" },
            React.createElement("a", { className: "navbar-brand", href: "https://www.facebook.com/tfatts.thebarber/" },
                React.createElement("img", { src: "https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png", alt: "Brand Logo", width: "60", height: "60", className: "d-inline-block align-top" })),
            React.createElement("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarNav" },
                React.createElement("ul", { className: "navbar-nav ml-auto" },
                    React.createElement("li", { className: "nav-item active" },
                        React.createElement("a", { className: "nav-link", href: "#", onClick: () => setSelectedCard("home") }, "Home")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "#", onClick: () => setSelectedCard("about") }, "About")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "#", onClick: () => setSelectedCard("contact") }, "Contact")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "#", onClick: () => setSelectedCard("catering") }, "Catering Service")))))));
};
const Header = ({ setSelectedCard }) => {
    return (React.createElement("div", { className: "position-relative", style: {
            backgroundImage: "url('https://assets.codepen.io/7450755/Barber+Tools.jpg')",
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center"
        } },
        React.createElement("div", { className: "position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center", style: { backgroundColor: "rgba(0, 0, 0, 0.6)" } },
            React.createElement("div", { className: "text-white text-center" },
                React.createElement("h1", { className: "mb-3" }, "Fatts Fades Barber Lounge"),
                React.createElement("h4", { className: "mb-3" }, "Vintage Vibes - Modern Mastery"),
                React.createElement("button", { className: "btn btn-primary btn-lg", onClick: () => setSelectedCard("contact") }, "Contact Me")))));
};
const Home = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "card mx-auto text-center blog-post \\" },
            React.createElement("img", { className: "card-img-top img-fluid", src: "https://assets.codepen.io/7450755/Barber-One.jpg", alt: "Card image cap" }),
            React.createElement("div", { className: "card-body" },
                React.createElement("h4", { className: "card-title fw-bold fs-3" }, "-Pricing List-"),
                React.createElement("p", { className: "card-text mt-3 fw-bold fs-4" }, "Basic Haircut"),
                React.createElement("p", { className: "card-text fs-5" }, "Kids $20 Adults $30"),
                React.createElement("p", { className: "card-text fw-bold fs-4" }, "The Fresh Fade"),
                React.createElement("p", { className: "card-text fs-5" }, "Detailed Cut, Razor Edge, Product, and Style - $40"),
                React.createElement("p", { className: "card-text fw-bold fs-4" }, "The Luxury Package"),
                React.createElement("p", { className: "card-text fs-5" }, "Shampoo, Facial Cleanse, Detailed Cut, Razor Edge, Hot Towel - $65"),
                React.createElement("p", { className: "card-text" },
                    React.createElement("p", null, "All cuts after 6pm $20 extra")))),
        React.createElement("div", { className: "card mx-auto text-center blog-post" },
            React.createElement("img", { className: "card-img-top img-fluid", src: "https://assets.codepen.io/7450755/Barber-Two.jpg", alt: "Card image cap" }),
            React.createElement("div", { className: "card-body" },
                React.createElement("h4", { className: "card-title" }, "Timeless Expertise - Cutting Edge Style"),
                React.createElement("p", { className: "card-text fs-5" }, "Discover the art of grooming with our classic touch and modern flair. Our expert barbers seamlessly blend traditional techniques with contemporary trends for a style that stands the test of time.")))));
};
const About = () => {
    return (React.createElement("section", null,
        React.createElement("div", { className: "card mx-auto blog-post mb-3" },
            React.createElement("img", { className: "card-img-top img-fluid", src: "https://assets.codepen.io/7450755/Fatts-About.jpg", alt: "Card image cap" }),
            React.createElement("div", { className: "card-body" },
                React.createElement("h4", { className: "card-title" }, "About Me"),
                React.createElement("p", { className: "card-text" }, "Meet T. Fatts(Triirmain TFatts Bates), the entrepreneurial force behind Muskogee's TFatts Barber Shop and Fatt Fries Catering. As the owner, T. Fatts brings flair to grooming at TFatts Barber Shop, creating a community hub for style and conversation. Simultaneously, Fatt Fries Catering delivers a culinary experience like no other, with T. Fatts infusing creativity into every dish. With a commitment to excellence and a passion for his community, T. Fatts is not just a business owner but a tastemaker shaping Muskogee's style and flavor.")))));
};
const Contact = () => {
    return (React.createElement("section", null,
        React.createElement("div", { className: "card mx-auto text-center blog-post mb-3" },
            React.createElement("div", { className: "card-body" },
                React.createElement("h4", { className: "card-title fs-4" }, "Call, Text, or just swing by and meet us!"),
                React.createElement("p", { className: "card-text fs-5" }, "Discover the art of grooming with our classic touch and modern flair. Our expert barbers seamlessly blend traditional techniques with contemporary trends for a style that stands the test of time."),
                React.createElement("p", { className: "card-text fs-4 fw-bold" }, "(918) 360-4994"),
                React.createElement("a", { href: "https://maps.app.goo.gl/e9GS2Cj8d6boE4qz5", className: "btn btn-primary btn-outline-light btn-lg m-1" }, "directions"),
                React.createElement("p", { className: "card-text fs-4 fw-bold" }, "Address"),
                React.createElement("p", { className: " fs-5" }, "2920 W Okmulgee Ave,"),
                React.createElement("p", { className: " fs-5" }, "Muskogee, OK 74401")))));
};
const Catering = () => {
    return (React.createElement("section", null,
        React.createElement("div", { className: "card mx-auto blog-post" },
            React.createElement("img", { className: "card-img-top img-fluid", src: "https://assets.codepen.io/7450755/Food.jpg", alt: "Card image cap" }),
            React.createElement("div", { className: "card-body" },
                React.createElement("h4", { className: "card-title" }, "Fatt Fries Catering Service"),
                React.createElement("p", { className: "card-text" }, "Introducing Fatt Fries Catering, your premier choice for full-service catering in Muskogee, OK! Elevate your parties and events with our delectable offerings that are sure to leave a lasting impression on your guests. Specializing in fries that are anything but ordinary, Fatt Fries brings a unique and flavorful twist to classic comfort food."),
                React.createElement("p", { className: "card-text" }, "Our dedicated team is committed to turning your event into an unforgettable experience. Whether you're planning a corporate gathering, wedding, birthday celebration, or any special occasion, Fatt Fries Catering has you covered. Our extensive menu features a variety of mouthwatering options, ensuring there's something to satisfy every palate. Contact us today to book Fatt Fries Catering for your next event in Muskogee, OK. Get ready for a feast that goes beyond expectations, leaving you and your guests craving more!"),
                React.createElement("p", { className: "card-text fs-5 fw-bold" }, "(918) 360-4994")))));
};
const MyComponent = ({ selectCard, setSelectedCard }) => {
    switch (selectCard) {
        case "home":
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "d-flex flex-column min-vh-100" },
                    React.createElement(NavBar, { setSelectedCard: setSelectedCard }),
                    React.createElement(Header, { setSelectedCard: setSelectedCard }),
                    React.createElement("div", { className: "container mt-3" },
                        React.createElement("div", { className: "row justify-content-center" },
                            React.createElement("div", { className: "col" },
                                React.createElement(CardGroup, null,
                                    React.createElement(Row, { className: "g-4 m-2" },
                                        React.createElement(Home, null),
                                        React.createElement(Contact, null)))))),
                    React.createElement(Footer, null))));
        case "about":
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "d-flex flex-column min-vh-100" },
                    React.createElement(NavBar, { setSelectedCard: setSelectedCard }),
                    React.createElement("div", { className: "container mt-3" },
                        React.createElement("div", { className: "row justify-content-center" },
                            React.createElement("div", { className: "col" },
                                React.createElement(CardGroup, null,
                                    React.createElement(Row, { className: "g-4 m-2" },
                                        React.createElement(About, null)))))),
                    React.createElement(Footer, null))));
        case "contact":
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "d-flex flex-column min-vh-100" },
                    React.createElement(NavBar, { setSelectedCard: setSelectedCard }),
                    React.createElement("div", { className: "container mt-3" },
                        React.createElement("div", { className: "row justify-content-center" },
                            React.createElement("div", { className: "col" },
                                React.createElement(CardGroup, null,
                                    React.createElement(Row, { className: "g-4 m-2" },
                                        React.createElement(Contact, null)))))),
                    React.createElement(Footer, null))));
        case "catering":
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "d-flex flex-column min-vh-100" },
                    React.createElement(NavBar, { setSelectedCard: setSelectedCard }),
                    React.createElement("div", { className: "container mt-3" },
                        React.createElement("div", { className: "row justify-content-center" },
                            React.createElement("div", { className: "col" },
                                React.createElement(CardGroup, null,
                                    React.createElement(Row, { className: "g-4 m-2" },
                                        React.createElement(Catering, null)))))),
                    React.createElement(Footer, null))));
        default:
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "d-flex flex-column min-vh-100" },
                    React.createElement(NavBar, { setSelectedCard: setSelectedCard }),
                    React.createElement(Header, { setSelectedCard: setSelectedCard }),
                    React.createElement("div", { className: "container mt-3" },
                        React.createElement("div", { className: "row justify-content-center" },
                            React.createElement("div", { className: "col" },
                                React.createElement(CardGroup, null,
                                    React.createElement(Row, { className: "g-4 m-2" },
                                        React.createElement(Home, null),
                                        React.createElement(Contact, null)))))),
                    React.createElement(Footer, null))));
    }
};
const Footer = () => {
    return (React.createElement("footer", { className: "footer bg-dark text-light text-center d-flex flex-wrap justify-content-between align-items-center border-top" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "social-buttons mt-3" },
                React.createElement("a", { href: "https://www.instagram.com/tfatts_thebarber/", className: "btn btn-outline-light btn-lg m-1" }, "instagram"),
                React.createElement("a", { href: "https://maps.app.goo.gl/e9GS2Cj8d6boE4qz5", className: "btn btn-outline-light btn-lg m-1" }, "google"),
                React.createElement("a", { href: "https://www.facebook.com/tfatts.thebarber/", className: "btn btn-outline-light btn-lg m-1" }, "facebook")),
            React.createElement("h5", { className: "mt-3 mb-3" }, "\u00A9 2023 BuddyBuie. All rights reserved."))));
};
function App() {
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [selectCard, setSelectedCard] = useState(null);
    return (React.createElement(MyComponent, { selectCard: selectCard, setSelectedCard: setSelectedCard }));
}
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));