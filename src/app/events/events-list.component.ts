import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service'
import { toBase64String } from '@angular/compiler/src/output/source_map'
import { ToastrService } from './common/toastr.service'


@Component({
    // selector: 'events-list',
    // template: '<div><h1>Upcoming Angular Events</h1></div>'
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <events-thumbnail #thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></events-thumbnail>
                <button class="btn-primary" (click)="handleThumbnailClick(event.name)"> XXX </button>
                <button class="btn-primary" (click)="thumbnail.logFoo()"> Log me some foo</button>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events:any[]
    constructor(private eventService: EventService, private toastr: ToastrService){
    
    }


    ngOnInit(){
        this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName){
        console.log(eventName)
        this.toastr.success(eventName)
        
    }


}