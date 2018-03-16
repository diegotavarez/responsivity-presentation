import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PlanService} from '../plan.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  displayedColumns = ['date'];
  freePlanFeatures: MatTableDataSource<Element>;
  premiumPlanFeatures: MatTableDataSource<Element>;
  studentPlanFeatures: MatTableDataSource<Element>;
  familyPlanFeatures: MatTableDataSource<Element>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.freePlanFeatures = new MatTableDataSource<Element>(this.planService.getFreePlan());
    this.premiumPlanFeatures = new MatTableDataSource<Element>(this.planService.getPremiumPlan());
    this.studentPlanFeatures = new MatTableDataSource<Element>(this.planService.getStudentPlan());
    this.familyPlanFeatures = new MatTableDataSource<Element>(this.planService.getFamilyPlan());
  }

    /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
  }
}

export interface Element {
  id: number;
  date: string;
}
