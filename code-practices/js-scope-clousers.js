function createBank(){
    let totalTransactions = 0;
    // create Acount 
    function createAccount(accountOwner){
        let balance = 0;
        // deposit
        function deposit(amount){
            totalTransactions++;
            return balance += amount;
        }
        // transfer
        function transfer(account, transferAmount){
            totalTransactions++;
            // Example: acc1 sends 300 to acc2
            if(balance >= transferAmount){
                balance -= transferAmount;
                account.deposit(transferAmount);
                return true;
            } else {
                console.log("Insufficient funds for transfer.");
                return false;
            }
        }
        // getBalance
        function getBalance(){
            return balance;
        }

        return {
            deposit, transfer,getBalance
        }
    }
        
    // getTotalTransactions
    function getTotalTransactions(){
        return totalTransactions;
    }

    return {createAccount, getTotalTransactions};
}

//----- Problem

const Bank = createBank(); 


const acc1 = Bank.createAccount("Alice"); 
const acc2 = Bank.createAccount("Bob");

acc1.deposit(1000);
acc2.deposit(500);

acc1.transfer(acc2, 300);     // Alice sends 300 to Bob

console.log(acc1.getBalance()); // 700
console.log(acc2.getBalance()); // 800

console.log(Bank.getTotalTransactions()); // 4 
