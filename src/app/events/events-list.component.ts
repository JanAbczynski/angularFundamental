import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    // template: '<div><h1>Upcoming Angular Events</h1></div>'
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <events-thumbnail #thumbnail [event]="event1"></events-thumbnail>
        <button class="btn-primary" (click)="thumbnail.logFoo()"> Log me some foo, now</button>
        <h2>{{thumbnail.someProperty}}</h2>
    </div>
    `
})
export class EventsListComponent{
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

 

}