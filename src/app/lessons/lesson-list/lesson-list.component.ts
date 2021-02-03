import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  @Input() title
  @Input() courseLessons
  @Input() currentLesson = {title: 'test'}
  @Output() lessonSelector = new EventEmitter();
  
  selectLesson(lesson) {
    this.lessonSelector.emit(lesson);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
