
import { personalInfooMale, 
    personalInfooFemale, 
    datePickers, 
    changePass,
    birthDays2 } from "./data";
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
