import { getConfig } from "./config";
import { AppConfigs } from "./data";

const config = getConfig();
export const AccountLogin : AppConfigs = {
    baseappurl: config.baseappurl,
    baseappurl2: config.baseappurl2,
    qmeupadmin: config.qmeupadmin,
    qmeuppass: config.qmeuppass,
    docaccount: config.docaccount,
    docpassword: config.docpassword
}