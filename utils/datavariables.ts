import { getConfig, getConfig2 } from "./config";
import { AppConfigs, AppConfigs2 } from "./data";

const config = getConfig();
export const AccountLogin : AppConfigs = {
    baseappurl: config.baseappurl,
    baseappurl2: config.baseappurl2,
    qmeupadmin: config.qmeupadmin,
    qmeuppass: config.qmeuppass,
    docaccount: config.docaccount,
    docpassword: config.docpassword,
    qmeupkioskname: config.qmeupkioskname,
    qmeupCloud: config.qmeupCloud
}
const config2 = getConfig2();
export const getKiosKURL: AppConfigs2 = {
    kioskurl: config2.kioskurl
}