import {Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
    selector: 'events-thumbnail',
    // template: '<div> XXX </div>'
    template: `
    
            <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
                <h2>{{event.name}}</h2>
                <div>Date: {{event.date}}</div>
                <div [ngStyle]="getStartTimeStyle()"
                
                    [ngSwitch]="event?.time">
                    Time: {{event.time}}
                    <span *ngSwitchCase="'8:00 am'">Early start</span>
                    <span *ngSwitchCase="'10:00 am'">late start</span>
                    <span *ngSwitchDefault>normal start</span>                
                </div>
                <div>Price: \${{event.price}}</div>
                <div [hidden]="!event?.location">
                    <span>Location: {{event.location?.address}}</span>
                    
                    <span class="pad-left">{{event.location?.city}}, {{event.location?.country}}</span>
                </div>
                <div [hidden]="!event?.onlineUrl" >Online URL: {{event?.onlineUrl}} </div>
  </div>
`,
styles:[`
    .green {color: #003300 !important; }
    .bold { font-weight: bold; }
    .thumbnail {min-height:210px}
    .pad-left {margin-left: 10px}
    .well div {color: #bbb}
    `]
})

export class EventsThumbnailComponent{
    @Input() event:any
    someProperty:any = "some value"

    // version 1
    // getStartTimeClass(){
    //     const isEarlyStart = this.event && this.event.time === '8:00 am'
    //     return {green: isEarlyStart, bold: isEarlyStart}
    // }



    // version 2
    getStartTimeStyle():any{
        if(this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'}
        return {}
    }
    
    

    logFoo(){
        console.log('foo')
    }
     

}