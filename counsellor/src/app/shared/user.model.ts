export class User {
    username!: string;
    password!: string;
    email!: string;
    firstName!: string;
    lastName!: string;
    role!: string;
    
}

export class Appointment {
    user!: string;
    id!: string;
    date!: Date;
    timeStart!: string;
    timeEnd!: string;
    message!: string;
}


// export class Appointments{


//     date!: Date;
//     timeStart!: string;
//     timeEnd!: string;
//     message!: string;
// }


export class Users{
    username!: string;
    email!: string;
    firstName!: string;
    lastName!: string;
    
}



export class Groups {
    constructor(public name: string, public description: string, public category: string) { }
}