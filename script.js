
/* 
   AI TRIP PLANNER
 */


/* Get the form */

const tripForm = document.getElementById("tripForm");


/* Get the result area */

const result = document.getElementById("result");


/* 
   FORM SUBMISSION
 */

tripForm.addEventListener("submit", function(event) {

    event.preventDefault();


    /* Get user information */

    const destination =
        document.getElementById("destination").value.trim();

    const days =
        parseInt(document.getElementById("days").value);

    const budget =
        document.getElementById("budget").value;

    const style =
        document.getElementById("style").value;

    const interests =
        document.getElementById("interests").value.trim();


    /* Check that all information is entered */

    if (
        destination === "" ||
        !days ||
        budget === "" ||
        style === "" ||
        interests === ""
    ) {

        alert("Please fill in all the trip details.");

        return;
    }


    /* Generate the trip */

    generateTrip(
        destination,
        days,
        budget,
        style,
        interests
    );

});


/* 
   GENERATE TRIP FUNCTION
 */

function generateTrip(
    destination,
    days,
    budget,
    style,
    interests
) {


    /* Start the result */

    let itinerary = "";


    /* Budget text */

    let budgetText = "";


    if (budget === "low") {

        budgetText = "Budget Friendly";

    }

    else if (budget === "medium") {

        budgetText = "Moderate";

    }

    else {

        budgetText = "Premium";

    }


    /* Travel style text */

    let styleText = "";


    if (style === "adventure") {

        styleText = "Adventure";

    }

    else if (style === "relax") {

        styleText = "Relax & Chill";

    }

    else if (style === "culture") {

        styleText = "Culture & History";

    }

    else {

        styleText = "Food & Local Experiences";

    }


    /* 
       TRIP HEADER
     */

    itinerary += `

        <div class="trip-header">

            <h3>
                ✈️ Your Trip to ${destination}
            </h3>

            <p class="trip-info">
                ${days} days • ${budgetText} • ${styleText}
            </p>

            <p class="trip-info">
                ❤️ Interests: ${interests}
            </p>

        </div>

    `;


    /* 
       DAY PLANS
     */


    for (let day = 1; day <= days; day++) {


        let activity = "";


        /* Day 1 */

        if (day === 1) {

            activity = `
                Explore the main attractions of ${destination},
                get familiar with the area, and enjoy a relaxed
                local experience.
            `;

        }


        /* Day 2 */

        else if (day === 2) {

            if (style === "adventure") {

                activity = `
                    Try an exciting outdoor activity,
                    explore nature, and visit a scenic location.
                `;

            }

            else if (style === "relax") {

                activity = `
                    Enjoy a slow morning, visit a peaceful location,
                    and spend the evening relaxing.
                `;

            }

            else if (style === "culture") {

                activity = `
                    Visit historical landmarks, museums,
                    and important cultural locations.
                `;

            }

            else {

                activity = `
                    Explore local food spots, try popular dishes,
                    and visit a local market.
                `;

            }

        }


        /* Day 3 */

        else if (day === 3) {

            activity = `
                Discover another popular part of ${destination},
                take photographs, and experience something
                different from the previous days.
            `;

        }


        /* Remaining days */

        else {

            if (style === "adventure") {

                activity = `
                    Explore a new area, try another outdoor
                    experience, and enjoy a scenic evening.
                `;

            }

            else if (style === "relax") {

                activity = `
                    Spend the morning at a peaceful location,
                    enjoy local cafés, and have a relaxed evening.
                `;

            }

            else if (style === "culture") {

                activity = `
                    Discover local history and culture,
                    visit a landmark, and explore the city.
                `;

            }

            else {

                activity = `
                    Explore local restaurants and markets,
                    try regional food, and enjoy the evening.
                `;

            }

        }


        /* Add the day to itinerary */

        itinerary += `

            <div class="day-card">

                <h4>
                    📅 Day ${day}
                </h4>

                <p>
                    ${activity}
                </p>

            </div>

        `;

    }


    /* 
       FINAL MESSAGE
     */

    itinerary += `

        <div class="day-card">

            <h4>
                🤖 AI Recommendation
            </h4>

            <p>
                This itinerary was personalized using your
                destination, trip duration, budget, travel style,
                and interests.
            </p>

        </div>

    `;


    /* Display the itinerary */

    result.innerHTML = itinerary;


    /* Scroll to result */

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
