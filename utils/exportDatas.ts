
import { personalInfooMale, personalInfooFemale } from "./data";
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
