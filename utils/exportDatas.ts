
import { doctorsRoom } from "../QMSClass/QmeupDoctorsModule";
import { doctorInformation } from "../QMSClass/QmeupMyAccount";
import { personalInfooMale, 
    personalInfooFemale, 
    datePickers, 
    changePass,
    birthDays2,
    docInform,
    docRoom,
    updatedocRoom2
} from "./data";
const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));
export const personalInfoMale: personalInfooMale  = {
    prefix: dataset.maleInformations.prefix,
    suffix: dataset.maleInformations.suffix,
    lastName: dataset.maleInformations.lastName,
    middlename: dataset.maleInformations.middlename,
    firstname: dataset.maleInformations.firstName,
    position: dataset.maleInformations.position,
    username: dataset.maleInformations.userName,
    nickname: dataset.maleInformations.nickName,
    mobileNo: dataset.maleInformations.mobileNo,
    officePhone: dataset.maleInformations.officePhone,
    extension: dataset.maleInformations.extension,
    faxNo: dataset.maleInformations.faxNo
}

export const personalInfoFemale: personalInfooFemale  = {
    prefix: dataset.femaleInformations.prefix,
    lastName: dataset.femaleInformations.lastName,
    middlename: dataset.femaleInformations.middlename,
    firstname: dataset.femaleInformations.firstName,
    position: dataset.femaleInformations.position,
    username: dataset.femaleInformations.userName,
    nickname: dataset.femaleInformations.nickName,
    mobileNo: dataset.femaleInformations.mobileNo,
    officePhone: dataset.femaleInformations.officePhone,
    extension: dataset.femaleInformations.extension,
    faxNo: dataset.femaleInformations.faxNo
}
export const changePassword: changePass ={
    oldPass: dataset.changePassword.oldPass,
    newPass: dataset.changePassword.newPass,
    confirmPass: dataset.changePassword.confirmPass
}
export const datePickerss: datePickers = {
    birthDays: dataset.datePicks.birthDays,
    licenseExpire: dataset.datePicks.licenseExpire
}
export const birthDayss2: birthDays2 = {
    month: dataset.birthDays.month,
    day: dataset.birthDays.day,
    year: dataset.birthDays.year
}
export const docInfo: docInform = {
    licenseNo: dataset.doctorInformation.licenseNo,
    licexpire: dataset.doctorInformation.licexpire,
    specialization: dataset.doctorInformation.specialization
}
export const docRooms: docRoom = {
    roomName: dataset.doctorsRoom.roomName,
    remarks: dataset.doctorsRoom.remarks
}
export const updocRoom : updatedocRoom2 = {
    RoomName: dataset.updatedoctorsRM.RoomName,
    Remarks2: dataset.updatedoctorsRM.Remarks2
}
