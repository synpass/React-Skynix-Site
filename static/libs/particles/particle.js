
var ROWS = 15,
    COLS = 30,
    NUM_PARTICLES = (ROWS * COLS),
    THICKNESS = Math.pow( 80, 2 ),
    SPACING = 17,
    MARGIN = 100,
    DRAG = 0.45,
    EASE = 0.25,

    /*

    used for sine approximation, but Math.sin in Chrome is still fast enough :)http://jsperf.com/math-sin-vs-sine-approximation

    B = 4 / Math.PI,
    C = -4 / Math.pow( Math.PI, 2 ),
    P = 0.225,

    */

    container,
    bounds,
    particle,
    canvas,
    mouse,
    stats,
    list,
    canvastelement,
    tog,
    man,
    dx, dy,
    mx, my,
    d, t, f,
    a, b,
    i, n,
    w, h,
    p, s,
    r, c,
    z, xl
;

particle = {
    vx: 0,
    vy: 0,
    x: 0,
    y: 0
};
container = document.getElementsByClassName( 'container-animation' );
for (z = 0; z < container.length; z++) {
function init() {
    canvas = document.createElement( 'canvas' );
    man = true;
    tog = true;

    list = [];

    w = canvas.width = COLS * SPACING + MARGIN * 2;
    h = canvas.height = ROWS * SPACING + MARGIN * 2;

    for ( i = 0; i < NUM_PARTICLES; i++ ) {

        p = Object.create( particle );
        p.x = p.ox = MARGIN + SPACING * ( i % COLS );
        p.y = p.oy = MARGIN + SPACING * Math.floor( i / COLS );

        list[i] = p;
    }

    container[z].addEventListener( 'mousemove', function(e) {

        bounds = this.getBoundingClientRect();
        mx = e.clientX - bounds.left;
        my = e.clientY - bounds.top;
        man = true;

    });

    if ( typeof Stats === 'function' ) {
        document.body.appendChild( ( stats = new Stats() ).domElement );
    }

    container[z].appendChild( canvas );
    canvastelement = document.querySelectorAll( 'canvas:not(.plane-animation-canvas)' );
}

function step() {
    if ( stats ) stats.begin();

    if ( tog = !tog ) {

        if ( !man ) {

            t = +new Date() * 0.001;
            mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
            my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
        }

        for ( i = 0; i < NUM_PARTICLES; i++ ) {

            p = list[i];

            d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
            f = -THICKNESS / d;

            if ( d < THICKNESS ) {
                t = Math.atan2( dy, dx );
                p.vx += f * Math.cos(t);
                p.vy += f * Math.sin(t);
            }

            p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
            p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;

        }

    } else {
    for(xl = 0; xl < canvastelement.length; xl++) {
        b = ( a = canvastelement[xl].getContext( '2d' ).createImageData( w, h ) ).data;

        for ( i = 0; i < NUM_PARTICLES; i++ ) {

            p = list[i];
            b[n+1] = 63;
            b[n+2] = 213;
            b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = 34, b[n+3] = 205;
        }

        canvastelement[xl].getContext( '2d' ).putImageData( a, 0, 0 );
    }
    }

    if ( stats ) stats.end();

    requestAnimationFrame( step );
}

init();
step();
}