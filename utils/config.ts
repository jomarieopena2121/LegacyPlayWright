import * as dotenv from 'dotenv'
import * as path from 'path'
import { AppConfigs, AppConfigs2 } from './data';
dotenv.config();

export function getConfig(): AppConfigs {
    return{
        baseappurl: process.env.BASE_APP_URL || '',
        baseappurl2: process.env.BASE_APP_URL2 || '',
        qmeupadmin: process.env.QMEUPADMIN || '',
        qmeuppass: process.env.QMEUPPASS || '',
        docaccount: process.env.QMEUPDOCTOR || '',
        docpassword: process.env.QMEUPDOCPASS || '',
       qmeupkioskname: process.env.QMEUPKIOSKNAME || ''
    };
}

export function getConfig2(): AppConfigs2{
    return{
        kioskurl: process.env.QMEUPKIOSKURL || ''

    }
}