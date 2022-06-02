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
        hour: '08',
        time: '08',
        meridiem: 'am',
        events: ''
    },
    {
        id: '1',
        hour: '09',
        time: '09',
        meridiem: 'am',
        events: ''
    },
    {
        id: '2',
        hour: '10',
        time: '10',
        meridiem: 'am',
        events: ''
    },
    {
        id: '3',
        hour: '11',
        time: '11',
        meridiem: 'am',
        events: ''
    },
    {
        id: '4',
        hour: '12',
        time: '12',
        meridiem: 'pm',
        events: ''
    },
    {
        id: '5',
        hour: '01',
        time: '13',
        meridiem: 'pm',
        events: ''
    },
    {
        id: '6',
        hour: '02',
        time: '14',
        meridiem: 'pm',
        events: ''
    },
    {
        id: '7',
        hour: '03',
        time: '15',
        meridiem: 'pm',
        events: ''
    },
    {
        id: '8',
        hour: '04',
        time: '16',
        meridiem: 'pm',
        events: ''
    },
    {
        id: '9',
        hour: '05',
        time: '17',
        meridiem: 'pm',
        events: ''
    },
]


function saveEvents() {
    localStorage.setItem("currentHour", JSON.stringify(currentHour));
}

function displayEvents() {
    currentHour.forEach(function(_theHour){
        $(`#${_theHour.id}`).val(_theHour.events);
    })
}
currentHour.forEach(function(theHour) {
    let hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);
});
function init(){
    let storedDay = JSON.parse(localStorage.getIem("currenHour"));
    if (storedDay){
        currentHour = storedDay;
    }
    saveEvents();
    displayEvents();
}

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
if (theHour.time < moment().format("HH")){
    planner.attr ({
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




