// display today's date and current time in the header
const todaysDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(todaysDate);

//Build out calendar function
//check for current time, and highlight the corresponding timeblock with present color
//highlight past and future timeblocks with corresponding colors
//create variable to store time blocks
const currentHour = [
    {
        id: '0',
        hour: '8',
        time: '08',
        meridiem: 'AM',
        events: ''
    },
    {
        id: '1',
        hour: '9',
        time: '09',
        meridiem: 'AM',
        events: ''
    },
    {
        id: '2',
        hour: '10',
        time: '10',
        meridiem: 'AM',
        events: ''
    },
    {
        id: '3',
        hour: '11',
        time: '11',
        meridiem: 'AM',
        events: ''
    },
    {
        id: '4',
        hour: '12',
        time: '12',
        meridiem: 'PM',
        events: ''
    },
    {
        id: '5',
        hour: '1',
        time: '13',
        meridiem: 'PM',
        events: ''
    },
    {
        id: '6',
        hour: '2',
        time: '14',
        meridiem: 'PM',
        events: ''
    },
    {
        id: '7',
        hour: '3',
        time: '15',
        meridiem: 'PM',
        events: ''
    },
    {
        id: '8',
        hour: '4',
        time: '16',
        meridiem: 'PM',
        events: ''
    },
    {
        id: '9',
        hour: '5',
        time: '17',
        meridiem: 'PM',
        events: ''
    },
]


function saveEvents() {
    localStorage.setItem("currentHour", JSON.stringify(currentHour));
};

function displayEvents() {
    currentHour.forEach(function (_theHour) {
        $(`#${_theHour.id}`).val(_theHour.events);
    })
}
function init() {
    var storedDay = JSON.parse(localStorage.getItem("currentHour"));
    if (storedDay) {
        currentHour === storedDay;
    }
    saveEvents();
    displayEvents();
}
currentHour.forEach(function (theHour) {
    const hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);


    const hourBox = $("<div>")
        .text(`${theHour.hour}${theHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
        });

    const hourInfo = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });

    const planner = $("<textarea>");
    hourInfo.append(planner);
    planner.attr("id", theHour.id);
    if (theHour.time < moment().format("HH")) {
        planner.attr({
            "class": "past",
        })
    } else if (theHour.time === moment().format("HH")) {
        planner.attr({
            "class": "present"
        })
    } else if (theHour.time > moment().format("HH")) {
        planner.attr({
            "class": "future"
        })
    }

    const saveButton = $("<i class='far fa-save fa-lg'></i>")
    const savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
        });

    savePlan.append(saveButton);
    hourRow.append(hourBox, hourInfo, savePlan);
})

init();

$("#saveBtn").on("click", function(event){
    event.preventDefault();
})







