const ICONS = {
    flash: `<svg viewBox="0 0 24 24"><path d="M13 2L4.09 12.96H11L10 22L19.91 11.04H13L13 2Z"/></svg>`,
    smoke: `<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,
    molotov: `<svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 00-5 5c0 1.9.98 3.46 2.44 4.38L9 22h6l-.44-10.62C16.02 10.46 17 8.9 17 7a5 5 0 00-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/></svg>`,
    recon: `<svg viewBox="0 0 24 24"><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,
    drone: `<svg viewBox="0 0 24 24"><path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"/></svg>`,
    heal: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    wall: `<svg viewBox="0 0 24 24"><path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z"/></svg>`,
    teleport: `<svg viewBox="0 0 24 24"><path d="M21 6.5l-4-4-1.41 1.41L17.17 5.5 9 13.67l-2.59-2.59L5 12.5l4 4L21 6.5zm-16 11l2 2 1.5-1.5-2-2L8.5 17z"/></svg>`,
    trap: `<svg viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.5L20.5 19h-17L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>`,
    turret: `<svg viewBox="0 0 24 24"><path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2H5C3.9 5 3 5.9 3 7v2H1v2h2v2H1v2h2v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H5V7h12v12z"/></svg>`,
    orb: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`,
    ult: `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    knife: `<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11L12 2zm0 3.84L14.6 9h-5.2L12 5.84zM12 22l5.5-9h-11L12 22zm0-3.84L9.4 15h5.2L12 18.16z"/></svg>`,
    shield: `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`,
    dash: `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`,
    deploy: `<svg viewBox="0 0 24 24"><path d="M19.59 7l-7.59 7.59-3.59-3.59L7 12.41l4 4 9-9zM1 5h6v2H1zm0 4h4v2H1zm0 4h2v2H1z"/></svg>`,
    zone: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
    ghost: `<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 00-7 7v10l3-3 3 3 3-3 3 3V9a7 7 0 00-7-7zm-1 9a1 1 0 110-2 1 1 0 010 2zm2 0a1 1 0 110-2 1 1 0 010 2z"/></svg>`,
    net: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.01.17-1.97.47-2.87l5.53 5.53V16c0 1.1.9 2 2 2v1.93C8.16 19.48 4 16.08 4 12zm7-6.93V7c-1.1 0-2 .9-2 2v1l-4.55-4.55C6.22 4.13 8.03 3.1 10.1 3.04L11 5.07zm6.13 1.38L11 12.55V9c0-1.1-.9-2-2-2V5.07c.53 0 1.05.04 1.56.14A9.01 9.01 0 0119.13 8H19c-1.1 0-2 .9-2 2v.55z"/></svg>`,
    scan: `<svg viewBox="0 0 24 24"><path d="M1 5h2v14H1zm4 0h2v14H5zm17 0h-2v14h2zm-4 0h-2v14h2zm-5 0H9v14h4z"/></svg>`,
    grenade: `<svg viewBox="0 0 24 24"><path d="M11 2h2v4h-2zM4.22 4.22l2.12 2.12-1.41 1.41-2.12-2.12zm15.56 0l-1.41 1.41-2.12-2.12 1.41-1.41zM12 8a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6zm0 2a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z"/></svg>`,
    wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 12c2-5 4-5 6 0s4 5 6 0 4-5 6 0"/><path d="M3 17c2-5 4-5 6 0s4 5 6 0 4-5 6 0"/></svg>`,
};

