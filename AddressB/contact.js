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
    get address(){
        return this._address;
      }
  
      set address(address){
          if(this.addressRegex.test(address))
          {
            this._address=address;
          }else{
            throw "Enter valid Address";
          }
      }
  
      get city(){
        return this._city;
      }
  
      set city(city){
          if(this.cityRegex.test(city))
          {
            this._city=city;
          }else{
            throw "check your city and Enter valid city ";
          }
      }
  
      get state(){
        return this._state;
      }
  
      set state(state){
          if(this.stateRegex.test(state))
          {
            this._state=state;
          }else{
            throw "Enter valid State";
          }
      }
  
      get zip(){
        return this._zip;
      }
  
      set zip(zip){
          if(this.zipRegex.test(zip))
          {
            this._zip=zip;
          }else{
            throw "Enter valid Code";
          }
      }
  
      get phoneNumber(){
        return this._phoneNumber;
      }
  
      set phoneNumber(phoneNumber){
          if(this.phonenumberRegex.test(phoneNumber))
          {
            this._phoneNumber=phoneNumber;
          }else{
            throw "Enter valid Phone Number";
          }
      }
  
      get email(){
        return this._email;
      }
  
      set email(email){
          if(this.emailRegex.test(email))
          {
            this._email=email;
          }else{
            throw "Enter valid Email ";
          }
      }
      toString(){
        return (`First Name: ${this.firstName} \nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity : ${this.city}\nState : ${this.state}\nZip code : ${this.zip}\nPhone Number : ${this.phoneNumber}\nEmail ID: ${this.email}`)
      }
    }
      let myContact = new Contact('Anuroop', 'Kannaiah', 'Gandhi chowk', 'Khammam', 'Telangana', '507003', '919951853105', 'anuroop.kannaiah@gmail.com');
console.log(myContact.toString());
