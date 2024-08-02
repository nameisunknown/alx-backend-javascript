import {RowID, RowElement} from './interface';

declare function insertRow(row: rowElement): rowID;

declare function deleteRow(rowId: rowID): undefined; 

declare function updateRow(rowId: rowID, row: rowElement): rowID 
