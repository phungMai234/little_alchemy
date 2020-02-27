import dust from "./img/dush.png";
import earth from "./img/earth.png";
import earthquake from "./img/earthquake.png";
import eruption from "./img/eruption.png";
import fire from "./img/fire.png";
import sandy from "./img/sandy.png";
import energy from "./img/energy.png"
import air from "./img/air.png"
import water from "./img/water.png"
import { v4 as uuidv4 } from 'uuid';

const INIT_ITEMS = [
    {
        id: uuidv4(),
        img: air,
        name: "air"
    },
    {
        id: uuidv4(),
        img: earth,
        name: "earth"
    },
    {
        id: uuidv4(),
        img: fire,
        name: "fire"
    },
    {
        id: uuidv4(),
        img: water,
        name: "water"
    }

];

const ITEMS = [
    {
        id: uuidv4(),
        img: air,
        name: "air"
    },
    {
        id: uuidv4(),
        img: dust,
        name: "dust"
    },
    {
        id: uuidv4(),
        img: earth,
        name: "earth"
    },
    {
        id: uuidv4(),
        img: earthquake,
        name: "earthquake"
    },
    {
        id: uuidv4(),
        img: energy,
        name: "energy"
    },
    {
        id: uuidv4(),
        img: eruption,
        name: "eruption"
    },

    {
        id: uuidv4(),
        img: fire,
        name: "fire"
    },
    {
        id: uuidv4(),
        img: sandy,
        name: "sandy"
    },
    {
        id: uuidv4(),
        img: water,
        name: "water"
    },
];

const ALPHABETS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
    , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
export {ALPHABETS, INIT_ITEMS, ITEMS}