import {Component} from '@angular/core'

@Component({
    selector: 'nav-bar',
    // template: '<div> XXX </div>'
    templateUrl: './navbar.component.html' ,
    styles: [`
    .nav.navbar-nav {front-size: 15px }
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    `]
})
export class NavBarComponent {

}