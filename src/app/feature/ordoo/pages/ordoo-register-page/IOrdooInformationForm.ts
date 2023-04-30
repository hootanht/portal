import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IPersonalInformationForm } from './IPersonalInformation';


export interface IOrdooInformationForm {
  placeOfBirthCertificate: FormControl<string>;
  grades: FormControl<string>;
  studyField: FormControl<string>;
  lastGPA: FormControl<number>;
  schoolName: FormControl<string>;
  lastSchoolName: FormControl<string>;
  email: FormControl<string>;
  isNavjote: FormControl<boolean>;
  isSpecialSickness: FormControl<boolean>;
  sensetiveSickness: FormControl<string[]>;
  otherSensetiveSickness: FormControl<string>;
  drug: FormControl<string>;
  allergicFood: FormControl<string>;
  weight: FormControl<number>;
  height: FormControl<number>;
  bloodType: FormControl<string>;
  clothesHeight: FormControl<number>;
  clothesWidth: FormControl<number>;
  familyHeadName: FormControl<string>;
  familyHeadLastName: FormControl<string>;
  familyHeadRealtion: FormControl<string>;
  familyHeadDependents: FormControl<number>;
  familyHeadMarigeStatus: FormControl<string>;
  familyHeadOld: FormControl<number>;
  familyHeadJob: FormControl<string>;
  familyHeadGraduationRate: FormControl<string>;
  familyHeadPhone: FormControl<string>;
  isLostAnybody: FormControl<boolean>;
  familyMembers: FormArray<FormGroup<IPersonalInformationForm>>;
  tehranName: FormControl<string>;
  tehranLastname: FormControl<string>;
  tehranRealtion: FormControl<string>;
  tehranPhone: FormControl<string>;
  tehranHome: FormControl<string>;
  tehranAddress: FormControl<string>;
  haveBeenOrdoo: FormControl<boolean>;
  ordooNumber: FormControl<number>;
  haveTriedOrdoo: FormControl<boolean>;
  isCloseFamilyinOrdoo: FormControl<boolean>;
  personInOrdooRealtion: FormControl<string>;
  howMeetOrdoo: FormControl<string>;
  goal: FormControl<string>;
  likeClassSubjects: FormControl<string>;
  likeSports: FormControl<string>;
  likeArt: FormControl<string>;
  likeSpendFreetime: FormControl<string>;
  likePlaceInTehran: FormControl<string>;
  goodPoints: FormControl<string>;
  negetivePoints: FormControl<string>;
  bestMemory: FormControl<string>;
  woerstMemory: FormControl<string>;
  biggestLesson: FormControl<string>;
  mostInfuence: FormControl<string>;
  lastAcademicTranscript: FormControl<string>;
  commitmentLetter: FormControl<string>;
  parentsConsent: FormControl<string>;
  successesDocument: FormControl<string>;
  bloodTestConsent:FormControl<string>;
}
