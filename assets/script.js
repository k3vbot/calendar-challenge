const todaysDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(todaysDate);

const timeBlocks = document.getElementsByClassName("container")
//Build out calendar function
//check for current time, and highlight the corresponding timeblock with present color
//highlight past and future timeblocks with corresponding colors

function calendar() {

}
document.querySelector('.saveBtn').onclick = function(event) {
    const save = event.target.innerHTML;
    console.log(save);
}
