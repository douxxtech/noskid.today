//Cool.js | Idk i just find it cool

function spawnCool(event) {
    event.preventDefault();

    const coolwin = ClassicWindow.createWindow({
        title: 'Ts is so cool',
        width: 500,
        height: 400,
        x: Math.round((window.innerWidth - 500) / 2),
        y: Math.round((window.innerHeight - 400) / 2),
        theme: 'dark',
        statusText: 'ts is fire, isnt it ?'
    });

    doTheCool(coolwin);
    log('Cool is here !', 'success');

    addAchievement('Cool Thing Finder');
    return coolwin;
}


function doTheCool(coolwin) {
    const coolContent = `
<style>
    .scene {
        transform: translate(-15em, 15em) rotateX(75deg) rotate(22.5deg);
    }

    .scene,
    .scene * {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        transform-style: preserve-3d;
    }

    .assembly:nth-child(1) {
        z-index: -1;
        transform: translate(0, -5em);
        animation: slide1 1s ease-in-out infinite;
    }

    @keyframes slide1 {
        to {
            transform: translate(3em, -5em);
        }
    }

    .assembly:nth-child(1) .roller {
        transform: rotateY(90deg) translateZ(1.5em) rotateY(-270deg);
        animation: inherit;
        animation-name: roll1a;
    }

    .assembly:nth-child(1) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-90deg) translateZ(-1.5em) rotateY(-90deg);
        animation-name: roll1b;
    }

    @keyframes roll1a {
        to {
            transform: rotateY(-90deg) translateZ(1.5em) rotateY(-270deg);
        }
    }

    @keyframes roll1b {
        to {
            transform: rotateY(90deg) translateZ(-1.5em) rotateY(-90deg);
        }
    }

    .assembly:nth-child(1) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(1) .side:nth-child(1) {
        transform: rotateY(0deg);
    }

    .assembly:nth-child(1) .side:nth-child(2) {
        transform: rotateY(180deg);
    }

    .assembly:nth-child(2) {
        z-index: -2;
        transform: translate(0, -10em);
        animation: slide2 1s ease-in-out infinite;
    }

    @keyframes slide2 {
        to {
            transform: translate(3em, -10em);
        }
    }

    .assembly:nth-child(2) .roller {
        transform: rotateY(60deg) translateZ(1.73205em) rotateY(-120deg);
        animation: inherit;
        animation-name: roll2a;
    }

    .assembly:nth-child(2) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-60deg) translateZ(-1.73205em) rotateY(-60deg);
        animation-name: roll2b;
    }

    @keyframes roll2a {
        to {
            transform: rotateY(-60deg) translateZ(1.73205em) rotateY(-120deg);
        }
    }

    @keyframes roll2b {
        to {
            transform: rotateY(60deg) translateZ(-1.73205em) rotateY(-60deg);
        }
    }

    .assembly:nth-child(2) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(2) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(0.86603em);
    }

    .assembly:nth-child(2) .side:nth-child(2) {
        transform: rotateY(120deg) translateZ(0.86603em);
    }

    .assembly:nth-child(2) .side:nth-child(3) {
        transform: rotateY(240deg) translateZ(0.86603em);
    }

    .assembly:nth-child(3) {
        z-index: -3;
        transform: translate(0, -15em);
        animation: slide3 1s ease-in-out infinite;
    }

    @keyframes slide3 {
        to {
            transform: translate(3em, -15em);
        }
    }

    .assembly:nth-child(3) .roller {
        transform: rotateY(45deg) translateZ(2.12132em) rotateY(-135deg);
        animation: inherit;
        animation-name: roll3a;
    }

    .assembly:nth-child(3) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-45deg) translateZ(-2.12132em) rotateY(-45deg);
        animation-name: roll3b;
    }

    @keyframes roll3a {
        to {
            transform: rotateY(-45deg) translateZ(2.12132em) rotateY(-135deg);
        }
    }

    @keyframes roll3b {
        to {
            transform: rotateY(45deg) translateZ(-2.12132em) rotateY(-45deg);
        }
    }

    .assembly:nth-child(3) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(3) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(1.5em);
    }

    .assembly:nth-child(3) .side:nth-child(1):before {
        height: 1.5em;
        left: .125em;
        width: calc(3em - .125em);
    }

    .assembly:nth-child(3) .side:nth-child(2) {
        transform: rotateY(90deg) translateZ(1.5em);
    }

    .assembly:nth-child(3) .side:nth-child(2):before {
        height: 1.5em;
        left: .125em;
        width: calc(3em - .125em);
    }

    .assembly:nth-child(3) .side:nth-child(3) {
        transform: rotateY(180deg) translateZ(1.5em);
    }

    .assembly:nth-child(3) .side:nth-child(3):before {
        height: 1.5em;
        left: .125em;
        width: calc(3em - .125em);
    }

    .assembly:nth-child(3) .side:nth-child(4) {
        transform: rotateY(270deg) translateZ(1.5em);
    }

    .assembly:nth-child(3) .side:nth-child(4):before {
        height: 1.5em;
        left: .125em;
        width: calc(3em - .125em);
    }

    .assembly:nth-child(4) {
        z-index: -4;
        transform: translate(0, -20em);
        animation: slide4 1s ease-in-out infinite;
    }

    @keyframes slide4 {
        to {
            transform: translate(3em, -20em);
        }
    }

    .assembly:nth-child(4) .roller {
        transform: rotateY(36deg) translateZ(2.55195em) rotateY(-72deg);
        animation: inherit;
        animation-name: roll4a;
    }

    .assembly:nth-child(4) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-36deg) translateZ(-2.55195em) rotateY(-36deg);
        animation-name: roll4b;
    }

    @keyframes roll4a {
        to {
            transform: rotateY(-36deg) translateZ(2.55195em) rotateY(-72deg);
        }
    }

    @keyframes roll4b {
        to {
            transform: rotateY(36deg) translateZ(-2.55195em) rotateY(-36deg);
        }
    }

    .assembly:nth-child(4) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(4) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(2.06457em);
    }

    .assembly:nth-child(4) .side:nth-child(1):before {
        height: 2.06457em;
    }

    .assembly:nth-child(4) .side:nth-child(2) {
        transform: rotateY(72deg) translateZ(2.06457em);
    }

    .assembly:nth-child(4) .side:nth-child(2):before {
        height: 2.06457em;
    }

    .assembly:nth-child(4) .side:nth-child(3) {
        transform: rotateY(144deg) translateZ(2.06457em);
    }

    .assembly:nth-child(4) .side:nth-child(3):before {
        height: 2.06457em;
    }

    .assembly:nth-child(4) .side:nth-child(4) {
        transform: rotateY(216deg) translateZ(2.06457em);
    }

    .assembly:nth-child(4) .side:nth-child(4):before {
        height: 2.06457em;
    }

    .assembly:nth-child(4) .side:nth-child(5) {
        transform: rotateY(288deg) translateZ(2.06457em);
    }

    .assembly:nth-child(4) .side:nth-child(5):before {
        height: 2.06457em;
    }

    .assembly:nth-child(5) {
        z-index: -5;
        transform: translate(0, -25em);
        animation: slide5 1s ease-in-out infinite;
    }

    @keyframes slide5 {
        to {
            transform: translate(3em, -25em);
        }
    }

    .assembly:nth-child(5) .roller {
        transform: rotateY(30deg) translateZ(3em) rotateY(-90deg);
        animation: inherit;
        animation-name: roll5a;
    }

    .assembly:nth-child(5) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-30deg) translateZ(-3em) rotateY(-30deg);
        animation-name: roll5b;
    }

    @keyframes roll5a {
        to {
            transform: rotateY(-30deg) translateZ(3em) rotateY(-90deg);
        }
    }

    @keyframes roll5b {
        to {
            transform: rotateY(30deg) translateZ(-3em) rotateY(-30deg);
        }
    }

    .assembly:nth-child(5) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(5) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(2.59808em);
    }

    .assembly:nth-child(5) .side:nth-child(1):before {
        height: 2.59808em;
    }

    .assembly:nth-child(5) .side:nth-child(2) {
        transform: rotateY(60deg) translateZ(2.59808em);
    }

    .assembly:nth-child(5) .side:nth-child(2):before {
        height: 2.59808em;
    }

    .assembly:nth-child(5) .side:nth-child(3) {
        transform: rotateY(120deg) translateZ(2.59808em);
    }

    .assembly:nth-child(5) .side:nth-child(3):before {
        height: 2.59808em;
    }

    .assembly:nth-child(5) .side:nth-child(4) {
        transform: rotateY(180deg) translateZ(2.59808em);
    }

    .assembly:nth-child(5) .side:nth-child(4):before {
        height: 2.59808em;
    }

    .assembly:nth-child(5) .side:nth-child(5) {
        transform: rotateY(240deg) translateZ(2.59808em);
    }

    .assembly:nth-child(5) .side:nth-child(5):before {
        height: 2.59808em;
    }

    .assembly:nth-child(5) .side:nth-child(6) {
        transform: rotateY(300deg) translateZ(2.59808em);
    }

    .assembly:nth-child(5) .side:nth-child(6):before {
        height: 2.59808em;
    }

    .assembly:nth-child(6) {
        z-index: -6;
        transform: translate(0, -30em);
        animation: slide6 1s ease-in-out infinite;
    }

    @keyframes slide6 {
        to {
            transform: translate(3em, -30em);
        }
    }

    .assembly:nth-child(6) .roller {
        transform: rotateY(25.71429deg) translateZ(3.45715em) rotateY(-51.42857deg);
        animation: inherit;
        animation-name: roll6a;
    }

    .assembly:nth-child(6) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-25.71429deg) translateZ(-3.45715em) rotateY(-25.71429deg);
        animation-name: roll6b;
    }

    @keyframes roll6a {
        to {
            transform: rotateY(-25.71429deg) translateZ(3.45715em) rotateY(-51.42857deg);
        }
    }

    @keyframes roll6b {
        to {
            transform: rotateY(25.71429deg) translateZ(-3.45715em) rotateY(-25.71429deg);
        }
    }

    .assembly:nth-child(6) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(6) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(3.11478em);
    }

    .assembly:nth-child(6) .side:nth-child(1):before {
        height: 3.11478em;
    }

    .assembly:nth-child(6) .side:nth-child(2) {
        transform: rotateY(51.42857deg) translateZ(3.11478em);
    }

    .assembly:nth-child(6) .side:nth-child(2):before {
        height: 3.11478em;
    }

    .assembly:nth-child(6) .side:nth-child(3) {
        transform: rotateY(102.85714deg) translateZ(3.11478em);
    }

    .assembly:nth-child(6) .side:nth-child(3):before {
        height: 3.11478em;
    }

    .assembly:nth-child(6) .side:nth-child(4) {
        transform: rotateY(154.28571deg) translateZ(3.11478em);
    }

    .assembly:nth-child(6) .side:nth-child(4):before {
        height: 3.11478em;
    }

    .assembly:nth-child(6) .side:nth-child(5) {
        transform: rotateY(205.71429deg) translateZ(3.11478em);
    }

    .assembly:nth-child(6) .side:nth-child(5):before {
        height: 3.11478em;
    }

    .assembly:nth-child(6) .side:nth-child(6) {
        transform: rotateY(257.14286deg) translateZ(3.11478em);
    }

    .assembly:nth-child(6) .side:nth-child(6):before {
        height: 3.11478em;
    }

    .assembly:nth-child(6) .side:nth-child(7) {
        transform: rotateY(308.57143deg) translateZ(3.11478em);
    }

    .assembly:nth-child(6) .side:nth-child(7):before {
        height: 3.11478em;
    }

    .assembly:nth-child(7) {
        z-index: -7;
        transform: translate(0, -35em);
        animation: slide7 1s ease-in-out infinite;
    }

    @keyframes slide7 {
        to {
            transform: translate(3em, -35em);
        }
    }

    .assembly:nth-child(7) .roller {
        transform: rotateY(22.5deg) translateZ(3.91969em) rotateY(-67.5deg);
        animation: inherit;
        animation-name: roll7a;
    }

    .assembly:nth-child(7) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-22.5deg) translateZ(-3.91969em) rotateY(-22.5deg);
        animation-name: roll7b;
    }

    @keyframes roll7a {
        to {
            transform: rotateY(-22.5deg) translateZ(3.91969em) rotateY(-67.5deg);
        }
    }

    @keyframes roll7b {
        to {
            transform: rotateY(22.5deg) translateZ(-3.91969em) rotateY(-22.5deg);
        }
    }

    .assembly:nth-child(7) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(7) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(3.62132em);
    }

    .assembly:nth-child(7) .side:nth-child(1):before {
        height: 3.62132em;
    }

    .assembly:nth-child(7) .side:nth-child(2) {
        transform: rotateY(45deg) translateZ(3.62132em);
    }

    .assembly:nth-child(7) .side:nth-child(2):before {
        height: 3.62132em;
    }

    .assembly:nth-child(7) .side:nth-child(3) {
        transform: rotateY(90deg) translateZ(3.62132em);
    }

    .assembly:nth-child(7) .side:nth-child(3):before {
        height: 3.62132em;
    }

    .assembly:nth-child(7) .side:nth-child(4) {
        transform: rotateY(135deg) translateZ(3.62132em);
    }

    .assembly:nth-child(7) .side:nth-child(4):before {
        height: 3.62132em;
    }

    .assembly:nth-child(7) .side:nth-child(5) {
        transform: rotateY(180deg) translateZ(3.62132em);
    }

    .assembly:nth-child(7) .side:nth-child(5):before {
        height: 3.62132em;
    }

    .assembly:nth-child(7) .side:nth-child(6) {
        transform: rotateY(225deg) translateZ(3.62132em);
    }

    .assembly:nth-child(7) .side:nth-child(6):before {
        height: 3.62132em;
    }

    .assembly:nth-child(7) .side:nth-child(7) {
        transform: rotateY(270deg) translateZ(3.62132em);
    }

    .assembly:nth-child(7) .side:nth-child(7):before {
        height: 3.62132em;
    }

    .assembly:nth-child(7) .side:nth-child(8) {
        transform: rotateY(315deg) translateZ(3.62132em);
    }

    .assembly:nth-child(7) .side:nth-child(8):before {
        height: 3.62132em;
    }

    .assembly:nth-child(8) {
        z-index: -8;
        transform: translate(0, -40em);
        animation: slide8 1s ease-in-out infinite;
    }

    @keyframes slide8 {
        to {
            transform: translate(3em, -40em);
        }
    }

    .assembly:nth-child(8) .roller {
        transform: rotateY(20deg) translateZ(4.38571em) rotateY(-40deg);
        animation: inherit;
        animation-name: roll8a;
    }

    .assembly:nth-child(8) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-20deg) translateZ(-4.38571em) rotateY(-20deg);
        animation-name: roll8b;
    }

    @keyframes roll8a {
        to {
            transform: rotateY(-20deg) translateZ(4.38571em) rotateY(-40deg);
        }
    }

    @keyframes roll8b {
        to {
            transform: rotateY(20deg) translateZ(-4.38571em) rotateY(-20deg);
        }
    }

    .assembly:nth-child(8) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(8) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(4.12122em);
    }

    .assembly:nth-child(8) .side:nth-child(1):before {
        height: 4.12122em;
    }

    .assembly:nth-child(8) .side:nth-child(2) {
        transform: rotateY(40deg) translateZ(4.12122em);
    }

    .assembly:nth-child(8) .side:nth-child(2):before {
        height: 4.12122em;
    }

    .assembly:nth-child(8) .side:nth-child(3) {
        transform: rotateY(80deg) translateZ(4.12122em);
    }

    .assembly:nth-child(8) .side:nth-child(3):before {
        height: 4.12122em;
    }

    .assembly:nth-child(8) .side:nth-child(4) {
        transform: rotateY(120deg) translateZ(4.12122em);
    }

    .assembly:nth-child(8) .side:nth-child(4):before {
        height: 4.12122em;
    }

    .assembly:nth-child(8) .side:nth-child(5) {
        transform: rotateY(160deg) translateZ(4.12122em);
    }

    .assembly:nth-child(8) .side:nth-child(5):before {
        height: 4.12122em;
    }

    .assembly:nth-child(8) .side:nth-child(6) {
        transform: rotateY(200deg) translateZ(4.12122em);
    }

    .assembly:nth-child(8) .side:nth-child(6):before {
        height: 4.12122em;
    }

    .assembly:nth-child(8) .side:nth-child(7) {
        transform: rotateY(240deg) translateZ(4.12122em);
    }

    .assembly:nth-child(8) .side:nth-child(7):before {
        height: 4.12122em;
    }

    .assembly:nth-child(8) .side:nth-child(8) {
        transform: rotateY(280deg) translateZ(4.12122em);
    }

    .assembly:nth-child(8) .side:nth-child(8):before {
        height: 4.12122em;
    }

    .assembly:nth-child(8) .side:nth-child(9) {
        transform: rotateY(320deg) translateZ(4.12122em);
    }

    .assembly:nth-child(8) .side:nth-child(9):before {
        height: 4.12122em;
    }

    .assembly:nth-child(9) {
        z-index: -9;
        transform: translate(0, -45em);
        animation: slide9 1s ease-in-out infinite;
    }

    @keyframes slide9 {
        to {
            transform: translate(3em, -45em);
        }
    }

    .assembly:nth-child(9) .roller {
        transform: rotateY(18deg) translateZ(4.8541em) rotateY(-54deg);
        animation: inherit;
        animation-name: roll9a;
    }

    .assembly:nth-child(9) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-18deg) translateZ(-4.8541em) rotateY(-18deg);
        animation-name: roll9b;
    }

    @keyframes roll9a {
        to {
            transform: rotateY(-18deg) translateZ(4.8541em) rotateY(-54deg);
        }
    }

    @keyframes roll9b {
        to {
            transform: rotateY(18deg) translateZ(-4.8541em) rotateY(-18deg);
        }
    }

    .assembly:nth-child(9) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(9) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(4.61653em);
    }

    .assembly:nth-child(9) .side:nth-child(1):before {
        height: 4.61653em;
    }

    .assembly:nth-child(9) .side:nth-child(2) {
        transform: rotateY(36deg) translateZ(4.61653em);
    }

    .assembly:nth-child(9) .side:nth-child(2):before {
        height: 4.61653em;
    }

    .assembly:nth-child(9) .side:nth-child(3) {
        transform: rotateY(72deg) translateZ(4.61653em);
    }

    .assembly:nth-child(9) .side:nth-child(3):before {
        height: 4.61653em;
    }

    .assembly:nth-child(9) .side:nth-child(4) {
        transform: rotateY(108deg) translateZ(4.61653em);
    }

    .assembly:nth-child(9) .side:nth-child(4):before {
        height: 4.61653em;
    }

    .assembly:nth-child(9) .side:nth-child(5) {
        transform: rotateY(144deg) translateZ(4.61653em);
    }

    .assembly:nth-child(9) .side:nth-child(5):before {
        height: 4.61653em;
    }

    .assembly:nth-child(9) .side:nth-child(6) {
        transform: rotateY(180deg) translateZ(4.61653em);
    }

    .assembly:nth-child(9) .side:nth-child(6):before {
        height: 4.61653em;
    }

    .assembly:nth-child(9) .side:nth-child(7) {
        transform: rotateY(216deg) translateZ(4.61653em);
    }

    .assembly:nth-child(9) .side:nth-child(7):before {
        height: 4.61653em;
    }

    .assembly:nth-child(9) .side:nth-child(8) {
        transform: rotateY(252deg) translateZ(4.61653em);
    }

    .assembly:nth-child(9) .side:nth-child(8):before {
        height: 4.61653em;
    }

    .assembly:nth-child(9) .side:nth-child(9) {
        transform: rotateY(288deg) translateZ(4.61653em);
    }

    .assembly:nth-child(9) .side:nth-child(9):before {
        height: 4.61653em;
    }

    .assembly:nth-child(9) .side:nth-child(10) {
        transform: rotateY(324deg) translateZ(4.61653em);
    }

    .assembly:nth-child(9) .side:nth-child(10):before {
        height: 4.61653em;
    }

    .assembly:nth-child(10) {
        z-index: -10;
        transform: translate(0, -50em);
        animation: slide10 1s ease-in-out infinite;
    }

    @keyframes slide10 {
        to {
            transform: translate(3em, -50em);
        }
    }

    .assembly:nth-child(10) .roller {
        transform: rotateY(16.36364deg) translateZ(5.3242em) rotateY(-32.72727deg);
        animation: inherit;
        animation-name: roll10a;
    }

    .assembly:nth-child(10) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-16.36364deg) translateZ(-5.3242em) rotateY(-16.36364deg);
        animation-name: roll10b;
    }

    @keyframes roll10a {
        to {
            transform: rotateY(-16.36364deg) translateZ(5.3242em) rotateY(-32.72727deg);
        }
    }

    @keyframes roll10b {
        to {
            transform: rotateY(16.36364deg) translateZ(-5.3242em) rotateY(-16.36364deg);
        }
    }

    .assembly:nth-child(10) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(10) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(1):before {
        height: 5.10853em;
    }

    .assembly:nth-child(10) .side:nth-child(2) {
        transform: rotateY(32.72727deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(2):before {
        height: 5.10853em;
    }

    .assembly:nth-child(10) .side:nth-child(3) {
        transform: rotateY(65.45455deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(3):before {
        height: 5.10853em;
    }

    .assembly:nth-child(10) .side:nth-child(4) {
        transform: rotateY(98.18182deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(4):before {
        height: 5.10853em;
    }

    .assembly:nth-child(10) .side:nth-child(5) {
        transform: rotateY(130.90909deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(5):before {
        height: 5.10853em;
    }

    .assembly:nth-child(10) .side:nth-child(6) {
        transform: rotateY(163.63636deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(6):before {
        height: 5.10853em;
    }

    .assembly:nth-child(10) .side:nth-child(7) {
        transform: rotateY(196.36364deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(7):before {
        height: 5.10853em;
    }

    .assembly:nth-child(10) .side:nth-child(8) {
        transform: rotateY(229.09091deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(8):before {
        height: 5.10853em;
    }

    .assembly:nth-child(10) .side:nth-child(9) {
        transform: rotateY(261.81818deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(9):before {
        height: 5.10853em;
    }

    .assembly:nth-child(10) .side:nth-child(10) {
        transform: rotateY(294.54545deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(10):before {
        height: 5.10853em;
    }

    .assembly:nth-child(10) .side:nth-child(11) {
        transform: rotateY(327.27273deg) translateZ(5.10853em);
    }

    .assembly:nth-child(10) .side:nth-child(11):before {
        height: 5.10853em;
    }

    .assembly:nth-child(11) {
        z-index: -11;
        transform: translate(0, -55em);
        animation: slide11 1s ease-in-out infinite;
    }

    @keyframes slide11 {
        to {
            transform: translate(3em, -55em);
        }
    }

    .assembly:nth-child(11) .roller {
        transform: rotateY(15deg) translateZ(5.79555em) rotateY(-45deg);
        animation: inherit;
        animation-name: roll11a;
    }

    .assembly:nth-child(11) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-15deg) translateZ(-5.79555em) rotateY(-15deg);
        animation-name: roll11b;
    }

    @keyframes roll11a {
        to {
            transform: rotateY(-15deg) translateZ(5.79555em) rotateY(-45deg);
        }
    }

    @keyframes roll11b {
        to {
            transform: rotateY(15deg) translateZ(-5.79555em) rotateY(-15deg);
        }
    }

    .assembly:nth-child(11) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(11) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(1):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(2) {
        transform: rotateY(30deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(2):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(3) {
        transform: rotateY(60deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(3):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(4) {
        transform: rotateY(90deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(4):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(5) {
        transform: rotateY(120deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(5):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(6) {
        transform: rotateY(150deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(6):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(7) {
        transform: rotateY(180deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(7):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(8) {
        transform: rotateY(210deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(8):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(9) {
        transform: rotateY(240deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(9):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(10) {
        transform: rotateY(270deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(10):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(11) {
        transform: rotateY(300deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(11):before {
        height: 5.59808em;
    }

    .assembly:nth-child(11) .side:nth-child(12) {
        transform: rotateY(330deg) translateZ(5.59808em);
    }

    .assembly:nth-child(11) .side:nth-child(12):before {
        height: 5.59808em;
    }

    .assembly:nth-child(12) {
        z-index: -12;
        transform: translate(0, -60em);
        animation: slide12 1s ease-in-out infinite;
    }

    @keyframes slide12 {
        to {
            transform: translate(3em, -60em);
        }
    }

    .assembly:nth-child(12) .roller {
        transform: rotateY(13.84615deg) translateZ(6.26787em) rotateY(-27.69231deg);
        animation: inherit;
        animation-name: roll12a;
    }

    .assembly:nth-child(12) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-13.84615deg) translateZ(-6.26787em) rotateY(-13.84615deg);
        animation-name: roll12b;
    }

    @keyframes roll12a {
        to {
            transform: rotateY(-13.84615deg) translateZ(6.26787em) rotateY(-27.69231deg);
        }
    }

    @keyframes roll12b {
        to {
            transform: rotateY(13.84615deg) translateZ(-6.26787em) rotateY(-13.84615deg);
        }
    }

    .assembly:nth-child(12) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(12) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(1):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(2) {
        transform: rotateY(27.69231deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(2):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(3) {
        transform: rotateY(55.38462deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(3):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(4) {
        transform: rotateY(83.07692deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(4):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(5) {
        transform: rotateY(110.76923deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(5):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(6) {
        transform: rotateY(138.46154deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(6):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(7) {
        transform: rotateY(166.15385deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(7):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(8) {
        transform: rotateY(193.84615deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(8):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(9) {
        transform: rotateY(221.53846deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(9):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(10) {
        transform: rotateY(249.23077deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(10):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(11) {
        transform: rotateY(276.92308deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(11):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(12) {
        transform: rotateY(304.61538deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(12):before {
        height: 6.08574em;
    }

    .assembly:nth-child(12) .side:nth-child(13) {
        transform: rotateY(332.30769deg) translateZ(6.08574em);
    }

    .assembly:nth-child(12) .side:nth-child(13):before {
        height: 6.08574em;
    }

    .assembly:nth-child(13) {
        z-index: -13;
        transform: translate(0, -65em);
        animation: slide13 1s ease-in-out infinite;
    }

    @keyframes slide13 {
        to {
            transform: translate(3em, -65em);
        }
    }

    .assembly:nth-child(13) .roller {
        transform: rotateY(12.85714deg) translateZ(6.74094em) rotateY(-38.57143deg);
        animation: inherit;
        animation-name: roll13a;
    }

    .assembly:nth-child(13) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-12.85714deg) translateZ(-6.74094em) rotateY(-12.85714deg);
        animation-name: roll13b;
    }

    @keyframes roll13a {
        to {
            transform: rotateY(-12.85714deg) translateZ(6.74094em) rotateY(-38.57143deg);
        }
    }

    @keyframes roll13b {
        to {
            transform: rotateY(12.85714deg) translateZ(-6.74094em) rotateY(-12.85714deg);
        }
    }

    .assembly:nth-child(13) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(13) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(1):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(2) {
        transform: rotateY(25.71429deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(2):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(3) {
        transform: rotateY(51.42857deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(3):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(4) {
        transform: rotateY(77.14286deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(4):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(5) {
        transform: rotateY(102.85714deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(5):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(6) {
        transform: rotateY(128.57143deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(6):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(7) {
        transform: rotateY(154.28571deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(7):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(8) {
        transform: rotateY(180deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(8):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(9) {
        transform: rotateY(205.71429deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(9):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(10) {
        transform: rotateY(231.42857deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(10):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(11) {
        transform: rotateY(257.14286deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(11):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(12) {
        transform: rotateY(282.85714deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(12):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(13) {
        transform: rotateY(308.57143deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(13):before {
        height: 6.57193em;
    }

    .assembly:nth-child(13) .side:nth-child(14) {
        transform: rotateY(334.28571deg) translateZ(6.57193em);
    }

    .assembly:nth-child(13) .side:nth-child(14):before {
        height: 6.57193em;
    }

    .assembly:nth-child(14) {
        z-index: -14;
        transform: translate(0, -70em);
        animation: slide14 1s ease-in-out infinite;
    }

    @keyframes slide14 {
        to {
            transform: translate(3em, -70em);
        }
    }

    .assembly:nth-child(14) .roller {
        transform: rotateY(12deg) translateZ(7.2146em) rotateY(-24deg);
        animation: inherit;
        animation-name: roll14a;
    }

    .assembly:nth-child(14) .roller:last-child {
        z-index: -1;
        margin: 0 12em;
        transform: rotateY(-12deg) translateZ(-7.2146em) rotateY(-12deg);
        animation-name: roll14b;
    }

    @keyframes roll14a {
        to {
            transform: rotateY(-12deg) translateZ(7.2146em) rotateY(-24deg);
        }
    }

    @keyframes roll14b {
        to {
            transform: rotateY(12deg) translateZ(-7.2146em) rotateY(-12deg);
        }
    }

    .assembly:nth-child(14) .side {
        margin: -2em -1.5em;
        width: 3em;
        height: 4em;
    }

    .assembly:nth-child(14) .side:nth-child(1) {
        transform: rotateY(0deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(1):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(2) {
        transform: rotateY(24deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(2):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(3) {
        transform: rotateY(48deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(3):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(4) {
        transform: rotateY(72deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(4):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(5) {
        transform: rotateY(96deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(5):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(6) {
        transform: rotateY(120deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(6):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(7) {
        transform: rotateY(144deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(7):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(8) {
        transform: rotateY(168deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(8):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(9) {
        transform: rotateY(192deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(9):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(10) {
        transform: rotateY(216deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(10):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(11) {
        transform: rotateY(240deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(11):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(12) {
        transform: rotateY(264deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(12):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(13) {
        transform: rotateY(288deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(13):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(14) {
        transform: rotateY(312deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(14):before {
        height: 7.05695em;
    }

    .assembly:nth-child(14) .side:nth-child(15) {
        transform: rotateY(336deg) translateZ(7.05695em);
    }

    .assembly:nth-child(14) .side:nth-child(15):before {
        height: 7.05695em;
    }

    .strip {
        margin: -2em -1px;
        width: 12em;
        height: 4em;
        border: solid 0.125em cyan;
        background: linear-gradient(90deg, #00ffff 0.125em, rgba(0, 0, 0, 0) 0%) black;
        background-size: 3em 100%;
    }

    .side:before,
    .side:after {
        box-sizing: border-box;
        position: absolute;
        left: 0;
        width: inherit;
        backface-visibility: hidden;
        content: '';
    }

    .side:before {
        top: 100%;
        height: .125em;
        transform-origin: 50% 0;
        transform: rotateX(-90deg);
        border-top: solid 0.125em cyan;
        background: black;
    }

    .side:after {
        height: inherit;
        border: solid 0.125em cyan;
        background: black;
    }
</style>
<div class='scene'>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
    <div class='assembly'>
        <div class='strip'></div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
        <div class='roller'>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
            <div class='side'></div>
        </div>
    </div>
</div>`;
    ClassicWindow.updateWindowContent(coolwin, coolContent);
}