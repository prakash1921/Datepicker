import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/GlobalServices';
@Component({
  selector: 'app-roles-details',
  templateUrl: './roles-details.component.html',
  styleUrls: ['./roles-details.component.css']
})
export class RolesDetailsComponent implements OnInit {
  locationid: any;
  form;
  RoleName: any;
  roleNameError: boolean = false;
  roleNameErrorMessage: any;
  isHospital: boolean = false;
  dashboard: boolean = false;
  hospitals: boolean = false
  hospArray: any = [];
  dashArray: any = [];
  roles: any = [];
  //user Roles rights
  userEdit: boolean = false;
  userAdd: boolean = false;
  userDelete: boolean = false;
  roleAdd: boolean = false;
  roleEdit: boolean = false;
  roleDelete: boolean = false;
  hospitalLocationAdd: boolean = false;
  hospitalLocationEdit: boolean = false;
  hospitalLocationDelete: boolean = false;
  hospitalAdd: boolean = false;
  hospitalEdit: boolean = false;
  hospitalDelete: boolean = false;

  masters: boolean = false;
  isMasters: boolean = false;
  mastersArray: any = [];
  departAdd: boolean = false;
  departEdit: boolean = false;
  departDelete: boolean = false;
  qualificationAdd: boolean = false;
  qualificationEdit: boolean = false;
  qualificationDelete: boolean = false;
  specializationAdd: boolean = false;
  specializationEdit: boolean = false;
  specializationDelete: boolean = false;
  doctorAdd: boolean = false;
  doctorEdit: boolean = false;
  doctorDelete: boolean = false;


  // master laboratory
  headerAdd: boolean = false;
  headerEdit: boolean = false;
  headerDelete: boolean = false;
  parameterAdd: boolean = false;
  parameterEdit: boolean = false;
  parameterDelete: boolean = false;
  sampleTypeAdd: boolean = false;
  sampleTypeEdit: boolean = false;
  sampleTypeDelete: boolean = false;
  testMasterAdd: boolean = false;
  testMasterEdit: boolean = false;
  testMasterDelete: boolean = false;


  //patient module
  isPatient: boolean = false;
  patient: boolean = false;
  patientArray: any = [];
  patientAdd: boolean = false;
  patientEdit: boolean = false;
  patientDelete: boolean = false;
  patientPaymentDepositAdd: boolean = false;
  patientPaymentDepositDetailsEdit: boolean = false;
  opdAdd: boolean = false;
  opdEdit: boolean = false;
  opdDelete: boolean = false;
  ipdAdd: boolean = false;
  ipdEdit: boolean = false;
  ipdDelete: boolean = false;

  //report module
  report: boolean = false;
  isReport: boolean = false;
  reportArray: any = [];
  hospitalDayBookView: boolean = false;
  hospitalDayBookOPDView: boolean = false;
  hospitalDayBookIPDView: boolean = false;

  id: any;
  roleDetails: any;






