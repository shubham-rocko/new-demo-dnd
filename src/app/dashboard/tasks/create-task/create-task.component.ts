import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {ApiIntegrationService} from 'src/app/core';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

    public createTaskForm: FormGroup;
    public issueTypeArray: any = [
        {value: 'Epic', label: 'Epic'},
        {value: 'Feature', label: 'Feature'},
        {value: 'Bug', label: 'Bug'}
    ];
    public currentDay: number = new Date().getDate();
    public currentMonth: number = new Date().getMonth() + 1;
    public currentYear: number = new Date().getFullYear();
    myOptions: INgxMyDpOptions = {
        dateFormat: 'yyyy-mm-dd',
        minYear: 1900
    };
    enrollmentModel: any = {date: {year: this.currentYear, month: this.currentMonth, day: this.currentDay}};
    finalPresentationModel: any = {date: {year: this.currentYear, month: this.currentMonth, day: this.currentDay}};
    initialPresentationModel: any = {date: {year: this.currentYear, month: this.currentMonth, day: this.currentDay}};
    quoteModel: any = {date: {year: this.currentYear, month: this.currentMonth, day: this.currentDay}};
    deadlineModel: any = {date: {year: this.currentYear, month: this.currentMonth, day: this.currentDay}};
    effectiveModel: any = {date: {year: this.currentYear, month: this.currentMonth, day: this.currentDay}};

    constructor(private router: Router,
                private apiIntegrationService: ApiIntegrationService) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.createTaskForm = new FormGroup({
            name: new FormControl(),
            issueType: new FormControl('Epic'),
            assistingAgent: new FormControl(),
            broker: new FormControl(),
            aflacGroupNumber: new FormControl(),
            aflac: new FormControl(false),
            sicCode: new FormControl(),
            employeeCount: new FormControl(),
            businessName: new FormControl(),
            address: new FormControl(),
            state: new FormControl(),
            city: new FormControl(),
            country: new FormControl(),
            zipCode: new FormControl(),
            contactName: new FormControl(),
            contactPhone: new FormControl(),
            contactEmail: new FormControl(),
            employerTaxId: new FormControl(),
            otherService: new FormControl(),
            projectedMedical: new FormControl(),
            medicalCompensationPercentage: new FormControl(),
            projectedMajorMedicalCommissions: new FormControl(),
            projectedLife: new FormControl(),
            lifeCompensationPercentage: new FormControl(),
            projectedLifeCommissions: new FormControl(),
            projectedTotalCommissions: new FormControl(),
            projectedTotalMonthlyDeposits: new FormControl(),
            creditAndDebitVendorAudit: new FormControl(false),
            enrollmentDate: new FormControl(),
            finalPresentationDate: new FormControl(),
            groupVisionAndDental: new FormControl(),
            guaranteedIssueLife: new FormControl(),
            initialPresentationDate: new FormControl(),
            initialQuoteDate: new FormControl(),
            majorMedical: new FormControl(false),
            projectedDeadlineDate: new FormControl(),
            projectedEffectiveDate: new FormControl(),
            shopWorkmansComp: new FormControl(false),
            workmansCompAudit: new FormControl(false),
            wotcPlatform: new FormControl(false)
        });
    }

    onDateChanged(event: IMyDateModel): void {
        console.log('event', event);
        // this.addParentForm.patchValue({ dob: event.epoc * 1000 });
    }

    // "creditAndDebitVendorAudit": true,
    // "enrollmentDate": "2019-02-16",
    // "finalPresentationDate": "2019-02-16",
    // "groupVisionAndDental": "2019-02-16",
    // "guaranteedIssueLife": "2019-02-16",
    // "initialPresentationDate": "2019-02-16",
    // "initialQuoteDate": "2019-02-16",
    // "majorMedical": true,
    // "projectedDeadlineDate": "2019-02-16",
    // "projectedEffectiveDate": "2019-02-16",
    // "shopWorkmansComp": true,
    // "workmansCompAudit": true,
    // "wotcPlatform": true


    taskCreated() {
        console.log('this.createTaskForm', this.createTaskForm);
        this.createTaskForm.value.enrollmentDate = this.createTaskForm.value.enrollmentDate.formatted ? this.createTaskForm.value.enrollmentDate.formatted : `${this.currentYear}-${this.currentMonth}-${this.currentDay}`;
        this.createTaskForm.value.finalPresentationDate = this.createTaskForm.value.finalPresentationDate.formatted ? this.createTaskForm.value.finalPresentationDate.formatted : `${this.currentYear}-${this.currentMonth}-${this.currentDay}`;
        this.createTaskForm.value.initialPresentationDate = this.createTaskForm.value.initialPresentationDate.formatted ? this.createTaskForm.value.initialPresentationDate.formatted : `${this.currentYear}-${this.currentMonth}-${this.currentDay}`;
        this.createTaskForm.value.initialQuoteDate = this.createTaskForm.value.initialQuoteDate.formatted ? this.createTaskForm.value.initialQuoteDate.formatted : `${this.currentYear}-${this.currentMonth}-${this.currentDay}`;
        this.createTaskForm.value.projectedDeadlineDate = this.createTaskForm.value.projectedDeadlineDate.formatted ? this.createTaskForm.value.projectedDeadlineDate.formatted : `${this.currentYear}-${this.currentMonth}-${this.currentDay}`;
        this.createTaskForm.value.projectedEffectiveDate = this.createTaskForm.value.projectedEffectiveDate.formatted ? this.createTaskForm.value.projectedEffectiveDate.formatted : `${this.currentYear}-${this.currentMonth}-${this.currentDay}`;
        this.apiIntegrationService.createTask(this.createTaskForm.value)
            .subscribe((response) => {
                this.router.navigate(['../']);
            });
    }
}