const AGENTS = [{
        name: "ASTRA",
        role: "CONTROLLER",
        origin: "GHANA",
        img: "assets/img/astra.webp",
        aggr: 55,
        util: 98,
        mob: 50,
        abilities: [{
            key: "C",
            name: "Nebula / Dissipate",
            icon: "smoke"
        }, {
            key: "Q",
            name: "Gravity Well",
            icon: "zone"
        }, {
            key: "E",
            name: "Nova Pulse",
            icon: "grenade"
        }, {
            key: "X",
            name: "Cosmic Divide",
            icon: "ult"
        }],
        quote: "The stars guide my every move."
    },
    {
        name: "BREACH",
        role: "INITIATOR",
        origin: "SWEDEN",
        img: "assets/img/breach.webp",
        aggr: 78,
        util: 88,
        mob: 45,
        abilities: [{
            key: "C",
            name: "Aftershock",
            icon: "grenade"
        }, {
            key: "Q",
            name: "Flashpoint",
            icon: "flash"
        }, {
            key: "E",
            name: "Fault Line",
            icon: "wave"
        }, {
            key: "X",
            name: "Rolling Thunder",
            icon: "ult"
        }],
        quote: "Get out of my way!"
    },
    {
        name: "BRIMSTONE",
        role: "CONTROLLER",
        origin: "USA",
        img: "assets/img/brimstone.webp",
        aggr: 70,
        util: 88,
        mob: 45,
        abilities: [{
            key: "C",
            name: "Incendiary",
            icon: "molotov"
        }, {
            key: "Q",
            name: "Stim Beacon",
            icon: "deploy"
        }, {
            key: "E",
            name: "Sky Smoke",
            icon: "smoke"
        }, {
            key: "X",
            name: "Orbital Strike",
            icon: "ult"
        }],
        quote: "Let's do this by the numbers."
    },
    {
        name: "CHAMBER",
        role: "SENTINEL",
        origin: "FRANCE",
        img: "assets/img/chamber.webp",
        aggr: 82,
        util: 78,
        mob: 72,
        abilities: [{
            key: "C",
            name: "Trademark",
            icon: "trap"
        }, {
            key: "Q",
            name: "Headhunter",
            icon: "knife"
        }, {
            key: "E",
            name: "Rendezvous",
            icon: "teleport"
        }, {
            key: "X",
            name: "Tour De Force",
            icon: "ult"
        }],
        quote: "Sophistication is a weapon too."
    },
    {
        name: "CLOVE",
        role: "CONTROLLER",
        origin: "SCOTLAND",
        img: "assets/img/clove.webp",
        aggr: 65,
        util: 85,
        mob: 70,
        abilities: [{
            key: "C",
            name: "Meddle",
            icon: "orb"
        }, {
            key: "Q",
            name: "Pick-me-up",
            icon: "heal"
        }, {
            key: "E",
            name: "Ruse",
            icon: "smoke"
        }, {
            key: "X",
            name: "Not Dead Yet",
            icon: "ult"
        }],
        quote: "Death is just another obstacle."
    },
    {
        name: "CYPHER",
        role: "SENTINEL",
        origin: "MOROCCO",
        img: "assets/img/cypher.webp",
        aggr: 52,
        util: 96,
        mob: 50,
        abilities: [{
            key: "C",
            name: "Trapwire",
            icon: "trap"
        }, {
            key: "Q",
            name: "Cyber Cage",
            icon: "zone"
        }, {
            key: "E",
            name: "Spycam",
            icon: "recon"
        }, {
            key: "X",
            name: "Neural Theft",
            icon: "ult"
        }],
        quote: "Nothing escapes my network."
    },
    {
        name: "DEADLOCK",
        role: "SENTINEL",
        origin: "NORWAY",
        img: "assets/img/deadlock.webp",
        aggr: 62,
        util: 90,
        mob: 52,
        abilities: [{
            key: "C",
            name: "Gravnet",
            icon: "net"
        }, {
            key: "Q",
            name: "Sonic Sensor",
            icon: "scan"
        }, {
            key: "E",
            name: "Barrier Mesh",
            icon: "wall"
        }, {
            key: "X",
            name: "Annihilation",
            icon: "ult"
        }],
        quote: "No escape from my net."
    },
    {
        name: "FADE",
        role: "INITIATOR",
        origin: "TURKEY",
        img: "assets/img/fade.webp",
        aggr: 65,
        util: 90,
        mob: 58,
        abilities: [{
            key: "C",
            name: "Prowler",
            icon: "drone"
        }, {
            key: "Q",
            name: "Seize",
            icon: "zone"
        }, {
            key: "E",
            name: "Haunt",
            icon: "recon"
        }, {
            key: "X",
            name: "Nightfall",
            icon: "ult"
        }],
        quote: "Let the darkness reveal you."
    },
    {
        name: "GEKKO",
        role: "INITIATOR",
        origin: "USA",
        img: "assets/img/gekko.webp",
        aggr: 62,
        util: 88,
        mob: 62,
        abilities: [{
            key: "C",
            name: "Dizzy",
            icon: "flash"
        }, {
            key: "Q",
            name: "Mosh Pit",
            icon: "grenade"
        }, {
            key: "E",
            name: "Wingman",
            icon: "deploy"
        }, {
            key: "X",
            name: "Thrash",
            icon: "ult"
        }],
        quote: "Dizzy, go show 'em what you got!"
    },
    {
        name: "HARBOR",
        role: "CONTROLLER",
        origin: "INDIA",
        img: "assets/img/harbor.webp",
        aggr: 62,
        util: 88,
        mob: 58,
        abilities: [{
            key: "C",
            name: "Cove",
            icon: "shield"
        }, {
            key: "Q",
            name: "High Tide",
            icon: "wall"
        }, {
            key: "E",
            name: "Cascade",
            icon: "wave"
        }, {
            key: "X",
            name: "Reckoning",
            icon: "ult"
        }],
        quote: "Let the waters guide us."
    },
    {
        name: "ISO",
        role: "DUELIST",
        origin: "CHINA",
        img: "assets/img/iso.webp",
        aggr: 88,
        util: 72,
        mob: 70,
        abilities: [{
            key: "C",
            name: "Contingency",
            icon: "wall"
        }, {
            key: "Q",
            name: "Undercut",
            icon: "zone"
        }, {
            key: "E",
            name: "Double Tap",
            icon: "orb"
        }, {
            key: "X",
            name: "Kill Contract",
            icon: "ult"
        }],
        quote: "One target. One outcome."
    },
    {
        name: "JETT",
        role: "DUELIST",
        origin: "SOUTH KOREA",
        img: "assets/img/jett.webp",
        aggr: 85,
        util: 68,
        mob: 98,
        abilities: [{
            key: "C",
            name: "Cloudburst",
            icon: "smoke"
        }, {
            key: "Q",
            name: "Updraft",
            icon: "dash"
        }, {
            key: "E",
            name: "Tailwind",
            icon: "dash"
        }, {
            key: "X",
            name: "Blade Storm",
            icon: "knife"
        }],
        quote: "I know, I'm good. You can say it."
    },
    {
        name: "KAY/O",
        role: "INITIATOR",
        origin: "UNKNOWN",
        img: "assets/img/kayo.webp",
        aggr: 78,
        util: 82,
        mob: 60,
        abilities: [{
            key: "C",
            name: "FRAG/ment",
            icon: "grenade"
        }, {
            key: "Q",
            name: "FLASH/drive",
            icon: "flash"
        }, {
            key: "E",
            name: "ZERO/point",
            icon: "knife"
        }, {
            key: "X",
            name: "NULL/cmd",
            icon: "ult"
        }],
        quote: "TERMINATE. EXECUTE. ELIMINATE."
    },
    {
        name: "KILLJOY",
        role: "SENTINEL",
        origin: "GERMANY",
        img: "assets/img/killjoy.webp",
        aggr: 55,
        util: 95,
        mob: 48,
        abilities: [{
            key: "C",
            name: "Nanoswarm",
            icon: "grenade"
        }, {
            key: "Q",
            name: "Alarmbot",
            icon: "drone"
        }, {
            key: "E",
            name: "Turret",
            icon: "turret"
        }, {
            key: "X",
            name: "Lockdown",
            icon: "ult"
        }],
        quote: "I love it when a plan comes together."
    },
    {
        name: "NEON",
        role: "DUELIST",
        origin: "PHILIPPINES",
        img: "assets/img/neon.webp",
        aggr: 80,
        util: 62,
        mob: 100,
        abilities: [{
            key: "C",
            name: "Fast Lane",
            icon: "wall"
        }, {
            key: "Q",
            name: "Relay Bolt",
            icon: "flash"
        }, {
            key: "E",
            name: "High Gear",
            icon: "dash"
        }, {
            key: "X",
            name: "Overdrive",
            icon: "ult"
        }],
        quote: "We run for it, that's the plan."
    },
    {
        name: "OMEN",
        role: "CONTROLLER",
        origin: "UNKNOWN",
        img: "assets/img/omen.webp",
        aggr: 65,
        util: 88,
        mob: 80,
        abilities: [{
            key: "C",
            name: "Shrouded Step",
            icon: "teleport"
        }, {
            key: "Q",
            name: "Paranoia",
            icon: "flash"
        }, {
            key: "E",
            name: "Dark Cover",
            icon: "smoke"
        }, {
            key: "X",
            name: "From the Shadows",
            icon: "ult"
        }],
        quote: "They don't know what hunts them."
    },
    {
        name: "PHOENIX",
        role: "DUELIST",
        origin: "UNITED KINGDOM",
        img: "assets/img/phoenix.png",
        aggr: 78,
        util: 75,
        mob: 62,
        abilities: [{
            key: "C",
            name: "Blaze",
            icon: "wall"
        }, {
            key: "Q",
            name: "Curveball",
            icon: "flash"
        }, {
            key: "E",
            name: "Hot Hands",
            icon: "molotov"
        }, {
            key: "X",
            name: "Run It Back",
            icon: "ult"
        }],
        quote: "Back from the dead, baby."
    },
    {
        name: "RAZE",
        role: "DUELIST",
        origin: "BRAZIL",
        img: "assets/img/raze.png",
        aggr: 90,
        util: 85,
        mob: 75,
        abilities: [{
            key: "C",
            name: "Boom Bot",
            icon: "drone"
        }, {
            key: "Q",
            name: "Blast Pack",
            icon: "grenade"
        }, {
            key: "E",
            name: "Paint Shells",
            icon: "grenade"
        }, {
            key: "X",
            name: "Showstopper",
            icon: "ult"
        }],
        quote: "I just love to blow stuff up."
    },
    {
        name: "REYNA",
        role: "DUELIST",
        origin: "MEXICO",
        img: "assets/img/reyna.png",
        aggr: 95,
        util: 45,
        mob: 65,
        abilities: [{
            key: "C",
            name: "Leer",
            icon: "orb"
        }, {
            key: "Q",
            name: "Devour",
            icon: "heal"
        }, {
            key: "E",
            name: "Dismiss",
            icon: "ghost"
        }, {
            key: "X",
            name: "Empress",
            icon: "ult"
        }],
        quote: "Nourish me, feed me your fear."
    },
    {
        name: "SAGE",
        role: "SENTINEL",
        origin: "CHINA",
        img: "assets/img/sage.png",
        aggr: 42,
        util: 96,
        mob: 50,
        abilities: [{
            key: "C",
            name: "Barrier Orb",
            icon: "wall"
        }, {
            key: "Q",
            name: "Slow Orb",
            icon: "zone"
        }, {
            key: "E",
            name: "Healing Orb",
            icon: "heal"
        }, {
            key: "X",
            name: "Resurrection",
            icon: "ult"
        }],
        quote: "It is not yet your time."
    },
    {
        name: "SKYE",
        role: "INITIATOR",
        origin: "AUSTRALIA",
        img: "assets/img/skye.webp",
        aggr: 58,
        util: 92,
        mob: 55,
        abilities: [{
            key: "C",
            name: "Regrowth",
            icon: "heal"
        }, {
            key: "Q",
            name: "Trailblazer",
            icon: "drone"
        }, {
            key: "E",
            name: "Guiding Light",
            icon: "flash"
        }, {
            key: "X",
            name: "Seekers",
            icon: "recon"
        }],
        quote: "We can do this."
    },
    {
        name: "SOVA",
        role: "INITIATOR",
        origin: "RUSSIA",
        img: "assets/img/sova.png",
        aggr: 62,
        util: 92,
        mob: 55,
        abilities: [{
            key: "C",
            name: "Shock Bolt",
            icon: "arrow"
        }, {
            key: "Q",
            name: "Recon Bolt",
            icon: "recon"
        }, {
            key: "E",
            name: "Owl Drone",
            icon: "drone"
        }, {
            key: "X",
            name: "Hunter's Fury",
            icon: "ult"
        }],
        quote: "The hunt has begun."
    },
    {
        name: "TEJO",
        role: "INITIATOR",
        origin: "COLOMBIA",
        img: "assets/img/tejo.png",
        aggr: 72,
        util: 85,
        mob: 58,
        abilities: [{
            key: "C",
            name: "Stealth Drone",
            icon: "drone"
        }, {
            key: "Q",
            name: "Special Delivery",
            icon: "grenade"
        }, {
            key: "E",
            name: "Guided Salvo",
            icon: "arrow"
        }, {
            key: "X",
            name: "Armageddon",
            icon: "ult"
        }],
        quote: "Precision over panic."
    },
    {
        name: "VETO",
        role: "SENTINEL",
        origin: "UNKNOWN",
        img: "assets/img/veto.png",
        aggr: 58,
        util: 91,
        mob: 52,
        abilities: [{
            key: "C",
            name: "Sentry",
            icon: "turret"
        }, {
            key: "Q",
            name: "Blackout",
            icon: "zone"
        }, {
            key: "E",
            name: "Nullify",
            icon: "shield"
        }, {
            key: "X",
            name: "Override",
            icon: "ult"
        }],
        quote: "Your vision is a liability."
    },
    {
        name: "VIPER",
        role: "CONTROLLER",
        origin: "USA",
        img: "assets/img/viper.png",
        aggr: 62,
        util: 96,
        mob: 50,
        abilities: [{
            key: "C",
            name: "Snake Bite",
            icon: "molotov"
        }, {
            key: "Q",
            name: "Poison Cloud",
            icon: "smoke"
        }, {
            key: "E",
            name: "Toxic Screen",
            icon: "wall"
        }, {
            key: "X",
            name: "Viper's Pit",
            icon: "ult"
        }],
        quote: "I have a poison for every occasion."
    },
    {
        name: "VYSE",
        role: "SENTINEL",
        origin: "UNKNOWN",
        img: "assets/img/vyse.png",
        aggr: 58,
        util: 92,
        mob: 55,
        abilities: [{
            key: "C",
            name: "Shear",
            icon: "wall"
        }, {
            key: "Q",
            name: "Arc Rose",
            icon: "trap"
        }, {
            key: "E",
            name: "Razorvine",
            icon: "zone"
        }, {
            key: "X",
            name: "Steel Garden",
            icon: "ult"
        }],
        quote: "Every battlefield has its thorns."
    },
    {
        name: "WAYLAY",
        role: "DUELIST",
        origin: "THAILAND",
        img: "assets/img/waylay.png",
        aggr: 82,
        util: 76,
        mob: 88,
        abilities: [{
            key: "C",
            name: "Drift",
            icon: "dash"
        }, {
            key: "Q",
            name: "Haste",
            icon: "wave"
        }, {
            key: "E",
            name: "Riptide",
            icon: "zone"
        }, {
            key: "X",
            name: "Flood",
            icon: "ult"
        }],
        quote: "The current favors the swift."
    },
    {
        name: "YORU",
        role: "DUELIST",
        origin: "JAPAN",
        img: "assets/img/yoru.png",
        aggr: 68,
        util: 80,
        mob: 85,
        abilities: [{
            key: "C",
            name: "Fakeout",
            icon: "ghost"
        }, {
            key: "Q",
            name: "Blindside",
            icon: "flash"
        }, {
            key: "E",
            name: "Gatecrash",
            icon: "teleport"
        }, {
            key: "X",
            name: "Dimensional Drift",
            icon: "ult"
        }],
        quote: "This world is mine to hunt."
    },
];

