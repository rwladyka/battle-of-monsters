export const numbersFractionCalculator = (numbers: number[]) => {

    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    const qty = numbers.length;

    numbers.forEach(number => {
        if (number > 0) positives++;
        else if (number < 0) negatives++;
        else zeros++;
    })

    return {
        positives: (positives / qty).toFixed(6),
        negative: (negatives / qty).toFixed(6),
        zeros: (zeros / qty).toFixed(6)
    }

};
