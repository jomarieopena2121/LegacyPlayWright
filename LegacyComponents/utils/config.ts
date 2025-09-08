import * as dotenv from 'dotenv'
import * as path from 'path'
import { AppConfigs } from './data';
dotenv.config();

export function getConfig(): AppConfigs {
    return{
        baseappurl: process.env.BASE_APP_URL || '',
        baseappurl2: process.env.BASE_APP_URL2 || '',
        qmeupadmin: process.env.QMEUPADMIN || '',
        qmeuppass: process.env.QMEUPPASS || '',
        docaccount: process.env.QMEUPDOCTOR || '',
        docpassword: process.env.QMEUPDOCPASS || '',
        kioskurl: process.env.QMEUPKIOSKURL || '',
    };
}