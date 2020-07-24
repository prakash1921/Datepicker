import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/GlobalServices';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {
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
























  constructor(public toastr: ToastrManager, private router: Router, private base_path_service: GlobalService) {
    this.locationid = localStorage.getItem('selectedLocation');
  }

  ngOnInit() {

  }





  save() {
    if (this.RoleName != undefined) {
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
      if (this.dashboard == true) {
        var dashData = {
          dashboard: this.dashboard
        }
        this.dashArray.push({ dash: dashData })
      } else {
        this.dashArray = [];
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
        LocationID: this.locationid
      }
      console.log("lll",this.locationid)
      const url = this.base_path_service.base_path_api_url() + 'roles/saveRole';
      this.base_path_service.PostRequest(url, body)
        .subscribe((res) => {
          if (res[0].json.status == false) {
            this.toastr.errorToastr(res[0].json.msg, 'Opps!');
          } else {
            this.router.navigateByUrl('role');
            this.toastr.successToastr(res[0].json.msg, 'success');
          }
        })

    } else {
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
