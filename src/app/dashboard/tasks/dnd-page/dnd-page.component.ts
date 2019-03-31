import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { ApiIntegrationService } from 'src/app/core';


@Component({
    selector: 'app-dnd-page',
    templateUrl: './dnd-page.component.html',
    styleUrls: ['./dnd-page.component.css']
})
export class DndPageComponent implements OnInit, AfterViewInit {

    public taskList: Array<object>;
    public inbox: Array<object>;
    public reevaluation: Array<object>;
    public prospecting: Array<object>;
    public quoting: Array<object>;
    public collecting: Array<object>;
    public presenting: Array<object>;
    public caseBuilding: Array<object>;
    public enrolling: Array<object>;
    public needingDocs: Array<object>;
    public waiting: Array<object>;
    public postEnrollment: Array<object>;
    public onBoarding: Array<object>;
    public accounts: Array<object>;

    constructor(
        private route: ActivatedRoute,
        private dragulaService: DragulaService,
        private apiIntegrationService: ApiIntegrationService,
        private router: Router) {
        this.inbox = [];
        this.reevaluation = [];
        this.prospecting = [];
        this.quoting = [];
        this.collecting = [];
        this.presenting = [];
        this.caseBuilding = [];
        this.enrolling = [];
        this.needingDocs = [];
        this.waiting = [];
        this.postEnrollment = [];
        this.onBoarding = [];
        this.accounts = [];
        dragulaService.drop().subscribe((args: any) => {
            // this.apiIntegrationService.updateTaskStatus({ taskId: args.el.dataset.id, status: args.target.dataset.status })
            //     .subscribe((response) => {
            //         this.router.navigate(['../']);
            //     });
        });
        dragulaService.drag().subscribe(value => {
            document.onmousemove = (e) => {
                let event = e || window.event;
                let mouseY = event['pageY'];
                let scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
                let scrollBottom = scrollTop + window.innerHeight;
                let elementHeight = value.source['offsetHeight'];

                if (mouseY - elementHeight / 2 < scrollTop) {
                    window.scrollBy(0, -15);
                } else if (mouseY + elementHeight > scrollBottom) {
                    window.scrollBy(0, 15);
                }

                let mouseX = event['pageX'];
                let scrollLeft = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft;
                let scrollRight = scrollLeft + window.innerWidth;
                let elementWidth = value.source['offsetWidth'];

                // console.log(scrollTop, scrollLeft)
                if (mouseX - elementWidth / 2 < scrollLeft) {
                    window.scrollBy(-15, 0);
                } else if (mouseX + elementWidth > scrollRight) {
                    window.scrollBy(15, 0);
                }
            };
        });

        // detach the mouse move event when the drag ends
        dragulaService.dragend().subscribe(value => {
            document.onmousemove = null;
        });
    }

    ngOnInit() {
        this.getTaskListData();
    }

    ngAfterViewInit() {

    }

