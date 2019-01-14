$(document).ready(function () {

    $(".wkcalendar-block").css("display","none");
    $("#wkcalendar").css("display","none");

    $('#mcalendar').fullCalendar({
       /*customButtons: {
        myCustomBtn: {
          text: 'custom週',
          click: function() {
            $('#mCalendar').fullCalendar({
                defaultView: 'agendaDay',
                defaultDate: '2018-07-01'
            });
            //alert('clicked the custom button!');
          }
        }
      },
      header: {
        left: 'prev,next title',
        center: '',
        right: 'today month,agendaDay,myCustomButton' //'month,basicWeek,agendaDay'
      },*/
      header: {
        left: 'prev,next title',
        center: '',
        right: 'today month,agendaDay' //'month,basicWeek,agendaDay'
      },
      defaultDate: '2018-07-18',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      locale: 'zh-tw',
      defaultView: 'month',
      //contentHeight: 200,
      events: [
        {
          title: 'All Day Event',
          start: '2018-07-01'
        },
        {
          title: 'Long Event',
          start: '2018-07-07',
          end: '2018-07-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-07-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-07-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-07-11',
          end: '2018-07-13'
        },
        {
          title: 'Lunch',
          start: '2018-07-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-07-12T14:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-07-15T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-07-18T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-07-28'
        }
      ]
    });


    $('#wkcalendar').fullCalendar({
      header: {
        left: 'prev,next title',
        center: '',
        right: 'today month,agendaDay' //'month,basicWeek,basicDay'
      },
      defaultDate: '2018-07-18',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      locale: 'en',
      defaultView: 'agendaDay',
      contentHeight: 500,
      events: [
        {
          title: 'All Day Event',
          start: '2018-07-01'
        },
        {
          title: 'Long Event',
          start: '2018-07-07',
          end: '2018-07-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-07-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-07-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-07-11',
          end: '2018-07-13'
        },
        {
          title: 'Lunch',
          start: '2018-07-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-07-12T14:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-07-15T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-07-18T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-07-28'
        }
      ]
    });



    $('#my-today-btn').click(function() {
        $('#mcalendar').fullCalendar('today');
        $('#wkcalendar').fullCalendar('today');
    });

    $('#my-prev-btn').click(function() {
        $('#mcalendar').fullCalendar('prev');
        $('#wkcalendar').fullCalendar('prev');
    });

    $('#my-next-btn').click(function() {
        $('#mcalendar').fullCalendar('next');
        $('#wkcalendar').fullCalendar('next');
    });




    $('#my-month-btn').click(function() {
        $(this).addClass("active");
        $("#my-wk-btn").removeClass("active");

        $(".mcalendar-block").css("display","block");
        $("#mcalendar").css("display","block");
        
        $(".wkcalendar-block").css("display","none");
        $("#wkcalendar").css("display","none");
    });

    $('#my-wk-btn').click(function() {
        $(this).addClass("active");
        $("#my-month-btn").removeClass("active");

        $(".mcalendar-block").css("display","none");
        $("#mcalendar").css("display","none");

        $(".wkcalendar-block").css("display","block");
        $("#wkcalendar").css("display","block");

        $('#wkcalendar').fullCalendar({
            defaultView: 'agendaDay'
        });
    });
        


});

$(window).resize(function () {
    
});