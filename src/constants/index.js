import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { todoapp, response, ux, innova, github} from "../assets/images";
import { bigShoe1, bigShoe2, bigShoe3, customer2,sql, php, react, java, html, css, tailwind, python, js, csharp, firebase, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About" },
    { href: "#skills", label: "skills" },

    { href: "#project", label: "Project" },
    { href: "#contact-us", label: "Contact" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const skillsData = [
    {
        imgURL1: react,
        name: "Nike Air Jordan-01",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: ux,
        backName: 'UI/UX Design',
        feedback: "Developing elegant and seamless UI/UX designs that improve user experience!"
    },
    {
        imgURL: response,
        backName: 'Responsive Web & Mobile Design',
        feedback: "Services for responsive web design guarantee that a web solution will adapt to the size of the screen it is presented on!"
    },
    {
        imgURL: innova,
        backName: 'Innovative Ideas',
        feedback: "Creating websites that unique in the eyes of the user with ideas that will get their attention."
    }
];

export const projects = [
    {
        imgURL: todoapp,
        describe: 'Task app',
        backfeed: "Developing elegant and seamless UI/UX designs that improve user experience!",
        techStack: [php, sql, tailwind]
    },
    {
        imgURL: todoapp,
        describe: 'Responsive Web & Mobile Design',
        backfeed: "Services for responsive web design guarantee that a web solution will adapt to the size of the screen it is presented on!",
        techStack: [react, firebase, tailwind]
    },
    {
        imgURL: todoapp,
        describe: 'Innovative Ideas',
        backfeed: "Creating websites that are unique in the eyes of the user with ideas that will get their attention.",
        techStack: [php, sql, tailwind]
    }
];


export const footerLinks = [
    
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link:"https://www.facebook.com/Shua.meredores.16" },
    { src: github, alt: "github logo", link:"https://github.com/Shuahao18" },
    { src: instagram, alt: "instagram logo" , link:"https://www.instagram.com/shuahaooo/" },
];
