export type AppConfigs = {
    baseappurl: string;
    baseappurl2: string;
    qmeupadmin: string;
    qmeuppass: string;
    docaccount: string;
    docpassword: string;
    qmeupkioskname: string
    qmeupCloud: string
}
export type AppConfigs2 = {
    kioskurl: string;
}

export type personalInfooMale = {
    prefix: string;
    suffix: string;
    lastName: string;
    firstname: string;
    middlename: string;
    position: string;
    username: string;
    nickname: string;
    mobileNo: string;
    officePhone: string;
    faxNo: string;
}

export type personalInfooFemale = {
    prefix: string;
    lastName: string;
    firstname: string;
    middlename: string;
    position: string;
    username: string;
    nickname: string;
    mobileNo: string;
    officePhone: string;
    faxNo: string;
}
export type changePass = {
    oldPass: string,
    newPass: string,
    confirmPass: string
}
export type datePickers = {
    birthDays: string,
    licenseExpire: string
}