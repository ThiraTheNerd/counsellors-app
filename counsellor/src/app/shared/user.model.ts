export class User {
    username!: string;
    password!: string;
    email!: string;
    firstName!: string;
    lastName!: string;
    role!: string;

}

export class Appointment {
    constructor(
        public name: string,
        public id: number,
        public date: Date,
        public timeStart: string,
        public timeEnd: string,
        public message: string,
    ){}
}


// export class Appointments{


//     date!: Date;
//     timeStart!: string;
//     timeEnd!: string;
//     message!: string;
// }


export class Users {
    constructor(
        public username: string,
        public email: string,
        public firstName: string,
        public lastName: string,
        
    ) { }

}
export class Medication {
    counsellor!: string;
    name_of_medicine!: string;
    details!: string;
    client!: string;

}


export class Groups {
    constructor(public name: string, public description: string, public id: number, public clients: ([]), public messages: ([])
) { }
}


