class Contact{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
      this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }

    get firstName(){
      return this._firstName;
    }

    set firstName(firstName){
      if(this.firstNameRegex.test(firstName))
        {
          this._firstName=firstName;
        }else{
          throw "Enter valid First Name ";
        }
    }


    get lastName(){
      return this._lastName;
    }

    set lastName(lastName){
        if(this.lastNameRegex.test(lastName))
        {
          this._lastName=lastName;
        }else{
          throw "Enter valid last Name ";
        }
    }
}