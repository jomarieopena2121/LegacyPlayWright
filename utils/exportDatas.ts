
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
    prefix: dataset.maleInformations.prefix,
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
