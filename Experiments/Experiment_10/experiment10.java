abstract class BankAccount {
    int accountNumber;
    String accountHolderName;
    float balance;
    
    BankAccount(int accountNumber , String accountHolderName , float balance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    abstract void calculateInterest();
}

class SavingsAccount extends BankAccount {

    SavingsAccount(int accountNumber, String accountHolderName , float balance){
        super(accountNumber , accountHolderName , balance);
    }

    public void infoDisplay(){
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder-Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    @Override
    public void calculateInterest(){
        float interest = balance * 0.08f;
        System.out.println("Interest [Saving's Account]: " + interest);
    }
}

class CurrentAccount extends BankAccount {

    CurrentAccount(int accountNumber , String accountHolderName , float balance){
        super(accountNumber , accountHolderName , balance);
    }

    public void infoDisplay(){
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder-Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    @Override
    public void calculateInterest(){
        float interest = balance * 0.05f;
        System.out.println("Interest [Current Account]: " + interest);
    }
}

public class experiment10 {
    public static void main(String[] args){
        SavingsAccount savAcc = new SavingsAccount(151 , "Vedant Chauhaan" ,  10000.50f);
        CurrentAccount currAcc = new CurrentAccount(101 , "Vedant Chauhaan" , 100000.76f);
        System.out.println();
        System.out.println("***************");
        System.out.println("Savings Account");
        System.out.println("***************");
        savAcc.infoDisplay();
        savAcc.calculateInterest();

        System.out.println();
        System.out.println();

        System.out.println("***************");
        System.out.println("Current Account");
        System.out.println("***************");
        currAcc.infoDisplay();
        currAcc.calculateInterest();
        System.out.println();
    }
}