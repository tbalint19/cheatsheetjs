type Account = {
    userId: string,
    balance: number,
    isActive: boolean,
}













var a1 = { userId: "fsdjhf", balance: 35, isActive: true }
var a2 = { userId: "fsdfs", balance: -35, isActive: true }
var a3 = { userId: "fsggdf", balance: 35, isActive: false }
var a4 = { userId: "gdfgdfgdf", balance: 35, isActive: true }
var a5 = { userId: "gdfgdfgd", balance: 35, isActive: true }
var a6 = { userId: "tzrtdfg", balance: 35, isActive: true }
var a7 = { userId: "uzizui", balance: 35, isActive: true }
var a8 = { userId: "fgewg", balance: -35, isActive: false }
var a9 = { userId: "rweetfxv", balance: 35, isActive: true }
var a10 = { userId: "sdfdsfs", balance: 35, isActive: true }
var a11 = { userId: "wrtwer", balance: 35, isActive: true }
var a12 = { userId: "eqwrew", balance: -135, isActive: false }
var a13 = { userId: "vxbvc", balance: 35, isActive: true }
var a14 = { userId: "asdasd", balance: 35, isActive: false }
var a15 = { userId: "wewqe", balance: 35, isActive: true }
var a16 = { userId: "erter", balance: -35, isActive: true }
var a17 = { userId: "frwfs", balance: 35, isActive: true }
var a18 = { userId: "zrtrtz", balance: 35, isActive: true }
var a19 = { userId: "gdhgd", balance: 35, isActive: true }
var a20 = { userId: "fsgfd", balance: 35, isActive: false }
var a21 = { userId: "htrrhr", balance: 35, isActive: true }
var a22 = { userId: "zuiuz", balance: 35, isActive: true }
var a23 = { userId: "rtzrt", balance: 35, isActive: false }
var a24 = { userId: "ertfsder", balance: 35, isActive: true }
var a25 = { userId: "rewrew", balance: 35, isActive: true }

var accounts = [ a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12 ]

/* osszveszteseg induljon 0tol
csinald meg az osszes accountra
    nezzem meg az accountot
    ha a balance negativ
    nezzem az isActiveot is
    ha false adjam hozza az osszvveszteseghez a balanceot */

function getTotalLoss(accountList: Account[]): number {
    var totalLoss = 0
    for (var account of accountList) {
        if (account.balance < 0) {
            if (account.isActive === false) {
                totalLoss += account.balance
            }
        }
    }
    return totalLoss
}

var result1 = getTotalLoss(accounts)
console.log(result1);


var result2 = getTotalLoss([ a24, a25 ])
console.log(result2);

