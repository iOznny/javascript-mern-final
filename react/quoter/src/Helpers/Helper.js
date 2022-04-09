export function calculateTotal(amount, limit) {
    let total;

    if (amount <= 1000) {
        total = amount * 0.25;
    } else if (amount > 1000 && amount <= 5000) {
        total = amount * 0.20;
    } else if (amount > 5000 && amount <= 10000) {
        total = amount * 0.15;        
    } else {
        total = amount * 0.10;
    }

    // Calculate limit
    // 3 = 5%
    // 6 = 10%
    // 12 = 15%
    // 24 = 20%

    let limitTotal = 0;

    switch (limit) {
        case 3:
            limitTotal = amount * 0.05;
            break;

        case 6:
            limitTotal = amount * 0.10;
            break;

        case 12:
            limitTotal = amount * 0.15;
            break;

        case 24:
            limitTotal = amount * 0.20;
            break;
    
        default:
            break;
    }

    return limitTotal + total + amount;
}