    getTaskListData() {
        // {"status":"success","result":[{"name":"first issue","issueType":"bug","assistingAgent":"aget one","broker":"broker one","aflacGroupNumber":123,"sicCode":421578,"employeeCount":1500074,"businessName":"medical insurance","address":"galactica apartments","state":"california","city":"San Diego","country":"US","zipCode":12452,"contactName":"jon deer","contactPhone":2021451230,"contactEmail":"test@gmail.com","employerTaxId":55522103,"otherService":"claims","projectedMedical":45000,"medicalCompensationPercentage":75,"projectedMajorMedicalCommissions":8000,"projectedLife":"porjected lives","lifeCompensationPercentage":45,"projectedLifeCommissions":"commisssions","projectedTotalCommissions":20100,"projectedTotalMonthlyDeposits":1500,"status":"quoting","enrollmentDate":"2019-02-17T06:44:28.506Z","finalPresentationDate":"2019-02-17T06:44:28.506Z","initialPresentationDate":"2019-02-17T06:44:28.506Z","creditAndDebitVendorAudit":false,"workmansCompAudit":false,"shopWorkmansComp":false,"wotcPlatform":false,"groupVisionAndDental":false,"guaranteedIssueLife":false,"majorMedical":false,"aflac":false,"initialQuoteDate":"2019-02-17T06:44:28.506Z","projectedDeadlineDate":"2019-02-17T06:44:28.506Z","projectedEffectiveDate":"2019-02-17T06:44:28.506Z","updatedOn":"2019-02-17T06:44:28.506Z","taskId":"5c6902ccb1c43f13dd780513"},{"name":"second issue","issueType":"feature","assistingAgent":"agent two","broker":"broker two","aflacGroupNumber":1223,"sicCode":23244,"employeeCount":153434,"businessName":"accidental insurance","address":"westside avenue","state":"california","city":"San Diego","country":"US","zipCode":12452,"contactName":"jon baron","contactPhone":2021230,"contactEmail":"check@gmail.com","employerTaxId":55522103,"otherService":"claims","projectedMedical":45000,"medicalCompensationPercentage":75,"projectedMajorMedicalCommissions":8000,"projectedLife":"porjected lives","lifeCompensationPercentage":45,"projectedLifeCommissions":"commisssions","projectedTotalCommissions":20100,"projectedTotalMonthlyDeposits":1500,"status":"needingDocs","enrollmentDate":"2019-02-17T06:46:11.137Z","finalPresentationDate":"2019-02-17T06:46:11.137Z","initialPresentationDate":"2019-02-17T06:46:11.137Z","creditAndDebitVendorAudit":false,"workmansCompAudit":false,"shopWorkmansComp":false,"wotcPlatform":false,"groupVisionAndDental":false,"guaranteedIssueLife":false,"majorMedical":false,"aflac":false,"initialQuoteDate":"2019-02-17T06:46:11.137Z","projectedDeadlineDate":"2019-02-17T06:46:11.137Z","projectedEffectiveDate":"2019-02-17T06:46:11.137Z","updatedOn":"2019-02-17T06:46:11.137Z","taskId":"5c690333b1c43f13dd780514"},{"name":"third epic","issueType":"epic","assistingAgent":"agent three","broker":"broker three","aflacGroupNumber":1233,"sicCode":233232,"employeeCount":153434,"businessName":"vehicle insurance","address":"westside avenue","state":"california","city":"San Diego","country":"US","zipCode":12452,"contactName":"jon baron","contactPhone":2021230,"contactEmail":"check@gmail.com","employerTaxId":55522103,"otherService":"claims","projectedMedical":45000,"medicalCompensationPercentage":75,"projectedMajorMedicalCommissions":8000,"projectedLife":"porjected lives","lifeCompensationPercentage":45,"projectedLifeCommissions":"commisssions","projectedTotalCommissions":20100,"projectedTotalMonthlyDeposits":1500,"status":"waiting","enrollmentDate":"2019-02-17T06:47:05.429Z","finalPresentationDate":"2019-02-17T06:47:05.429Z","initialPresentationDate":"2019-02-17T06:47:05.429Z","creditAndDebitVendorAudit":false,"workmansCompAudit":false,"shopWorkmansComp":false,"wotcPlatform":false,"groupVisionAndDental":false,"guaranteedIssueLife":false,"majorMedical":false,"aflac":false,"initialQuoteDate":"2019-02-17T06:47:05.429Z","projectedDeadlineDate":"2019-02-17T06:47:05.429Z","projectedEffectiveDate":"2019-02-17T06:47:05.429Z","updatedOn":"2019-02-17T06:47:05.429Z","taskId":"5c690369b1c43f13dd780515"},{"name":"third epic","issueType":"epic","assistingAgent":"agent three","broker":"broker three","aflacGroupNumber":1233,"sicCode":233232,"employeeCount":153434,"businessName":"vehicle insurance","address":"westside avenue","state":"california","city":"San Diego","country":"US","zipCode":12452,"contactName":"jon baron","contactPhone":2021230,"contactEmail":"check@gmail.com","employerTaxId":55522103,"otherService":"claims","projectedMedical":45000,"medicalCompensationPercentage":75,"projectedMajorMedicalCommissions":8000,"projectedLife":"porjected lives","lifeCompensationPercentage":45,"projectedLifeCommissions":"commisssions","projectedTotalCommissions":20100,"projectedTotalMonthlyDeposits":1500,"status":"presenting","enrollmentDate":"2019-02-17T06:56:27.472Z","finalPresentationDate":"2019-02-17T06:56:27.472Z","initialPresentationDate":"2019-02-17T06:56:27.472Z","creditAndDebitVendorAudit":false,"workmansCompAudit":false,"shopWorkmansComp":false,"wotcPlatform":false,"groupVisionAndDental":false,"guaranteedIssueLife":false,"majorMedical":false,"aflac":false,"initialQuoteDate":"2019-02-17T06:56:27.472Z","projectedDeadlineDate":"2019-02-17T06:56:27.472Z","projectedEffectiveDate":"2019-02-17T06:56:27.472Z","updatedOn":"2019-02-17T06:56:27.472Z","taskId":"5c69059b02fa6c144f8d058e"},{"name":"test issue","issueType":"Bug","assistingAgent":"Test agent","broker":"Test Broker","aflacGroupNumber":12,"sicCode":121313,"employeeCount":112,"businessName":"test","address":"roger apartment","state":"Test","city":"Test","country":"Test","zipCode":123456,"contactName":"1234567890","contactPhone":12345669,"contactEmail":"Test@Test.com","employerTaxId":1214223,"otherService":"Test  Test","projectedMedical":21321,"medicalCompensationPercentage":75,"projectedMajorMedicalCommissions":12356,"projectedLife":"12345","lifeCompensationPercentage":23,"projectedLifeCommissions":"1244","projectedTotalCommissions":11212,"projectedTotalMonthlyDeposits":12412,"status":"caseBuilding","enrollmentDate":"2019-02-17T10:13:11.636Z","finalPresentationDate":"2019-02-17T10:13:11.636Z","initialPresentationDate":"2019-02-17T10:13:11.636Z","creditAndDebitVendorAudit":false,"workmansCompAudit":false,"shopWorkmansComp":false,"wotcPlatform":false,"groupVisionAndDental":false,"guaranteedIssueLife":false,"majorMedical":false,"aflac":false,"initialQuoteDate":"2019-02-17T10:13:11.636Z","projectedDeadlineDate":"2019-02-17T10:13:11.636Z","projectedEffectiveDate":"2019-02-17T10:13:11.636Z","updatedOn":"2019-02-17T10:13:11.636Z","taskId":"5c6933b7fad43f1b90a19576"},{"name":"check issue","issueType":"Epic","assistingAgent":"agent  turing","broker":"broker fifth","aflacGroupNumber":1223455,"sicCode":233,"employeeCount":2323,"businessName":"life insurance","address":"san fransisco","state":"california","city":"NY","country":"US","zipCode":2413,"contactName":"contact point one","contactPhone":45781239,"contactEmail":"test@gmail.com","employerTaxId":2323,"otherService":"service","projectedMedical":2323,"medicalCompensationPercentage":23,"projectedMajorMedicalCommissions":2323,"projectedLife":"2323","lifeCompensationPercentage":45,"projectedLifeCommissions":"2323","projectedTotalCommissions":23232,"projectedTotalMonthlyDeposits":232323,"status":"accounts","enrollmentDate":"2019-01-04T00:00:00.000Z","finalPresentationDate":"2019-09-04T00:00:00.000Z","initialPresentationDate":"2019-09-04T00:00:00.000Z","creditAndDebitVendorAudit":true,"workmansCompAudit":true,"shopWorkmansComp":true,"wotcPlatform":true,"groupVisionAndDental":true,"guaranteedIssueLife":true,"majorMedical":true,"aflac":true,"initialQuoteDate":"2019-09-04T00:00:00.000Z","projectedDeadlineDate":"2019-09-04T00:00:00.000Z","projectedEffectiveDate":"2019-09-04T00:00:00.000Z","updatedOn":"2019-02-17T16:44:21.517Z","taskId":"5c698f65fad43f1b90a19589"},{"name":"Task name test","issueType":"Epic","assistingAgent":"Chris","broker":"Umang","aflacGroupNumber":null,"sicCode":123,"employeeCount":123,"businessName":null,"address":null,"state":null,"city":null,"country":null,"zipCode":null,"contactName":null,"contactPhone":null,"contactEmail":null,"employerTaxId":null,"otherService":null,"projectedMedical":null,"medicalCompensationPercentage":null,"projectedMajorMedicalCommissions":null,"projectedLife":null,"lifeCompensationPercentage":null,"projectedLifeCommissions":null,"projectedTotalCommissions":null,"projectedTotalMonthlyDeposits":null,"status":"collecting","enrollmentDate":null,"finalPresentationDate":null,"initialPresentationDate":null,"creditAndDebitVendorAudit":false,"workmansCompAudit":false,"shopWorkmansComp":false,"wotcPlatform":false,"groupVisionAndDental":null,"guaranteedIssueLife":null,"majorMedical":false,"aflac":false,"initialQuoteDate":null,"projectedDeadlineDate":null,"projectedEffectiveDate":null,"updatedOn":"2019-03-19T15:14:04.157Z","taskId":"5c91073c2b19a441554d7a90"},{"name":"Test Inbox","issueType":"Epic","assistingAgent":null,"broker":null,"aflacGroupNumber":null,"sicCode":null,"employeeCount":null,"businessName":null,"address":null,"state":null,"city":null,"country":null,"zipCode":null,"contactName":null,"contactPhone":null,"contactEmail":null,"employerTaxId":null,"otherService":null,"projectedMedical":null,"medicalCompensationPercentage":null,"projectedMajorMedicalCommissions":null,"projectedLife":null,"lifeCompensationPercentage":null,"projectedLifeCommissions":null,"projectedTotalCommissions":null,"projectedTotalMonthlyDeposits":null,"status":"inbox","enrollmentDate":"2019-03-27T00:00:00.000Z","finalPresentationDate":"2019-03-27T00:00:00.000Z","initialPresentationDate":"2019-03-27T00:00:00.000Z","creditAndDebitVendorAudit":false,"workmansCompAudit":false,"shopWorkmansComp":false,"wotcPlatform":false,"groupVisionAndDental":null,"guaranteedIssueLife":null,"majorMedical":false,"aflac":false,"initialQuoteDate":"2019-03-27T00:00:00.000Z","projectedDeadlineDate":"2019-03-27T00:00:00.000Z","projectedEffectiveDate":"2019-03-27T00:00:00.000Z","updatedOn":"2019-03-27T17:58:30.477Z","taskId":"5c9bb9c657302e6abee4e8d5"}]}
        this.taskList = [
            {
                name: "first issue",
                issueType: "bug",
                assistingAgent: "aget one",
                broker: "broker one",
                aflacGroupNumber: 123,
                sicCode: 421578,
                employeeCount: 1500074,
                businessName: "medical insurance",
                address: "galactica apartments",
                state: "california",
                city: "San Diego",
                country: "US",
                zipCode: 12452,
                contactName: "jon deer",
                contactPhone: 2021451230,
                contactEmail: "test@gmail.com",
                employerTaxId: 55522103,
                otherService: "claims",
                projectedMedical: 45000,
                medicalCompensationPercentage: 75,
                projectedMajorMedicalCommissions: 8000,
                projectedLife: "porjected lives",
                lifeCompensationPercentage: 45,
                projectedLifeCommissions: "commisssions",
                projectedTotalCommissions: 20100,
                projectedTotalMonthlyDeposits: 1500,
                status: "quoting",
                enrollmentDate: "2019-02-17T06:44:28.506Z",
                finalPresentationDate: "2019-02-17T06:44:28.506Z",
                initialPresentationDate: "2019-02-17T06:44:28.506Z",
                creditAndDebitVendorAudit: false,
                workmansCompAudit: false,
                shopWorkmansComp: false,
                wotcPlatform: false,
                groupVisionAndDental: false,
                guaranteedIssueLife: false,
                majorMedical: false,
                aflac: false,
                initialQuoteDate: "2019-02-17T06:44:28.506Z",
                projectedDeadlineDate: "2019-02-17T06:44:28.506Z",
                projectedEffectiveDate: "2019-02-17T06:44:28.506Z",
                updatedOn: "2019-02-17T06:44:28.506Z",
                taskId: "5c6902ccb1c43f13dd780513"
            },
            {
                name: "second issue",
                issueType: "feature",
                assistingAgent: "agent two",
                broker: "broker two",
                aflacGroupNumber: 1223,
                sicCode: 23244,
                employeeCount: 153434,
                businessName: "accidental insurance",
                address: "westside avenue",
                state: "california",
                city: "San Diego",
                country: "US",
                zipCode: 12452,
                contactName: "jon baron",
                contactPhone: 2021230,
                contactEmail: "check@gmail.com",
                employerTaxId: 55522103,
                otherService: "claims",
                projectedMedical: 45000,
                medicalCompensationPercentage: 75,
                projectedMajorMedicalCommissions: 8000,
                projectedLife: "porjected lives",
                lifeCompensationPercentage: 45,
                projectedLifeCommissions: "commisssions",
                projectedTotalCommissions: 20100,
                projectedTotalMonthlyDeposits: 1500,
                status: "needingDocs",
                enrollmentDate: "2019-02-17T06:46:11.137Z",
                finalPresentationDate: "2019-02-17T06:46:11.137Z",
                initialPresentationDate: "2019-02-17T06:46:11.137Z",
                creditAndDebitVendorAudit: false,
                workmansCompAudit: false,
                shopWorkmansComp: false,
                wotcPlatform: false,
                groupVisionAndDental: false,
                guaranteedIssueLife: false,
                majorMedical: false,
                aflac: false,
                initialQuoteDate: "2019-02-17T06:46:11.137Z",
                projectedDeadlineDate: "2019-02-17T06:46:11.137Z",
                projectedEffectiveDate: "2019-02-17T06:46:11.137Z",
                updatedOn: "2019-02-17T06:46:11.137Z",
                taskId: "5c690333b1c43f13dd780514"
            },
            {
                name: "third epic",
                issueType: "epic",
                assistingAgent: "agent three",
                broker: "broker three",
                aflacGroupNumber: 1233,
                sicCode: 233232,
                employeeCount: 153434,
                businessName: "vehicle insurance",
                address: "westside avenue",
                state: "california",
                city: "San Diego",
                country: "US",
                zipCode: 12452,
                contactName: "jon baron",
                contactPhone: 2021230,
                contactEmail: "check@gmail.com",
                employerTaxId: 55522103,
                otherService: "claims",
                projectedMedical: 45000,
                medicalCompensationPercentage: 75,
                projectedMajorMedicalCommissions: 8000,
                projectedLife: "porjected lives",
                lifeCompensationPercentage: 45,
                projectedLifeCommissions: "commisssions",
                projectedTotalCommissions: 20100,
                projectedTotalMonthlyDeposits: 1500,
                status: "waiting",
                enrollmentDate: "2019-02-17T06:47:05.429Z",
                finalPresentationDate: "2019-02-17T06:47:05.429Z",
                initialPresentationDate: "2019-02-17T06:47:05.429Z",
                creditAndDebitVendorAudit: false,
                workmansCompAudit: false,
                shopWorkmansComp: false,
                wotcPlatform: false,
                groupVisionAndDental: false,
                guaranteedIssueLife: false,
                majorMedical: false,
                aflac: false,
                initialQuoteDate: "2019-02-17T06:47:05.429Z",
                projectedDeadlineDate: "2019-02-17T06:47:05.429Z",
                projectedEffectiveDate: "2019-02-17T06:47:05.429Z",
                updatedOn: "2019-02-17T06:47:05.429Z",
                taskId: "5c690369b1c43f13dd780515"
            },
            {
                name: "third epic",
                issueType: "epic",
                assistingAgent: "agent three",
                broker: "broker three",
                aflacGroupNumber: 1233,
                sicCode: 233232,
                employeeCount: 153434,
                businessName: "vehicle insurance",
                address: "westside avenue",
                state: "california",
                city: "San Diego",
                country: "US",
                zipCode: 12452,
                contactName: "jon baron",
                contactPhone: 2021230,
                contactEmail: "check@gmail.com",
                employerTaxId: 55522103,
                otherService: "claims",
                projectedMedical: 45000,
                medicalCompensationPercentage: 75,
                projectedMajorMedicalCommissions: 8000,
                projectedLife: "porjected lives",
                lifeCompensationPercentage: 45,
                projectedLifeCommissions: "commisssions",
                projectedTotalCommissions: 20100,
                projectedTotalMonthlyDeposits: 1500,
                status: "presenting",
                enrollmentDate: "2019-02-17T06:56:27.472Z",
                finalPresentationDate: "2019-02-17T06:56:27.472Z",
                initialPresentationDate: "2019-02-17T06:56:27.472Z",
                creditAndDebitVendorAudit: false,
                workmansCompAudit: false,
                shopWorkmansComp: false,
                wotcPlatform: false,
                groupVisionAndDental: false,
                guaranteedIssueLife: false,
                majorMedical: false,
                aflac: false,
                initialQuoteDate: "2019-02-17T06:56:27.472Z",
                projectedDeadlineDate: "2019-02-17T06:56:27.472Z",
                projectedEffectiveDate: "2019-02-17T06:56:27.472Z",
                updatedOn: "2019-02-17T06:56:27.472Z",
                taskId: "5c69059b02fa6c144f8d058e"
            },
            {
                name: "test issue",
                issueType: "Bug",
                assistingAgent: "Test agent",
                broker: "Test Broker",
                aflacGroupNumber: 12,
                sicCode: 121313,
                employeeCount: 112,
                businessName: "test",
                address: "roger apartment",
                state: "Test",
                city: "Test",
                country: "Test",
                zipCode: 123456,
                contactName: "1234567890",
                contactPhone: 12345669,
                contactEmail: "Test@Test.com",
                employerTaxId: 1214223,
                otherService: "Test  Test",
                projectedMedical: 21321,
                medicalCompensationPercentage: 75,
                projectedMajorMedicalCommissions: 12356,
                projectedLife: "12345",
                lifeCompensationPercentage: 23,
                projectedLifeCommissions: "1244",
                projectedTotalCommissions: 11212,
                projectedTotalMonthlyDeposits: 12412,
                status: "caseBuilding",
                enrollmentDate: "2019-02-17T10:13:11.636Z",
                finalPresentationDate: "2019-02-17T10:13:11.636Z",
                initialPresentationDate: "2019-02-17T10:13:11.636Z",
                creditAndDebitVendorAudit: false,
                workmansCompAudit: false,
                shopWorkmansComp: false,
                wotcPlatform: false,
                groupVisionAndDental: false,
                guaranteedIssueLife: false,
                majorMedical: false,
                aflac: false,
                initialQuoteDate: "2019-02-17T10:13:11.636Z",
                projectedDeadlineDate: "2019-02-17T10:13:11.636Z",
                projectedEffectiveDate: "2019-02-17T10:13:11.636Z",
                updatedOn: "2019-02-17T10:13:11.636Z",
                taskId: "5c6933b7fad43f1b90a19576"
            },
            {
                name: "check issue",
                issueType: "Epic",
                assistingAgent: "agent  turing",
                broker: "broker fifth",
                aflacGroupNumber: 1223455,
                sicCode: 233,
                employeeCount: 2323,
                businessName: "life insurance",
                address: "san fransisco",
                state: "california",
                city: "NY",
                country: "US",
                zipCode: 2413,
                contactName: "contact point one",
                contactPhone: 45781239,
                contactEmail: "test@gmail.com",
                employerTaxId: 2323,
                otherService: "service",
                projectedMedical: 2323,
                medicalCompensationPercentage: 23,
                projectedMajorMedicalCommissions: 2323,
                projectedLife: "2323",
                lifeCompensationPercentage: 45,
                projectedLifeCommissions: "2323",
                projectedTotalCommissions: 23232,
                projectedTotalMonthlyDeposits: 232323,
                status: "accounts",
                enrollmentDate: "2019-01-04T00:00:00.000Z",
                finalPresentationDate: "2019-09-04T00:00:00.000Z",
                initialPresentationDate: "2019-09-04T00:00:00.000Z",
                creditAndDebitVendorAudit: true,
                workmansCompAudit: true,
                shopWorkmansComp: true,
                wotcPlatform: true,
                groupVisionAndDental: true,
                guaranteedIssueLife: true,
                majorMedical: true,
                aflac: true,
                initialQuoteDate: "2019-09-04T00:00:00.000Z",
                projectedDeadlineDate: "2019-09-04T00:00:00.000Z",
                projectedEffectiveDate: "2019-09-04T00:00:00.000Z",
                updatedOn: "2019-02-17T16:44:21.517Z",
                taskId: "5c698f65fad43f1b90a19589"
            },
            {
                name: "Task name test",
                issueType: "Epic",
                assistingAgent: "Chris",
                broker: "Umang",
                aflacGroupNumber: null,
                sicCode: 123,
                employeeCount: 123,
                businessName: null,
                address: null,
                state: null,
                city: null,
                country: null,
                zipCode: null,
                contactName: null,
                contactPhone: null,
                contactEmail: null,
                employerTaxId: null,
                otherService: null,
                projectedMedical: null,
                medicalCompensationPercentage: null,
                projectedMajorMedicalCommissions: null,
                projectedLife: null,
                lifeCompensationPercentage: null,
                projectedLifeCommissions: null,
                projectedTotalCommissions: null,
                projectedTotalMonthlyDeposits: null,
                status: "collecting",
                enrollmentDate: null,
                finalPresentationDate: null,
                initialPresentationDate: null,
                creditAndDebitVendorAudit: false,
                workmansCompAudit: false,
                shopWorkmansComp: false,
                wotcPlatform: false,
                groupVisionAndDental: null,
                guaranteedIssueLife: null,
                majorMedical: false,
                aflac: false,
                initialQuoteDate: null,
                projectedDeadlineDate: null,
                projectedEffectiveDate: null,
                updatedOn: "2019-03-19T15:14:04.157Z",
                taskId: "5c91073c2b19a441554d7a90"
            },
            {
                name: "Test Inbox",
                issueType: "Epic",
                assistingAgent: "Chris",
                broker: null,
                aflacGroupNumber: null,
                sicCode: null,
                employeeCount: null,
                businessName: null,
                address: null,
                state: null,
                city: null,
                country: null,
                zipCode: null,
                contactName: null,
                contactPhone: null,
                contactEmail: null,
                employerTaxId: null,
                otherService: null,
                projectedMedical: null,
                medicalCompensationPercentage: null,
                projectedMajorMedicalCommissions: null,
                projectedLife: null,
                lifeCompensationPercentage: null,
                projectedLifeCommissions: null,
                projectedTotalCommissions: null,
                projectedTotalMonthlyDeposits: null,
                status: "inbox",
                enrollmentDate: "2019-03-27T00:00:00.000Z",
                finalPresentationDate: "2019-03-27T00:00:00.000Z",
                initialPresentationDate: "2019-03-27T00:00:00.000Z",
                creditAndDebitVendorAudit: false,
                workmansCompAudit: false,
                shopWorkmansComp: false,
                wotcPlatform: false,
                groupVisionAndDental: null,
                guaranteedIssueLife: null,
                majorMedical: false,
                aflac: false,
                initialQuoteDate: "2019-03-27T00:00:00.000Z",
                projectedDeadlineDate: "2019-03-27T00:00:00.000Z",
                projectedEffectiveDate: "2019-03-27T00:00:00.000Z",
                updatedOn: "2019-03-27T17:58:30.477Z",
                taskId: "5c9bb9c657302e6abee4e8d5"
            }
        ]
        // this.taskList = this.route.snapshot.data['taskList'];
        this.manipulateData();
    }

    manipulateData() {
        this.taskList.filter(task => {
            this[task['status']].push({
                title: task['name'],
                taskId: task['taskId'],
                description: task['businessName'],
                badges: 'health, first',
                assignee: ''
            });
        });
    }


}
