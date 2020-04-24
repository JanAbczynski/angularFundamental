import {Component} from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    // template: '<div><h1>Upcoming Angular Events</h1></div>'
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <events-thumbnail [event]="event"></events-thumbnail>
                <button class="btn-primary" (click)="thumbnail.logFoo()"> Log me some foo, now</button>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent{
    events:any[]
    constructor(private eventService: EventService){
        this.events = this.eventService.getEvents()
    }


}