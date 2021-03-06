import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GoalsService} from '../../services/goals.service';
import {Goal} from '../../entity/Goal';

@Component({
  selector: 'app-add-goal-modal',
  templateUrl: './add-goal-modal.component.html',
  styleUrls: ['./add-goal-modal.component.css']
})
export class AddGoalModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              public goalsService: GoalsService) {
  }

  ngOnInit(): void {
  }

  submitNewGoal(goalName: string, contribution: string, dueDate?: string, goalAmount?: string) {
    if (dueDate != null || dueDate != '') {
      dueDate = Goal.convertDateInputStringToFirebaseDateString(dueDate);
    }

    this.goalsService.addGoal(goalName, contribution, dueDate, goalAmount);
  }
}
