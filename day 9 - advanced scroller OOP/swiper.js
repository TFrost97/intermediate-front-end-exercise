class Swiper {
    constructor() {
        this.initialY = null;
        this.initialX = null;

        document.addEventListener('touchstart', (event) => this.startTouch(event));
        document.addEventListener('touchmove', (event) => this.moveTouch(event));

        this.events = {
            swipeUp: new Event('swipeUp'),
            swipeDown: new Event('swipeDown'),
            swipeLeft: new Event('swipeLeft'),
            swipeRight: new Event('swipeRight'),
        }
    }

    startTouch(event) {
        event.preventDefault();
        console.log(event)
        
        this.initialX = event.touches[0].clientX
        this.initialY = event.touches[0].clientY
    }

    moveTouch(event) {
        if (!this.initialX || !this.initialY) return;
        const currentX = event.touches[0].clientX;
        const currentY = event.touches[0].clientY;

        const diffX = this.initialX - currentX;
        const diffY = this.initialY - currentY;

        console.log({diffX});
        console.log({diffY});
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // x axis
            if (diffX > 0) {
                // swipe left
                document.dispatchEvent(this.events.swipeLeft);
            } else {
                // swipe right
                document.dispatchEvent(this.events.swipeRight);

            }
        } else {
            // y axis
            if (diffY > 0) {
                // swipe up
                document.dispatchEvent(this.events.swipeUp);
            } else {
                // swipe down
                document.dispatchEvent(this.events.swipeDown);
            }
        }

        this.initialX = null;
        this.initialY = null;
    }
}

new Swiper();