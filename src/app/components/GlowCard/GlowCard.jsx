import Color from 'https://cdn.skypack.dev/color';
import gsap from 'https://cdn.skypack.dev/gsap';
import { Flip } from 'https://cdn.skypack.dev/gsap/Flip';
import React from 'https://cdn.skypack.dev/react';
import { render } from 'https://cdn.skypack.dev/react-dom';

gsap.registerPlugin(Flip);

const ROOT_NODE = document.querySelector('#app');

const CONFIG = {
    body: 'rgb(0, 10, 15)',
    icon: 0,
    movement: 150,

    explode: false,
    border: 2,
    radius: 12,
    saturation: 100,
    lightness: 50,
    size: 150,
    card: 'rgb(153, 153, 153)',
    cardalpha: 0.15,
    cardblur: 4,
    'bg-spot-opacity': 0.1,
    'border-spot-opacity': 1,
    'border-light-opacity': 1,
};

// Not using React? Jus' take this and drop it into a <script>
const useGlowPointer = () => {
    const UPDATE = React.useCallback(({ x, y }) => {
        document.documentElement.style.setProperty('--x', x.toFixed(2));
        document.documentElement.style.setProperty(
            '--xp',
            (x / window.innerWidth).toFixed(2)
        );
        document.documentElement.style.setProperty('--y', y.toFixed(2));
        document.documentElement.style.setProperty(
            '--yp',
            (y / window.innerHeight).toFixed(2)
        );
    }, []);
    React.useEffect(() => {
        document.body.addEventListener('pointermove', UPDATE);
        return () => {
            document.body.removeEventListener('pointermove', UPDATE);
        };
    }, []);
    return null;
};

const App = () => {
    useGlowPointer();

    const SYNC_STYLES = React.useCallback(() => {
        for (const key of Object.keys(CONFIG)) {
            if (
                key !== 'card' &&
                key !== 'cardalpha'
            ) {
                document.documentElement.style.setProperty(`--${key}`, CONFIG[key]);
            }
            if (key === 'card') {
                const hsl = new Color(CONFIG.card).hsl();
                document.documentElement.style.setProperty(
                    '--backdrop',
                    `hsl(${hsl.color[0]} ${hsl.color[1]}% ${hsl.color[2]}% / ${CONFIG.cardalpha})`
                );
                document.documentElement.style.setProperty(
                    '--backup-border',
                    `hsl(${hsl.color[0]} ${hsl.color[1]}% ${hsl.color[2]}% / ${Math.max(
                        CONFIG.cardalpha,
                        0.2
                    )})`
                );
            }
        }
    }, []);

    React.useEffect(() => {
        SYNC_STYLES();
    }, [SYNC_STYLES]);

    const card = {
        id: 'random-id',
        spread: gsap.utils.random(0, 1000),
        outer: true,
        control: true,
        base: gsap.utils.random(0, 359),
    };

    return (
        <div className="wrapper">
            <div
                className="card"
                data-glow
                style={{
                    '--base': card?.base,
                    '--spread': card?.spread,
                }}
            >
                {card?.outer ? <div data-glow></div> : null}
                <div className="card__content"></div>
            </div>

            <div
                className="card"
                data-glow
                style={{
                    '--base': card?.base,
                    '--spread': card?.spread,
                }}
            >
                {card?.outer ? <div data-glow></div> : null}
                <div className="card__content"></div>
            </div>
        </div>
    );
};

render(<App />, ROOT_NODE);
