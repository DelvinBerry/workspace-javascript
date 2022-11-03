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

function reservation(){
    var guest = {
        name:('#name').val(),
        numberofGuest: $('#num').val()
    }
}