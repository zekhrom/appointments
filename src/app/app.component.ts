import { Component } from '@angular/core';

import * as jQuery from 'jquery';
import "fullcalendar";
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agenda';
  paciente = 'Natalia Alvaréz';
  documento = '1234567890';
  selectedEspecialidad = '1';
  selectedSede = '1';
  selectedProfesional = undefined;

  sedes = [
        { value: '1', text: 'Medellin' },
        { value: '2', text: 'Cartagena' },
        { value: '3', text: 'Bogotá' }
  ];

  especialidades = [
        { value: '1', text: 'Reumatología' },
        { value: '2', text: 'Hematología' },
        { value: '3', text: 'Medicina General' },
        { value: '4', text: 'Químico farmacéutico' },
        { value: '5', text: 'Hepatitis' }
  ];

  profesionales = [
        { value: '1', text: 'Juan Benitez', idEspecialidad: '1' },
        { value: '2', text: 'Luis Lozada', idEspecialidad: '2' },
        { value: '3', text: 'Luis Lozada', idEspecialidad: '3' },
        { value: '4', text: 'Martin Mendoza', idEspecialidad: '4' },
        { value: '5', text: 'Daniel Diaz', idEspecialidad: '5' },
        { value: '6', text: 'Daniel Diaz', idEspecialidad: '3' },
        { value: '7', text: 'Carlos Camargo', idEspecialidad: '2' },
        { value: '8', text: 'Fernando Fernandez', idEspecialidad: '1' },
        { value: '9', text: 'Pedro Perez', idEspecialidad: '1' },
        { value: '10', text: 'Pedro Perez', idEspecialidad: '3' }
  ];

  calendarOptions = {
    defaultView: 'agendaWeek',
    allDaySlot: false,
    selectable: true,
    snapDuration: '00:30:00',
    slotDuration: '00:30:00',
    maxDate: '24:00:00',
    selectOverlap: function(event) {
      let profesional = $('#profesional');
      return event.title != profesional.val();
    },
    select: this.addEvent,
    events: [
      
    ]
  };
  
  addEvent(start, end, jsEvent, view) {
    let profesional = $('#profesional');

    if(profesional.val()!=undefined){
         var allDay = !start.hasTime() && !end.hasTime();
         alert(["Event Start date: " + moment(start).format(),
                "Event End date: " + moment(end).format(),
                "AllDay: " + allDay].join("\n"));
        
         let newEvent = [
           {
              title: profesional.val(),
              start: moment(start).format(),
              end: moment(end).format()
           }
         ];
         let calendar = jQuery('#myCalendar');
         calendar.fullCalendar('renderEvents', newEvent, true)
    }
    else{
      alert('Debe seleccionar un profesional!');
    }
  }
}