let currentFilter = 'ALL',
    isAnimating = false;

// Track which agents are selected for the randomizer pool
// null = "use all" (default), otherwise a Set of agent names
let selectedAgentNames = null;

// Build the saGrid on load
(function buildSaGrid() {
    const grid = document.getElementById('saGrid');
    grid.innerHTML = AGENTS.map(a =>
        `<div class="sa-chip ${a.role.toLowerCase()} selected" data-agent="${a.name}" onclick="saToggleChip(this)">${a.name}</div>`
    ).join('');
    updateSaCount();
})();

function saToggleChip(chip) {
    chip.classList.toggle('selected');
    // Sync selectedAgentNames
    const allChips = document.querySelectorAll('#saGrid .sa-chip');
    const allSelected = [...allChips].every(c => c.classList.contains('selected'));
    if (allSelected) {
        selectedAgentNames = null; // all = use filter normally
    } else {
        selectedAgentNames = new Set([...allChips].filter(c => c.classList.contains('selected')).map(c => c.dataset.agent));
    }
    updateSaCount();
}

function saSelectAll() {
    document.querySelectorAll('#saGrid .sa-chip').forEach(c => c.classList.add('selected'));
    selectedAgentNames = null;
    updateSaCount();
}

function saSelectNone() {
    document.querySelectorAll('#saGrid .sa-chip').forEach(c => c.classList.remove('selected'));
    selectedAgentNames = new Set();
    updateSaCount();
}

