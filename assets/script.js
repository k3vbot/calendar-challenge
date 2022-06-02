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
        reminder: ''
    },
    {
        id: '1',
        hour: '09',
        time: '09',
        meridiem: 'am',
        reminder: ''
    },
    {
        id: '2',
        hour: '10',
        time: '10',
        meridiem: 'am',
        reminder: ''
    },
    {
        id: '3',
        hour: '11',
        time: '11',
        meridiem: 'am',
        reminder: ''
    },
    {
        id: '4',
        hour: '12',
        time: '12',
        meridiem: 'pm',
        reminder: ''
    },
    {
        id: '5',
        hour: '01',
        time: '13',
        meridiem: 'pm',
        reminder: ''
    },
    {
        id: '6',
        hour: '02',
        time: '14',
        meridiem: 'pm',
        reminder: ''
    },
    {
        id: '7',
        hour: '03',
        time: '15',
        meridiem: 'pm',
        reminder: ''
    },
    {
        id: '8',
        hour: '04',
        time: '16',
        meridiem: 'pm',
        reminder: ''
    },
    {
        id: '9',
        hour: '05',
        time: '17',
        meridiem: 'pm',
        reminder: ''
    },
]

currentHour.forEach(function(theHour) {
    const hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);
});

const hourBox = $("<div>")
    .text(`${theHour.hour}${theHour.meridiem}`)
    .attr({
        "class": "col-md-2 hour"
    });
    

