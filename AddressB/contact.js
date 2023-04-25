class Contact{
    firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    addressRegex = RegExp('^[A-Z][a-z]{4,}$');
    cityRegex = RegExp('^[A-Z][a-z]{3,}$');
    stateRegex = RegExp('^[A-Z][a-z]{4,}$');
    zipRegex = RegExp('^[0-9]{6}$');
    phonenumberRegex = RegExp('^[0-9]{2}[0-9]{10}$');
    emailRegex = RegExp('^[0-9a-zA-Z]+([+.-]([a-z0-9A-Z]+))*[@][a-zA-Z0-9]+[.][a-z]{2,4}[,]?([.][a-z]{2,4})?$');
    
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
    let ContactArray=[];
    let contact = new Contact('Anuroop', 'Kannaiah', 'Gandhi chowk', 'Khammam', 'Telangana', '507003', '919951853105', 'anuroop.kannaiah@gmail.com');
    ContactArray.push(contact);
    let contact1 = new Contact('Lohith', 'Kumar', 'KPHB', 'Hyderabad', 'Telangana', '500090', '919000065446', 'lohithkumar@gmail.com');
    ContactArray.push(contact1);
    console.log(contact.toString());
    console.log(contact1.toString());
    ContactArray.Edit=function(name,newname){
        for(let i=0;i<ContactArray.length;i++){
          if(ContactArray[i]._firstName==name){
            ContactArray[i].firstName=newname;
          }
        }
        console.log(ContactArray.toString());
      }
      
      ContactArray.Edit("Anuroop","Anurooop");
