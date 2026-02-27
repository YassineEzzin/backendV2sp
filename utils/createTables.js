import {createUserTable} from  "../models/userTable.js";
import  {createOrderItemTable} from "../models/orderItemsTable.js";
import  { createOrdersTable } from "../models/ordersTble.js";
import {  createPaymentsTable  } from "../models/paymenTabel.js";
import  {createProductReviewsTable } from "../models/productReviwsTble.js";
import {  createProductsTable } from "../models/productTabel.js";
import {createShippingInfoTable} from "../models/shippinginfoTable.js";

 





export const createTables = async ()=>{

try {
    
 await createUserTable();
  await createProductsTable();
  await createProductReviewsTable();
   await createOrdersTable();
   await createOrderItemTable();
 
await createShippingInfoTable();
 
 await createPaymentsTable();
 

 
console.log('all Tables created Successfully');

} catch (error) {
    console.log("Error creating tables ", error);
}

};