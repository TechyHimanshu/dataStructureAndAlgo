// every class should have single responsibility and there should only one reason to update / modify the class


//below example doesnot implies SRP because class is responsible to three action and 
//change to any of the action will have to test entire class
class Invoice{
    constructor(amount,name){
        this.amount = amount
        this.name = name
    }

    print(){
    }

    savTODB(){

    }

    calculate(){

    }
}

// Below is the modified SRP code for invoice class

class InvoiceCal{
    constructor(amount){
        this.amount = amount
    }

    calculate(){
        // calculation logic
    }
}

class InvoiceDBService extends InvoiceCal{

    saveTODB(){

    }
}

class InvoicePrintService extends InvoiceCal{

    printInvoice(){

    }
}