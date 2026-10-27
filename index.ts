function addOperators(num: string, target: number): string[] {
    const result: string[] = [];
    
    function backtrack(
        index: number,
        expression: string,
        value: number,
        lastOperand: number
    ): void {
        if (index === num.length) {
            if (value === target) {
                result.push(expression);
            }
            return;
        }

        for (let i = index; i < num.length; i++) {
            if (i > index && num[index] === '0') break;

            const current = Number(num.substring(index, i + 1));

            if (index === 0) {
                backtrack(
                    i + 1,
                    String(current),
                    current,
                    current
                );
            } else {
                backtrack(
                    i + 1,
                    expression + '+' + current,
                    value + current,
                    current
                );

                backtrack(
                    i + 1,
                    expression + '-' + current,
                    value - current,
                    -current
                );

                backtrack(
                    i + 1,
                    expression + '*' + current,
                    value - lastOperand + lastOperand * current,
                    lastOperand * current
                );
            }
        }
    }

    backtrack(0, '', 0, 0);
    return result;
}