function saSelectByFilter() {
    document.querySelectorAll('#saGrid .sa-chip').forEach(c => {
        const agent = AGENTS.find(a => a.name === c.dataset.agent);
        if (!agent) return;
        if (currentFilter === 'ALL' || agent.role === currentFilter) {
            c.classList.add('selected');
        } else {
            c.classList.remove('selected');
        }
    });
    const allChips = document.querySelectorAll('#saGrid .sa-chip');
    selectedAgentNames = new Set([...allChips].filter(c => c.classList.contains('selected')).map(c => c.dataset.agent));
    updateSaCount();
}

function updateSaCount() {
    const label = document.getElementById('saCountLabel');
    const total = AGENTS.length;
    const selected = selectedAgentNames === null ? total : selectedAgentNames.size;
    if (selected === 0) {
        label.innerHTML = `<span class="sa-warn">⚠ NO AGENTS SELECTED — RANDOMIZER WILL NOT WORK</span>`;
    } else {
        label.innerHTML = `<span class="sa-count-num">${selected}</span> / ${total} AGENTS IN POOL`;
    }
}

function toggleSelectAgents() {
    const panel = document.getElementById('saPanel');
    const btn = document.getElementById('saToggleBtn');
    panel.classList.toggle('open');
    btn.classList.toggle('open');
    btn.textContent = panel.classList.contains('open') ? '✕ CLOSE AGENT POOL' : '⊞ CUSTOMIZE AGENT POOL';
}

const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) audioCtx = new AudioCtx();
    return audioCtx;
}

// Short pitched "tick" used during rolling
function playTick(pitch = 1, vol = 0.18) {
    const ac = getAudioCtx();
    const now = ac.currentTime;

    // Noise burst
    const bufLen = ac.sampleRate * 0.04;
    const buf = ac.createBuffer(1, bufLen, ac.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = (Math.random() * 2 - 1);

    const src = ac.createBufferSource();
    src.buffer = buf;

    const bpf = ac.createBiquadFilter();
    bpf.type = 'bandpass';
    bpf.frequency.value = 1200 * pitch;
    bpf.Q.value = 12;

    const gain = ac.createGain();
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    src.connect(bpf);
    bpf.connect(gain);
    gain.connect(ac.destination);
    src.start(now);
    src.stop(now + 0.07);
}

// Valorant-style "UI click" beep
function playBeep(freq = 880, duration = 0.07, vol = 0.12) {
    const ac = getAudioCtx();
    const now = ac.currentTime;

    const osc = ac.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.6, now + duration);

    const gain = ac.createGain();
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start(now);
    osc.stop(now + duration + 0.01);
}

// Heavy reveal "THUD" + harmonic shimmer — Valorant agent select reveal
function playReveal() {
    const ac = getAudioCtx();
    const now = ac.currentTime;

    // Sub thud
    const sub = ac.createOscillator();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(80, now);
    sub.frequency.exponentialRampToValueAtTime(30, now + 0.35);
    const subGain = ac.createGain();
    subGain.gain.setValueAtTime(0.55, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    sub.connect(subGain);
    subGain.connect(ac.destination);
    sub.start(now);
    sub.stop(now + 0.4);

    // Mid punch
    const mid = ac.createOscillator();
    mid.type = 'sawtooth';
    mid.frequency.setValueAtTime(320, now);
    mid.frequency.exponentialRampToValueAtTime(120, now + 0.2);
    const midGain = ac.createGain();
    midGain.gain.setValueAtTime(0.25, now);
    midGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    mid.connect(midGain);
    midGain.connect(ac.destination);
    mid.start(now);
    mid.stop(now + 0.25);

    // High shimmer — ascending arpeggio
    [0, 0.07, 0.14, 0.21].forEach((t, i) => {
        const osc = ac.createOscillator();
        osc.type = 'sine';
        const freqs = [880, 1100, 1320, 1760];
        osc.frequency.value = freqs[i];
        const g = ac.createGain();
        g.gain.setValueAtTime(0, now + t);
        g.gain.linearRampToValueAtTime(0.12, now + t + 0.03);
        g.gain.exponentialRampToValueAtTime(0.001, now + t + 0.18);
        osc.connect(g);
        g.connect(ac.destination);
        osc.start(now + t);
        osc.stop(now + t + 0.2);
    });

    // White noise "whoosh"
    const bufLen = ac.sampleRate * 0.3;
    const buf = ac.createBuffer(1, bufLen, ac.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) d[i] = (Math.random() * 2 - 1);
    const nSrc = ac.createBufferSource();
    nSrc.buffer = buf;
    const hpf = ac.createBiquadFilter();
    hpf.type = 'highpass';
    hpf.frequency.value = 3000;
    const nGain = ac.createGain();
    nGain.gain.setValueAtTime(0.15, now);
    nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    nSrc.connect(hpf);
    hpf.connect(nGain);
    nGain.connect(ac.destination);
    nSrc.start(now);
    nSrc.stop(now + 0.3);
}

// Flash sound — brief UI confirm
function playFlash() {
    playBeep(1400, 0.04, 0.1);
}

// Slowing roll — decelerating ticks scheduled ahead
function scheduleSlowdown(startAt, count, startInterval, endInterval) {
    const ac = getAudioCtx();
    let t = startAt;
    for (let i = 0; i < count; i++) {
        const prog = i / count;
        const interval = startInterval + (endInterval - startInterval) * prog;
        const pitch = 1 + (1 - prog) * 1.2;
        // schedule a tick at ac time t
        scheduleTickAt(t, pitch, 0.22 - prog * 0.1);
        t += interval;
    }
    return t; // when the last tick fires
}

function scheduleTickAt(when, pitch = 1, vol = 0.18) {
    const ac = getAudioCtx();

    const bufLen = Math.ceil(ac.sampleRate * 0.05);
    const buf = ac.createBuffer(1, bufLen, ac.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = (Math.random() * 2 - 1);

    const src = ac.createBufferSource();
    src.buffer = buf;

    const bpf = ac.createBiquadFilter();
    bpf.type = 'bandpass';
    bpf.frequency.value = 1200 * pitch;
    bpf.Q.value = 14;

    const gain = ac.createGain();
    gain.gain.setValueAtTime(Math.max(0.001, vol), when);
    gain.gain.exponentialRampToValueAtTime(0.001, when + 0.07);

    src.connect(bpf);
    bpf.connect(gain);
    gain.connect(ac.destination);
    src.start(when);
    src.stop(when + 0.08);
}
// ─────────────────────────────────────────────────────────────────────────────

// Particles
const canvas = document.getElementById('particles'),
    ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor(x, y, opts = {}) {
        this.x = x;
        this.y = y;
        this.kind = opts.kind || 'shard';
        this.color = opts.color || '#FF4655';
        this.life = opts.life || 1;
        this.maxLife = this.life;
        this.size = opts.size || 3;
        this.vx = opts.vx || 0;
        this.vy = opts.vy || 0;
        this.gravity = opts.gravity || 0;
        this.drag = opts.drag || 0.98;
        this.rot = opts.rot || 0;
        this.spin = opts.spin || 0;
        this.growth = opts.growth || 0;
        this.thickness = opts.thickness || 1.5;
    }

    update() {
        this.vx *= this.drag;
        this.vy *= this.drag;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.rot += this.spin;
        this.size += this.growth;
        this.life -= 0.03;
    }

    draw() {
        const a = Math.max(0, this.life / this.maxLife);
        ctx.save();
        ctx.globalAlpha = a;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);

        if (this.kind === 'ring') {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.thickness;
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.stroke();
        } else if (this.kind === 'streak') {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.thickness;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(this.size * 2.6, 0);
            ctx.stroke();
        } else if (this.kind === 'spark') {
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else {
            // Default shard: angular triangle for a sharper tactical look
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.size * 1.4, 0);
            ctx.lineTo(-this.size * 0.9, this.size * 0.55);
            ctx.lineTo(-this.size * 0.7, -this.size * 0.55);
            ctx.closePath();
            ctx.fill();
        }

        ctx.restore();
    }
}