  constructor(public activatedRouter: ActivatedRoute, public toastr: ToastrManager, private router: Router, private base_path_service: GlobalService) {
    this.locationid = localStorage.getItem('selectedLocation');
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.id = params['id'];
      console.log("rolles",this.id)
      this.getRolesDetails();
    });
  }
  getRolesDetails() {
    const url = this.base_path_service.base_path_api_url() + 'roles/getRoleById'+'/'+ this.id;
    this.base_path_service.GetRequest(url)
      .subscribe((res) => {
        if (res[0].json) {
          this.roleDetails = res[0].json;
          console.log("this.roleDetails,", this.roleDetails);
          this.RoleName=this.roleDetails.RoleName;
          if (this.roleDetails.dashBoardRights.length != 0) {
            this.dashboard = this.roleDetails.dashBoardRights.length != 0 ? this.roleDetails.dashBoardRights[0].dash.dashboard : false;
          }
          if (this.roleDetails.hospitalRights.length != 0) {
            this.hospitals = this.roleDetails.hospitalRights.length != 0 ? this.roleDetails.hospitalRights[0].userRolesRights.hospital : false;
            if (this.hospitals) {
              this.isHospital = true;
              this.userAdd = this.roleDetails.hospitalRights[0].userRolesRights.userRights != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.userRights.userAdd : false;
              this.userEdit = this.roleDetails.hospitalRights[0].userRolesRights.userRights != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.userRights.userEdit : false;
              this.userDelete = this.roleDetails.hospitalRights[0].userRolesRights.userRights != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.userRights.userDelete : false;

              this.roleAdd = this.roleDetails.hospitalRights[0].userRolesRights.roleRights != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.roleRights.roleAdd : false;
              this.roleEdit = this.roleDetails.hospitalRights[0].userRolesRights.roleRights != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.roleRights.roleEdit : false;
              this.roleDelete = this.roleDetails.hospitalRights[0].userRolesRights.roleRights != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.roleRights.roleDelete : false;

              this.hospitalAdd = this.roleDetails.hospitalRights[0].userRolesRights.hospitals != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.hospitals.hospitalAdd : false;
              this.hospitalEdit = this.roleDetails.hospitalRights[0].userRolesRights.hospitals != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.hospitals.hospitalEdit : false;
              this.hospitalDelete = this.roleDetails.hospitalRights[0].userRolesRights.hospitals != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.hospitals.hospitalDelete : false;

              this.hospitalLocationAdd = this.roleDetails.hospitalRights[0].userRolesRights.hospitals != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.hospitalLocation.hospitalLocationAdd : false;
              this.hospitalLocationEdit = this.roleDetails.hospitalRights[0].userRolesRights.hospitals != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.hospitalLocation.hospitalLocationEdit : false;
              this.hospitalLocationDelete = this.roleDetails.hospitalRights[0].userRolesRights.hospitals != undefined ? this.roleDetails.hospitalRights[0].userRolesRights.hospitalLocation.hospitalLocationDelete : false;

            }
          }
          if (this.roleDetails.masterRights.length != 0) {
            this.masters = this.roleDetails.masterRights.length != 0 ? this.roleDetails.masterRights[0].mastersRolesRights.masters : false;
            if (this.masters) {
              this.isMasters = true;
              this.departAdd = this.roleDetails.masterRights[0].mastersRolesRights.Departments != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Departments.departAdd : false;
              this.departEdit = this.roleDetails.masterRights[0].mastersRolesRights.Departments != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Departments.departEdit : false;
              this.departDelete = this.roleDetails.masterRights[0].mastersRolesRights.Departments != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Departments.departDelete : false;

              this.specializationAdd = this.roleDetails.masterRights[0].mastersRolesRights.Specialization != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Specialization.specializationAdd : false;
              this.specializationEdit = this.roleDetails.masterRights[0].mastersRolesRights.Specialization != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Specialization.specializationEdit : false;
              this.specializationDelete = this.roleDetails.masterRights[0].mastersRolesRights.Specialization != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Specialization.specializationDelete : false;

              this.sampleTypeAdd = this.roleDetails.masterRights[0].mastersRolesRights.SampleType != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.SampleType.sampleTypeAdd : false;
              this.sampleTypeEdit = this.roleDetails.masterRights[0].mastersRolesRights.SampleType != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.SampleType.sampleTypeEdit : false;
              this.sampleTypeDelete = this.roleDetails.masterRights[0].mastersRolesRights.SampleType != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.SampleType.sampleTypeDelete : false;


              this.doctorAdd = this.roleDetails.masterRights[0].mastersRolesRights.Doctors != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Doctors.doctorAdd : false;
              this.doctorEdit = this.roleDetails.masterRights[0].mastersRolesRights.Doctors != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Doctors.doctorEdit : false;
              this.doctorDelete = this.roleDetails.masterRights[0].mastersRolesRights.Doctors != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Doctors.doctorDelete : false;


              this.headerAdd = this.roleDetails.masterRights[0].mastersRolesRights.Headers != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Headers.headerAdd : false;
              this.headerEdit = this.roleDetails.masterRights[0].mastersRolesRights.Headers != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Headers.headerEdit : false;
              this.headerDelete = this.roleDetails.masterRights[0].mastersRolesRights.Headers != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Headers.headerDelete : false;


              this.parameterAdd = this.roleDetails.masterRights[0].mastersRolesRights.Parameter != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Parameter.parameterAdd : false;
              this.parameterEdit = this.roleDetails.masterRights[0].mastersRolesRights.Parameter != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Parameter.parameterEdit : false;
              this.parameterDelete = this.roleDetails.masterRights[0].mastersRolesRights.Parameter != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Parameter.parameterDelete : false;

              this.qualificationAdd = this.roleDetails.masterRights[0].mastersRolesRights.Qualification != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Qualification.qualificationAdd : false;
              this.qualificationEdit = this.roleDetails.masterRights[0].mastersRolesRights.Qualification != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Qualification.qualificationEdit : false;
              this.qualificationDelete = this.roleDetails.masterRights[0].mastersRolesRights.Qualification != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.Qualification.qualificationDelete : false;

              this.testMasterAdd = this.roleDetails.masterRights[0].mastersRolesRights.TestMaster != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.TestMaster.testMasterAdd : false;
              this.testMasterEdit = this.roleDetails.masterRights[0].mastersRolesRights.TestMaster != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.TestMaster.testMasterEdit : false;
              this.testMasterDelete = this.roleDetails.masterRights[0].mastersRolesRights.TestMaster != undefined ? this.roleDetails.masterRights[0].mastersRolesRights.TestMaster.testMasterDelete : false;

            }
          }

          if (this.roleDetails.patientRights.length != 0) {
            this.patient = this.roleDetails.patientRights.length != 0 ? this.roleDetails.patientRights[0].PatientRolesRights.patient : false;
            if (this.patient) {
              this.isPatient = true;
              this.ipdAdd = this.roleDetails.patientRights[0].PatientRolesRights.IPDBills != undefined ? this.roleDetails.patientRights[0].PatientRolesRights.IPDBills.ipdAdd : false;
              this.ipdEdit = this.roleDetails.patientRights[0].PatientRolesRights.IPDBills != undefined ? this.roleDetails.patientRights[0].PatientRolesRights.IPDBills.ipdEdit : false;
              this.ipdDelete = this.roleDetails.patientRights[0].PatientRolesRights.IPDBills != undefined ? this.roleDetails.patientRights[0].PatientRolesRights.IPDBills.ipdDelete : false;

              this.opdAdd = this.roleDetails.patientRights[0].PatientRolesRights.OPDBills != undefined ? this.roleDetails.patientRights[0].PatientRolesRights.OPDBills.opdAdd : false;
              this.opdEdit = this.roleDetails.patientRights[0].PatientRolesRights.OPDBills != undefined ? this.roleDetails.patientRights[0].PatientRolesRights.OPDBills.opdEdit : false;
              this.opdDelete = this.roleDetails.patientRights[0].PatientRolesRights.OPDBills != undefined ? this.roleDetails.patientRights[0].PatientRolesRights.OPDBills.opdDelete : false;


              this.patientAdd = this.roleDetails.patientRights[0].PatientRolesRights.patientRegistration != undefined ? this.roleDetails.patientRights[0].PatientRolesRights.patientRegistration.patientAdd : false;
              this.patientEdit = this.roleDetails.patientRights[0].PatientRolesRights.patientRegistration != undefined ? this.roleDetails.patientRights[0].PatientRolesRights.patientRegistration.patientEdit : false;

              this.patientPaymentDepositAdd = this.roleDetails.patientRights[0].PatientRolesRights.patientPaymentDeposit != undefined ? this.roleDetails.patientRights[0].PatientRolesRights.patientPaymentDeposit.patientPaymentDepositAdd : false;
              this.patientPaymentDepositDetailsEdit = this.roleDetails.patientRights[0].PatientRolesRights.patientPaymentDeposit != undefined ? this.roleDetails.patientRights[0].PatientRolesRights.patientPaymentDeposit.patientPaymentDepositDetailsEdit : false;

            }
          }
          if (this.roleDetails.reportRights.length != 0) {
            this.report = this.roleDetails.reportRights.length != 0 ? this.roleDetails.reportRights[0].ReportRolesRights.report : false;

            if (this.report) {
              this.isReport = true;
              this.hospitalDayBookView=this.roleDetails.reportRights[0].ReportRolesRights.HospitalDayBook !=undefined ? this.roleDetails.reportRights[0].ReportRolesRights.HospitalDayBook.hospitalDayBookView : false;
              this.hospitalDayBookOPDView=this.roleDetails.reportRights[0].ReportRolesRights.HospitalDayBook !=undefined ? this.roleDetails.reportRights[0].ReportRolesRights.HospitalDayBook.hospitalDayBookOPDView : false;
              this.hospitalDayBookIPDView=this.roleDetails.reportRights[0].ReportRolesRights.HospitalDayBook !=undefined ? this.roleDetails.reportRights[0].ReportRolesRights.HospitalDayBook.hospitalDayBookIPDView : false;
            }
          }

        }

      },err => {
        console.log(err);
      });
  }

  update(){
    if (this.RoleName != undefined) {
    
      if (this.dashboard == true) {
        var dashData = {
          dashboard: this.dashboard
        }
        this.dashArray.push({ dash: dashData })
      } else {
        this.dashArray = [];
      }
      if (this.hospitals == true) {
        var hospital = true;
        var userRights = {
          userAdd: this.userAdd,
          userEdit: this.userEdit,
          userDelete: this.userDelete
        }
        var roleRights = {
          roleAdd: this.roleAdd,
          roleEdit: this.roleEdit,
          roleDelete: this.roleDelete
        }
        var hospitals = {
          hospitalAdd: this.hospitalAdd,
          hospitalEdit: this.hospitalEdit,
          hospitalDelete: this.hospitalDelete
        }
        var hospitalLocation = {
          hospitalLocationAdd: this.hospitalLocationAdd,
          hospitalLocationEdit: this.hospitalLocationEdit,
          hospitalLocationDelete: this.hospitalLocationDelete
        }
        var userRolesRights = {
          hospital: hospital,
          userRights: userRights,
          roleRights: roleRights,
          hospitals: hospitals,
          hospitalLocation: hospitalLocation
        }
        this.hospArray.push({ userRolesRights: userRolesRights })
      } else {
        this.hospArray = [];
      }

      if (this.masters == true) {
        var masters = true;
        var Departments = {
          departAdd: this.departAdd,
          departEdit: this.departEdit,
          departDelete: this.departDelete
        }
        var Qualification = {
          qualificationAdd: this.qualificationAdd,
          qualificationEdit: this.qualificationEdit,
          qualificationDelete: this.qualificationDelete
        }
        var Specialization = {
          specializationAdd: this.specializationAdd,
          specializationEdit: this.specializationEdit,
          specializationDelete: this.specializationDelete
        }
        var Doctors = {
          doctorAdd: this.doctorAdd,
          doctorEdit: this.doctorEdit,
          doctorDelete: this.doctorDelete
        }

        //master laboratory
        var Headers = {
          headerAdd: this.headerAdd,
          headerEdit: this.headerEdit,
          headerDelete: this.headerDelete
        }
        var Parameter = {
          parameterAdd: this.parameterAdd,
          parameterEdit: this.parameterEdit,
          parameterDelete: this.parameterDelete
        }
        var SampleType = {
          sampleTypeAdd: this.sampleTypeAdd,
          sampleTypeEdit: this.sampleTypeEdit,
          sampleTypeDelete: this.sampleTypeDelete
        }
        var TestMaster = {
          testMasterAdd: this.testMasterAdd,
          testMasterEdit: this.testMasterEdit,
          testMasterDelete: this.testMasterDelete
        }
        var masterRolesRights = {
          masters: masters,
          Departments: Departments,
          Qualification: Qualification,
          Specialization: Specialization,
          Doctors: Doctors,
          Headers: Headers,
          Parameter: Parameter,
          SampleType: SampleType,
          TestMaster: TestMaster
        }
        this.mastersArray.push({ masterRolesRights: masterRolesRights })
      } else {
        this.mastersArray = [];
      }
      if (this.patient == true) {
        var patient = true;
        var patientRegistration = {
          patientAdd: this.patientAdd,
          patientEdit: this.patientEdit
        }
        var patientPaymentDeposit = {
          patientPaymentDepositAdd: this.patientPaymentDepositAdd,
          patientPaymentDepositDetailsEdit: this.patientPaymentDepositDetailsEdit
        }
        var OPDBills = {
          opdAdd: this.opdAdd,
          opdEdit: this.opdEdit,
          opdDelete: this.opdDelete
        }
        var IPDBills = {
          ipdAdd: this.ipdAdd,
          ipdEdit: this.ipdEdit,
          ipdDelete: this.ipdDelete
        }
        var PatientRolesRights = {
          patient: patient,
          patientRegistration: patientRegistration,
          patientPaymentDeposit: patientPaymentDeposit,
          OPDBills: OPDBills,
          IPDBills: IPDBills
        }
        this.patientArray.push({ PatientRolesRights: PatientRolesRights });

      } else {
        this.patientArray = [];
      }
      if (this.report == true) {
        var report = true;
        var HospitalDayBook = {
          hospitalDayBookView: this.hospitalDayBookView,
          hospitalDayBookOPDView: this.hospitalDayBookOPDView,
          hospitalDayBookIPDView: this.hospitalDayBookIPDView
        }
        var ReportRolesRights = {
          report: report,
          HospitalDayBook: HospitalDayBook
        }
        this.reportArray.push({ ReportRolesRights: ReportRolesRights })
      } else {
        this.reportArray = [];
      }
      const body = {
        RoleName: this.RoleName,
        hospArray: this.hospArray,
        dashArray: this.dashArray,
        mastersArray: this.mastersArray,
        patientArray: this.patientArray,
        reportArray: this.reportArray,
        LocationID: this.locationid,
        id:this.id
      }
      const url = this.base_path_service.base_path_api_url() + 'roles/updateRole';
      this.base_path_service.PostRequest(url, body)
        .subscribe((res) => {
          if (res[0].json.status == false) {
            this.toastr.errorToastr(res[0].json.msg, 'Opps!');
          } else {
            this.router.navigateByUrl('role');
            this.toastr.successToastr('Role Updated Successfully', 'success');
          }
        })

    }
    else {
      this.roleNameErrorMessage = 'Role Name Required'
      this.roleNameError = true
      setTimeout(() => {
        this.roleNameErrorMessage = ''
        this.roleNameError = false
      }, 2000);
      return
    }
  }








  hospitalChange() {
    this.isHospital = !this.isHospital;
  }
  masterChange() {
    this.isMasters = !this.isMasters;
  }
  patientChange() {
    this.isPatient = !this.isPatient;
  }
  reportChange() {
    this.isReport = !this.isReport;
  }

}
