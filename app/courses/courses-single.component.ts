import {Component, Input} from '@angular/core'

@Component({
    selector: 'courses-single',
    templateUrl: 'app/courses/courses-single.component.html'
})

export class CoursesSingleComponent {
    @Input() course:any
}