function spawnParticles(x, y, n = 30) {
    const colors = ['#FF4655', '#ECE8E1', '#00B4B4'];
    const intensity = Math.max(0.65, n / 40);

    // Impact ring
    particles.push(new Particle(x, y, {
        kind: 'ring',
        color: '#FF4655',
        size: 8,
        life: 0.85,
        growth: 2.2 * intensity,
        thickness: 2.2
    }));

    // Angular shards
    const shardCount = Math.floor(20 * intensity);
    for (let i = 0; i < shardCount; i++) {
        const angle = (Math.PI * 2 * i) / shardCount + (Math.random() - 0.5) * 0.22;
        const speed = 2.2 + Math.random() * 4.8;
        particles.push(new Particle(x, y, {
            kind: 'shard',
            color: colors[Math.floor(Math.random() * colors.length)],
            size: 2 + Math.random() * 3,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 0.7,
            gravity: 0.055,
            drag: 0.965,
            rot: angle,
            spin: (Math.random() - 0.5) * 0.28
        }));
    }

    // Tactical scan streaks
    const streakCount = Math.floor(8 * intensity);
    for (let i = 0; i < streakCount; i++) {
        const angle = -0.6 + Math.random() * 1.2;
        const speed = 4 + Math.random() * 4;
        particles.push(new Particle(x, y, {
            kind: 'streak',
            color: i % 2 === 0 ? '#FF4655' : '#ECE8E1',
            size: 4 + Math.random() * 4,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed * 0.6,
            drag: 0.95,
            rot: angle,
            thickness: 1 + Math.random() * 1.2,
            life: 0.6
        }));
    }

    // Micro sparks
    const sparkCount = Math.floor(14 * intensity);
    for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.4 + Math.random() * 2.8;
        particles.push(new Particle(x, y, {
            kind: 'spark',
            color: '#ECE8E1',
            size: 1 + Math.random() * 1.8,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 0.35,
            gravity: 0.04,
            drag: 0.97,
            life: 0.45 + Math.random() * 0.2
        }));
    }
}

(function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter((p) => p.life > 0);
    particles.forEach((p) => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(loop);
})();

// Ticker
const ti = document.getElementById('tickerInner');
ti.innerHTML = [...AGENTS, ...AGENTS]
    .map((a) => `<span class="ticker-item"><span>&#9654;</span>${a.name} // ${a.role}</span>`)
    .join('');

// Grid
const ag = document.getElementById('agentGrid');
ag.innerHTML = AGENTS.map(
    (a) =>
    `<div class="agent-chip ${a.role.toLowerCase()}" id="chip-${a.name.replace('/', '')}" data-agent="${a.name}">${a.name}</div>`
).join('');

