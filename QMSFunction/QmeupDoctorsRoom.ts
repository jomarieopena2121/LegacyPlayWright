import { Page, expect} from '@playwright/test'
import { PageManager } from '../PageObjectModels/MainPageObjectModels';
import { docRoom, updatedocRoom2 } from '../utils/data';
export async function AddDoctorsRoom(page: Page, {roomName, remarks}: docRoom) {
    const pageManager = new PageManager(page);
    const dctrRoom =  pageManager.qmeupDMDoctorsRoom();

    await dctrRoom.btndctrAddRM.click();
    await expect(dctrRoom.hdAddRM).toBeVisible();
    await dctrRoom.addRM.fill(roomName);
    await dctrRoom.addRmrk.fill(remarks);
    await dctrRoom.dctrRMSV.click();

    return pageManager;
}

export async function UpdateDoctorsRoom(page:Page, { RoomName, Remarks2 }: updatedocRoom2) {
    const pageManager = new PageManager(page);
    const dctrRoom =  pageManager.qmeupDMDoctorsRoom();

        const tbody = await dctrRoom.dctrRMNAME
        const rows = tbody;  
        const rowCount = await rows.count();
        const dctrRoom1 = await dctrRoom.dctrRMNAME2;
        const dctrRoom3 = await dctrRoom.btndctr;
        for (let i = 0; i < rowCount; i++){
            const row = rows.nth(i);
            const tdCells = row.locator(dctrRoom1);
            const firstCellText = await tdCells.first().innerText();
            if(firstCellText.includes('ROOM 101')){
                const lastCell = tdCells.last();
                const dctrRoom2 = lastCell;
                const dctrbutton = dctrRoom2.locator(dctrRoom3);
                await expect(dctrbutton).toBeVisible
                await dctrbutton.click();
                await expect(dctrRoom.updateDoctorsRoom).toBeVisible();
                await dctrRoom.updateDoctorsRoom.click();
                await expect(dctrRoom.menuDctrRoom).toBeHidden();
                  if (!RoomName || !Remarks2) {
                    throw new Error(`UpdateDoctorsRoom missing parameters: roomName2=${RoomName}, remarks2=${Remarks2}`);
                }
                await dctrRoom.addRM.fill(RoomName);
                await dctrRoom.addRmrk.fill(Remarks2);
                await expect(dctrRoom.dctrRMUPD).toBeVisible();
                await dctrRoom.dctrRMUPD.click();
            }
           
        }
    return pageManager;
}

export async function RemoveDoctorsRoom(page:Page, ) {
    const pageManager = new PageManager(page);
    const dctrRoom =  pageManager.qmeupDMDoctorsRoom();

    const tbody = await dctrRoom.dctrRMNAME
        const rows = tbody;  
        const rowCount = await rows.count();
        const dctrRoom1 = await dctrRoom.dctrRMNAME2;
        const dctrRoom3 = await dctrRoom.btndctr;
        for (let i = 0; i < rowCount; i++){
            const row = rows.nth(i);
            const tdCells = row.locator(dctrRoom1);
            const firstCellText = await tdCells.first().innerText();
            if(firstCellText.includes('ROOM 101')){
                const lastCell = tdCells.last();
                const dctrRoom2 = lastCell;
                const dctrbutton = dctrRoom2.locator(dctrRoom3);
                await expect(dctrbutton).toBeVisible
                await dctrbutton.click();
                await expect(dctrRoom.rmvdctrRM).toBeVisible();
                await dctrRoom.rmvdctrRM.click();
                await expect(dctrRoom.menuDctrRoom).toBeHidden();
                await expect(dctrRoom.finalRemove).toBeVisible();
                await dctrRoom.finalRemove.click();
            }
        }
    return pageManager;
}