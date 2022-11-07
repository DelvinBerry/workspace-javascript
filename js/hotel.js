var test={
    hotelname: "marriot",
    room: 350,
    booked:120,
    display: function(){
        return this.hotelname;
    }
};

console.log(test.hotelname);
console.log (test.room);


$(function(){
    $('#submit').click(reservation);
});


var guestgroup = new Array();
function reservation(){
    var guest = {
        name:('#name').val(),
        numberofGuest: $('#num').val(),
        checkin: $('#checkin').val()
    }
    guestgroup.push(guest);
    console.log(guestgroup);
}


function displayR(){
    $("form").append("<table>");
    for(var i in guestgroup){
        var theguest = guestgroup(i);
        var row = "<tr><td>"+theguest.name+"</td><td>"+theguest.checkin+"</td></tr>"
        $("table").append(row);
    }
}