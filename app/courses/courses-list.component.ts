import {Component} from '@angular/core'

@Component({
    selector: 'courses-list',
    template: `
    <h1>Courses</h1>
    <courses-single [course]="course"></courses-single>
    `
})

export class CoursesListComponent {
    course = {
        title: 'Js Frameworks',
        author: {
            firstName: 'Karol',
            lastName: 'Rogowski'
        },
        price: 1.00
    }
}