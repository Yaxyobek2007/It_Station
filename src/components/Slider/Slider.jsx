// Import SASS 

import "./slider.scss"


function Slider() {

    (function () {
        "use strict";

        var carousels = function () {
            $(".owl-carousel1").owlCarousel({
                loop: true,
                center: true,
                margin: 0,
                responsiveClass: true,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    680: {
                        items: 2,
                        nav: false,
                        loop: false
                    },
                    1000: {
                        items: 3,
                        nav: true
                    }
                }
            });
        };

        (function ($) {
            carousels();
        })(jQuery);
    })();

    return (
        <section>
            <div className="container">
                <div class="cards-container">
                    <div class="owl-carousel owl-carousel1 owl-theme">
                        <div>
                            <div class="card text-center">
                                <img class="card-img-top" src="https://pngimg.com/d/number1_PNG14891.png" alt="" />
                                <div class="card-body">
                                    <h5>Member 1<br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et dictum sem.” </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card text-center">
                                <img class="card-img-top" src="https://pngimg.com/d/number1_PNG14891.png" alt="" />
                                <div class="card-body">
                                    <h5>Member 1<br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et dictum sem.” </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Slider