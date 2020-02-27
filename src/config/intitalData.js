import dust from "./img/dush.png";
import earth from "./img/earth.png";
import earthquake from "./img/earthquake.png";
import fire from "./img/fire.png";
import mud from "./img/mud.png"
import steam from "./img/steam.png"
import energy from "./img/energy.png"
import air from "./img/air.png"
import water from "./img/water.png"
import rain from "./img/rain.png"

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
        img: dust,
        name: "dust",
        e1:"earth",
        e2:"air"
    },
    {
        id: uuidv4(),
        img: earthquake,
        name: "earthquake",
        e1:"earth",
        e2:"energy"
    },
    {
        id: uuidv4(),
        img: energy,
        name: "energy",
        e1:"air",
        e2:"fire"
    },
    {
        id: uuidv4(),
        img: mud,
        name: "mud",
        e1:"earth",
        e2:"water"
    },
    {
        id: uuidv4(),
        img: steam,
        name: "steam",
        e1:"fire",
        e2:"water"
    },
    {
        id: uuidv4(),
        img: rain,
        name: "rain",
        e1:"air",
        e2:"water"
    }
];

const ALPHABETS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
    , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
export {ALPHABETS, INIT_ITEMS, ITEMS}