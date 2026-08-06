import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { todoapp, jobzing, jobs, response, ux, innova, github, hoa, pets} from "../assets/images";
import { bigShoe1, bigShoe2, bigShoe3, customer2,sql, php, react, java, html, css, tailwind, python, js, csharp, firebase, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
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
        imgURL: jobzing,
        describe: 'JobZing - Job Portal App',
        backfeed: "A comprehensive job posting and search platform that connects job seekers with thousands of opportunities from LinkedIn and OnlineJobs.ph with seamless application functionality.",
        techStack: ['Python', 'Django', 'DRF', 'Celery', 'Redis', 'PostgreSQL', 'Vue.js 3', 'Vue Router', 'Vuex', 'Tailwind CSS', 'Axios'],
        link: 'https://jobzingapp.com/'
    },
    {
        imgURL: hoa,
        describe: 'HOA MS - Management System',
        backfeed: "Housing Owners Association Management System - A desktop application for managing HOA operations, services, and tenant relations with real-time data visualization and comprehensive administration tools.",
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Electron', 'React Router', 'Firebase', 'Axios', 'Recharts', 'React Big Calendar', 'Heroicons', 'Lucide React', 'React Toastify'],
        link: 'https://httpstat.us/404'
    },
    {
        imgURL: pets,
        describe: 'Pawfect Feeder - Smart Pet Care App',
        backfeed: "A mobile application that helps pet owners manage feeding schedules, track pet health, and receive smart reminders for pet care routines with real-time notifications.",
        techStack: ['React Native', 'Expo SDK', 'Firebase Auth', 'AsyncStorage', 'React Navigation', 'React Native (Custom Fonts)'],
        link: 'https://httpstat.us/404'
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
