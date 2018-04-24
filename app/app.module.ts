import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {CoursesAppComponent} from './courses-app.component'
import{CoursesListComponent} from './courses/courses-list.component'
import{CoursesSingleComponent} from './courses/courses-single.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [CoursesAppComponent, CoursesListComponent, CoursesSingleComponent],
    bootstrap: [CoursesAppComponent]
})

export class AppModule {}