function setFilter(btn, role) {
    document.querySelectorAll('.role-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = role;
}

function flashOverlay() {
    const o = document.getElementById('flash-overlay');
    o.style.opacity = '0.35';
    setTimeout(() => (o.style.opacity = '0'), 180);
}

function getPool() {
    let pool = currentFilter === 'ALL' ? AGENTS : AGENTS.filter((a) => a.role === currentFilter);
    if (selectedAgentNames !== null) {
        pool = pool.filter(a => selectedAgentNames.has(a.name));
    }
    return pool;
}

function hideInfo() {
    ['agentStatus', 'agentOrigin', 'statsSection', 'abilitiesRow', 'agentQuote'].forEach((id) =>
        document.getElementById(id).classList.remove('show')
    );
    ['aggrBar', 'utilBar', 'mobBar'].forEach((id) => (document.getElementById(id).style.width = '0'));
    document.querySelectorAll('.agent-chip').forEach((c) => c.classList.remove('highlighted'));

    const img = document.getElementById('agentImg');
    img.classList.remove('visible');
    img.src = '';
    document.getElementById('portraitPlaceholder').style.display = 'flex';
}

function setAbility(slot, ab) {
    document.getElementById('abilIcon' + slot).innerHTML = ICONS[ab.icon] || ICONS.ult;
    document.getElementById('abilName' + slot).textContent = ab.name;
}

const ROLE_COLORS = {
    DUELIST: '#FF4655',
    INITIATOR: '#6AC14D',
    CONTROLLER: '#00B4B4',
    SENTINEL: '#E6AC4A',
};

const AGENT_VOICELINES = {
    ASTRA: 'assets/voice/AstraPick.mp3',
    BREACH: 'assets/voice/BreachPick.mp3',
    BRIMSTONE: 'assets/voice/BrimstonePick.mp3',
    CHAMBER: 'assets/voice/ChamberPick.mp3',
    CLOVE: 'assets/voice/ClovePick.mp3',
    CYPHER: 'assets/voice/CypherPick.mp3',
    DEADLOCK: 'assets/voice/DeadlockPick.mp3',
    FADE: 'assets/voice/FadePick.mp3',
    GEKKO: 'assets/voice/GekkoPick.mp3',
    HARBOR: 'assets/voice/HarborPick.mp3',
    ISO: 'assets/voice/IsoPick.mp3',
    JETT: 'assets/voice/JettPick.mp3',
    'KAY/O': 'assets/voice/KAYOPick.mp3',
    KILLJOY: 'assets/voice/KilljoyPick.mp3',
    NEON: 'assets/voice/NeonPick.mp3',
    OMEN: 'assets/voice/OmenPick.mp3',
    PHOENIX: 'assets/voice/PhoenixPick.mp3',
    RAZE: 'assets/voice/RazePick.mp3',
    REYNA: 'assets/voice/ReynaPick.mp3',
    SAGE: 'assets/voice/SagePick.mp3',
    SKYE: 'assets/voice/SkyePick.mp3',
    SOVA: 'assets/voice/SovaPick.mp3',
    TEJO: 'assets/voice/TejoPick.mp3',
    VETO: 'assets/voice/VetoPick.mp3',
    VIPER: 'assets/voice/ViperPick.mp3',
    VYSE: 'assets/voice/VysePick.mp3',
    WAYLAY: 'assets/voice/WaylayPick.mp3',
    YORU: 'assets/voice/YoruPick.mp3',
};

let currentVoiceLine = null;

function playAgentVoiceLine(agentName) {
    const url = AGENT_VOICELINES[agentName];
    if (!url) return;

    if (currentVoiceLine) {
        currentVoiceLine.pause();
        currentVoiceLine.currentTime = 0;
    }

    const audio = new Audio(url);
    audio.volume = 0.3;
    audio.play().catch(() => {});
    currentVoiceLine = audio;
}

function startRandomize(evt) {
    if (isAnimating) return;

    // Unlock AudioContext on first user gesture
    getAudioCtx();

    isAnimating = true;
    const btn = document.getElementById('randomBtn');
    btn.disabled = true;

    hideInfo();
    const pool = getPool();
    if (!pool.length) {
        isAnimating = false;
        btn.disabled = false;
        return;
    }

    const finalAgent = pool[Math.floor(Math.random() * pool.length)];
    flashOverlay();
    playFlash(); // UI flash beep

    const spinOverlay = document.getElementById('spinOverlay');
    const spinNameBig = document.getElementById('spinNameBig');
    const nameDisplay = document.getElementById('agentName');
    const roleTag = document.getElementById('roleTag');

    spinOverlay.classList.remove('hidden');
    document.getElementById('portraitPlaceholder').style.display = 'none';

    const spinAgents = [];
    for (let i = 0; i < 24; i++) {
        spinAgents.push(pool[Math.floor(Math.random() * pool.length)]);
    }
    spinAgents.push(finalAgent);

    // Pre-schedule ALL sounds using Web Audio clock for perfect sync
    const ac = getAudioCtx();
    let audioTime = ac.currentTime + 0.05; // tiny head start

    // Build delay array matching spinStep logic
    const delays = spinAgents.map((_, i) => {
        const prog = i / spinAgents.length;
        return prog < 0.55 ? 40 : prog < 0.75 ? 70 : prog < 0.88 ? 120 : 200;
    });

    // Schedule ticks ahead of time — pitch and volume mirror speed
    delays.forEach((ms, i) => {
        const prog = i / spinAgents.length;
        // Fast phase: high pitch, low volume. Slow phase: lower pitch, louder.
        const pitch = 1.8 - prog * 0.9;     // 1.8 → 0.9
        const vol   = 0.08 + prog * 0.2;    // 0.08 → 0.28
        scheduleTickAt(audioTime, pitch, vol);
        audioTime += ms / 1000;
    });
    // The final reveal sound fires right after last tick
    const revealAt = audioTime;
    const revealOsc = ac.createOscillator(); // dummy to schedule reveal via timer
    // We'll use setTimeout aligned to revealAt for simplicity (close enough)
    const msUntilReveal = (revealAt - ac.currentTime) * 1000;
    setTimeout(() => playReveal(), Math.max(0, msUntilReveal));

    let idx = 0;

    function spinStep() {
        if (idx >= spinAgents.length) {
            revealAgent(finalAgent);
            return;
        }

        const a = spinAgents[idx];
        const prog = idx / spinAgents.length;
        const delay = prog < 0.55 ? 40 : prog < 0.75 ? 70 : prog < 0.88 ? 120 : 200;

        spinNameBig.textContent = a.name;
        // Color flashes faster in fast phase, settles in slow phase
        spinNameBig.style.color = prog < 0.75
            ? (idx % 2 === 0 ? '#FF4655' : '#ECE8E1')
            : '#FF4655';
        nameDisplay.textContent = a.name;
        nameDisplay.classList.toggle('glitch');
        roleTag.textContent = a.role;
        const spinRoleColor = ROLE_COLORS[a.role] || '#FF4655';
        roleTag.style.color = spinRoleColor;
        roleTag.style.borderColor = spinRoleColor;

        // Visual shake intensity mirrors speed
        if (prog < 0.55) {
            spinNameBig.style.transform = `translate(${(Math.random()-0.5)*6}px,${(Math.random()-0.5)*3}px)`;
        } else {
            spinNameBig.style.transform = 'translate(0,0)';
        }

        idx++;
        setTimeout(spinStep, delay);
    }

    spinStep();

    const r = btn.getBoundingClientRect();
    const clickX = evt && typeof evt.clientX === 'number' ? evt.clientX : (r.left + r.width / 2);
    const clickY = evt && typeof evt.clientY === 'number' ? evt.clientY : (r.top + r.height / 2);
    spawnParticles(clickX, clickY, 40);
}

function revealAgent(agent) {
    const nameDisplay = document.getElementById('agentName');
    const roleTag = document.getElementById('roleTag');
    const spinOverlay = document.getElementById('spinOverlay');
    const agentImg = document.getElementById('agentImg');

    nameDisplay.classList.remove('glitch');
    nameDisplay.textContent = agent.name;
    nameDisplay.classList.add('shimmer-active');
    setTimeout(() => nameDisplay.classList.remove('shimmer-active'), 600);

    const rc = ROLE_COLORS[agent.role] || '#FF4655';
    roleTag.textContent = agent.role;
    roleTag.style.color = rc;
    roleTag.style.borderColor = rc;
    spinOverlay.classList.add('hidden');

    agentImg.onload = () => agentImg.classList.add('visible');
    agentImg.src = agent.img;
    agentImg.classList.add('visible');

    setTimeout(() => document.getElementById('agentStatus').classList.add('show'), 100);
    setTimeout(() => {
        const o = document.getElementById('agentOrigin');
        o.textContent = 'ORIGIN: ' + agent.origin;
        o.classList.add('show');
    }, 200);

    setTimeout(() => {
        document.getElementById('statsSection').classList.add('show');
        document.getElementById('aggrVal').textContent = agent.aggr + '%';
        document.getElementById('utilVal').textContent = agent.util + '%';
        document.getElementById('mobVal').textContent = agent.mob + '%';
        setTimeout(() => {
            document.getElementById('aggrBar').style.width = agent.aggr + '%';
            document.getElementById('utilBar').style.width = agent.util + '%';
            document.getElementById('mobBar').style.width = agent.mob + '%';
        }, 80);
    }, 350);

    setTimeout(() => {
        document.getElementById('abilitiesRow').classList.add('show');
        setAbility('C', agent.abilities[0]);
        setAbility('Q', agent.abilities[1]);
        setAbility('E', agent.abilities[2]);
        setAbility('X', agent.abilities[3]);
    }, 550);

    setTimeout(() => {
        const q = document.getElementById('agentQuote');
        q.textContent = '"' + agent.quote + '"';
        q.classList.add('show');
    }, 750);

    const chipId = 'chip-' + agent.name.replace('/', '');
    const chip = document.getElementById(chipId);
    if (chip) {
        chip.classList.add('highlighted');
        chip.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    const pf = document.querySelector('.portrait-frame'),
        r = pf.getBoundingClientRect();
    spawnParticles(r.left + r.width / 2, r.top + r.height / 2, 55);

    setTimeout(() => {
        isAnimating = false;
        document.getElementById('randomBtn').disabled = false;
        document.getElementById('randomBtn').textContent = '\u25B6 RANDOMIZE AGAIN';
    }, 900);

    playAgentVoiceLine(agent.name);
}

/* ============================================================
   MUSIC PLAYER
   ============================================================ */
(function() {
  const TRACKS = [
    {
      title: 'Casa de Vidro',
      artist: 'Beatriz Silva — Pearl Map Theme',
      src: 'mp3/Valorant Pearl - Official Map Reveal Theme Music (Beatriz Silva - Casa de Vidro).mp3'
    },
    {
      title: 'RAJA',
      artist: 'ARB4, Tienas, Mangal Suvarnan — VALORANT',
      src: 'mp3/RAJA  ARB4, Tienas, Mangal Suvarnan, and VALORANT - Official Audio.mp3'
    },
    {
      title: 'Die For You',
      artist: 'Grabbitz — VALORANT Champions 2021',
      src: 'mp3/Die For You ft. Grabbitz  Official Music Video  VALORANT Champions 2021.mp3'
    }
  ];

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    #valo-player {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 9999;
      width: 300px;
      background: rgba(10, 17, 25, 0.97);
      border: 1px solid rgba(255,70,85,0.35);
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
      font-family: 'Rajdhani', sans-serif;
      box-shadow: 0 0 30px rgba(255,70,85,0.12), inset 0 0 30px rgba(0,0,0,0.4);
      transition: transform 0.25s, opacity 0.25s;
      user-select: none;
    }
    #vp-body {
      padding: 12px 14px 14px;
      max-height: 420px;
      opacity: 1;
      overflow: hidden;
      transform: translateY(0);
      transition: max-height 0.28s ease, opacity 0.2s ease, transform 0.28s ease, padding 0.28s ease;
    }
    #valo-player.collapsed #vp-body {
      max-height: 0;
      opacity: 0;
      transform: translateY(8px);
      padding-top: 0;
      padding-bottom: 0;
      pointer-events: none;
    }
    #vp-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 14px 7px;
      border-bottom: 1px solid rgba(255,70,85,0.2);
      cursor: pointer;
    }
    #vp-header-label {
      font-family: 'Share Tech Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.35em;
      color: var(--red);
      text-transform: uppercase;
    }
    #vp-header-label::before { content: '// '; }
    #vp-toggle-btn {
      background: none;
      border: none;
      color: var(--offwhite);
      font-size: 11px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      letter-spacing: 0.1em;
      font-family: 'Share Tech Mono', monospace;
      transition: transform 0.28s ease, color 0.18s ease;
    }
    #valo-player.collapsed #vp-toggle-btn {
      transform: rotate(180deg);
    }
    #vp-track-info { margin-bottom: 10px; }
    #vp-title {
      font-family: 'Bebas Neue', cursive;
      font-size: 18px;
      letter-spacing: 0.08em;
      color: var(--white);
      line-height: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #vp-artist {
      font-family: 'Share Tech Mono', monospace;
      font-size: 8px;
      letter-spacing: 0.2em;
      color: var(--offwhite);
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #vp-progress-wrap {
      position: relative;
      margin-bottom: 6px;
    }
    #vp-slider {
      -webkit-appearance: none;
      width: 100%;
      height: 3px;
      background: rgba(255,255,255,0.1);
      outline: none;
      cursor: pointer;
      border: none;
    }
    #vp-slider::-webkit-slider-runnable-track {
      height: 3px;
      background: linear-gradient(to right, var(--red) var(--prog, 0%), rgba(255,255,255,0.1) var(--prog, 0%));
    }
    #vp-slider::-moz-range-track {
      height: 3px;
      background: rgba(255,255,255,0.1);
    }
    #vp-slider::-moz-range-progress {
      background: var(--red);
      height: 3px;
    }
    #vp-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 10px;
      height: 10px;
      background: var(--white);
      border: 2px solid var(--red);
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      margin-top: -3.5px;
      cursor: pointer;
    }
    #vp-slider::-moz-range-thumb {
      width: 10px;
      height: 10px;
      background: var(--white);
      border: 2px solid var(--red);
      cursor: pointer;
    }
    #vp-times {
      display: flex;
      justify-content: space-between;
      font-family: 'Share Tech Mono', monospace;
      font-size: 8px;
      color: var(--offwhite);
      letter-spacing: 0.1em;
      margin-top: 4px;
    }
    #vp-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 12px;
    }
    .vp-btn {
      background: none;
      border: 1px solid rgba(255,255,255,0.12);
      color: var(--offwhite);
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      clip-path: polygon(6px 0%, calc(100% - 6px) 0%, 100% 50%, calc(100% - 6px) 100%, 6px 100%, 0% 50%);
      font-size: 12px;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
    }
    .vp-btn:hover { background: rgba(255,70,85,0.15); border-color: var(--red); color: var(--white); }
    .vp-btn.active { background: var(--red); border-color: var(--red); color: var(--dark); }
    #vp-play-btn { width: 40px; height: 40px; font-size: 14px; }
    #vp-vol-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 11px;
      border-top: 1px solid rgba(255,255,255,0.06);
      padding-top: 10px;
    }
    #vp-mute-btn {
      background: none;
      border: none;
      color: var(--offwhite);
      cursor: pointer;
      font-size: 12px;
      padding: 0;
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      transition: color 0.15s;
    }
    #vp-mute-btn:hover { color: var(--red); }
    #vp-mute-btn svg {
      width: 16px;
      height: 16px;
      display: block;
      fill: currentColor;
    }
    #vp-vol-slider {
      -webkit-appearance: none;
      flex: 1;
      height: 2px;
      background: rgba(255,255,255,0.1);
      outline: none;
      cursor: pointer;
    }
    #vp-vol-slider::-webkit-slider-runnable-track {
      height: 2px;
      background: linear-gradient(to right, rgba(255,255,255,0.5) var(--vprog, 70%), rgba(255,255,255,0.1) var(--vprog, 70%));
    }
    #vp-vol-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 8px;
      height: 8px;
      background: var(--white);
      border-radius: 50%;
      margin-top: -3px;
      cursor: pointer;
    }
    #vp-vol-label {
      font-family: 'Share Tech Mono', monospace;
      font-size: 8px;
      color: var(--offwhite);
      width: 24px;
      text-align: right;
      letter-spacing: 0.1em;
    }
    #vp-loading {
      font-family: 'Share Tech Mono', monospace;
      font-size: 8px;
      color: var(--teal);
      letter-spacing: 0.25em;
      text-align: center;
      margin-top: 4px;
      min-height: 12px;
    }
  `;
  document.head.appendChild(style);

  // Build HTML
  const player = document.createElement('div');
  player.id = 'valo-player';
  player.innerHTML = `
    <div id="vp-header">
      <span id="vp-header-label">MUSIC PLAYER</span>
      <button id="vp-toggle-btn">▼</button>
    </div>
    <div id="vp-body">
      <div id="vp-track-info">
        <div id="vp-title">—</div>
        <div id="vp-artist">—</div>
      </div>
      <div id="vp-progress-wrap">
        <input type="range" id="vp-slider" min="0" max="100" value="0" step="0.1">
        <div id="vp-times"><span id="vp-cur">0:00</span><span id="vp-dur">0:00</span></div>
      </div>
      <div id="vp-controls">
        <button class="vp-btn" id="vp-prev-btn" title="Previous">⏮</button>
        <button class="vp-btn" id="vp-play-btn" title="Play/Pause">▶</button>
        <button class="vp-btn" id="vp-next-btn" title="Next">⏭</button>
      </div>
      <div id="vp-vol-wrap">
        <button id="vp-mute-btn" title="Mute" aria-label="Mute"></button>
        <input type="range" id="vp-vol-slider" min="0" max="100" value="15" step="1">
        <span id="vp-vol-label">15%</span>
      </div>
      <div id="vp-loading"></div>
    </div>
  `;
  document.body.appendChild(player);

  // State
  let trackIdx = 0;
  let audio = new Audio();
  audio.volume = 0.15;
  let isMuted = false;
  let prevVol = 0.15;
  let isSeeking = false;

  const $ = id => document.getElementById(id);
  const ICON_VOLUME_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3.23v17.54a1 1 0 0 1-1.64.77L7.55 18H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3.55l4.81-3.54A1 1 0 0 1 14 3.23z"/><path d="M16.5 8.5a1 1 0 0 1 1.41 0 5 5 0 0 1 0 7.07 1 1 0 0 1-1.41-1.41 3 3 0 0 0 0-4.25 1 1 0 0 1 0-1.41z"/><path d="M19.33 5.67a1 1 0 0 1 1.41 0 9 9 0 0 1 0 12.73 1 1 0 0 1-1.41-1.41 7 7 0 0 0 0-9.91 1 1 0 0 1 0-1.41z"/></svg>';
  const ICON_VOLUME_OFF = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3.23v17.54a1 1 0 0 1-1.64.77L7.55 18H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3.55l4.81-3.54A1 1 0 0 1 14 3.23z"/><path d="M18.3 8.29a1 1 0 0 1 1.4 0L21 9.59l1.29-1.3a1 1 0 1 1 1.42 1.42L22.41 11l1.3 1.29a1 1 0 0 1-1.42 1.42L21 12.41l-1.29 1.3a1 1 0 1 1-1.42-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 0-1.42z"/></svg>';

  function fmt(t) {
    if (isNaN(t) || !isFinite(t)) return '0:00';
    const m = Math.floor(t / 60), s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function loadTrack(idx, play) {
    trackIdx = idx;
    const t = TRACKS[idx];
    $('vp-title').textContent = t.title;
    $('vp-artist').textContent = t.artist;
    $('vp-loading').textContent = 'LOADING...';
    $('vp-slider').value = 0;
    $('vp-cur').textContent = '0:00';
    $('vp-dur').textContent = '0:00';
    updateSliderFill(0);
    audio.src = t.src;
    audio.load();
    if (play) {
      audio.play().then(() => {
        $('vp-loading').textContent = '';
        $('vp-play-btn').textContent = '⏸';
      }).catch(() => {
        $('vp-loading').textContent = 'CLICK PLAY TO START';
        $('vp-play-btn').textContent = '▶';
      });
    } else {
      $('vp-play-btn').textContent = '▶';
      $('vp-loading').textContent = '';
    }
  }

  function updateSliderFill(pct) {
    $('vp-slider').style.setProperty('--prog', pct + '%');
  }

  function updateVolFill(val) {
    $('vp-vol-slider').style.setProperty('--vprog', val + '%');
  }
  function setMuteIcon(muted) {
    $('vp-mute-btn').innerHTML = muted ? ICON_VOLUME_OFF : ICON_VOLUME_ON;
    $('vp-mute-btn').setAttribute('title', muted ? 'Unmute' : 'Mute');
    $('vp-mute-btn').setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
  }

  // Audio events
  audio.addEventListener('timeupdate', () => {
    if (!isSeeking && audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      $('vp-slider').value = pct;
      updateSliderFill(pct);
      $('vp-cur').textContent = fmt(audio.currentTime);
    }
  });
  audio.addEventListener('loadedmetadata', () => {
    $('vp-dur').textContent = fmt(audio.duration);
    $('vp-loading').textContent = '';
  });
  audio.addEventListener('play', () => { $('vp-play-btn').textContent = '⏸'; });
  audio.addEventListener('pause', () => { $('vp-play-btn').textContent = '▶'; });
  audio.addEventListener('ended', () => {
    const next = (trackIdx + 1) % TRACKS.length;
    loadTrack(next, true);
  });
  audio.addEventListener('error', () => {
    $('vp-loading').textContent = 'STREAM ERROR — TRY DIRECT LINK';
  });

  // Controls
  $('vp-play-btn').addEventListener('click', () => {
    if (audio.paused) {
      if (!audio.src) { loadTrack(0, true); return; }
      audio.play().then(() => $('vp-loading').textContent = '').catch(() => $('vp-loading').textContent = 'AUTOPLAY BLOCKED');
    } else {
      audio.pause();
    }
  });

  $('vp-prev-btn').addEventListener('click', () => {
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    const prev = (trackIdx - 1 + TRACKS.length) % TRACKS.length;
    loadTrack(prev, !audio.paused);
  });

  $('vp-next-btn').addEventListener('click', () => {
    const next = (trackIdx + 1) % TRACKS.length;
    loadTrack(next, !audio.paused);
  });

  $('vp-slider').addEventListener('mousedown', () => { isSeeking = true; });
  $('vp-slider').addEventListener('touchstart', () => { isSeeking = true; });
  $('vp-slider').addEventListener('input', () => {
    if (audio.duration) {
      const t = (parseFloat($('vp-slider').value) / 100) * audio.duration;
      $('vp-cur').textContent = fmt(t);
      updateSliderFill(parseFloat($('vp-slider').value));
    }
  });
  $('vp-slider').addEventListener('change', () => {
    isSeeking = false;
    if (audio.duration) {
      audio.currentTime = (parseFloat($('vp-slider').value) / 100) * audio.duration;
    }
  });
  $('vp-slider').addEventListener('mouseup', () => { isSeeking = false; });

  $('vp-mute-btn').addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    setMuteIcon(isMuted);
  });

  $('vp-vol-slider').addEventListener('input', () => {
    const val = parseInt($('vp-vol-slider').value);
    audio.volume = val / 100;
    prevVol = audio.volume;
    $('vp-vol-label').textContent = val + '%';
    updateVolFill(val);
    if (val === 0) { audio.muted = true; isMuted = true; }
    else { audio.muted = false; isMuted = false; }
    setMuteIcon(isMuted);
  });
  updateVolFill(15);
  setMuteIcon(false);

  // Collapse toggle
  $('vp-header').addEventListener('click', () => {
    player.classList.toggle('collapsed');
  });
  // Don't collapse when clicking the toggle button itself propagation already handled
  $('vp-toggle-btn').addEventListener('click', e => e.stopPropagation());

  // Load first track (no autoplay)
  loadTrack(0, false);
})();

ag.addEventListener('click', (e) => {
    const chip = e.target.closest('.agent-chip');
    if (!chip || isAnimating) return;

    const agent = AGENTS.find((a) => a.name === chip.dataset.agent);
    if (!agent) return;

    getAudioCtx(); // unlock
    playFlash();

    hideInfo();
    isAnimating = true;

    const spinOverlay = document.getElementById('spinOverlay');
    spinOverlay.classList.remove('hidden');
    document.getElementById('spinNameBig').textContent = agent.name;
    document.getElementById('agentName').textContent = agent.name;
    document.getElementById('roleTag').textContent = agent.role;
    document.getElementById('portraitPlaceholder').style.display = 'none';

    setTimeout(() => playReveal(), 200);
    setTimeout(() => revealAgent(agent), 250);
    });
