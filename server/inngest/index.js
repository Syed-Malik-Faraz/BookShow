// import { User } from "@clerk/express";
// import { Inngest } from "inngest";


// export const inngest = new Inngest({ id: "movie-ticekt-booking" });


// //usercreation 
// const syncUserCreation = inngest.createFunction(
//     { id : 'sync-user--from-clerk'},
//     {event : 'clerk/user.created'},

//     async({event})=>{

//         const{id, first_name, last_name, email_addresses, image_url}= event.data
//         const userdata = {
// _id : id,
// email : email_addresses[0].email_address,
// name:first_name + '' + last_name ,
// image : image_url
//         }
//         await User.create(userdata)
//     }
// )

// //user deletion 


// const syncUserDeletion = inngest.createFunction(
//     { id : 'delete-user--from-clerk'},
//     {event : 'clerk/user.deletd'},

//     async({event})=>{
// const {id} = event.data,
// await User.findByIdAndDelete(id)
//     }
// )


// // Create an empty array where we'll export future Inngest functions
// export const functions = [syncUserCreation];



import { Inngest } from "inngest";
import User from "../models/User.js";   // ✅ FIXED import

export const inngest = new Inngest({ id: "movie-ticket-booking" });

// USER CREATED
const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },

  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userdata = {
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      image: image_url,
    };

    await User.create(userdata);
  }
);

// USER DELETED
const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-from-clerk" },
  { event: "clerk/user.deleted" }, // ✅ FIXED event

  async ({ event }) => {
    const { id } = event.data;
    await User.findByIdAndDelete(id); // ✅ FIXED comma bug
  }
);


// USER DELETED
const syncUserUpdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" }, // ✅ FIXED event

async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userdata = {
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      image: image_url,
    };

    await User.findByIdAndUpdate(id, userdata);


  }
);



// Export functions
export const functions = [syncUserCreation, syncUserDeletion , syncUserUpdation];
