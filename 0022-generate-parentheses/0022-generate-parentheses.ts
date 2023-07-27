function generateParenthesis(n: number): string[] {
    const res: string[] = []
    helper(0, 0, "")
    return res
    
    function helper(open, close, cur): void {
        if (open === close && close === n) {
            res.push(cur)
            return
        }
        if (open < n) helper(open + 1, close, cur + "(")
        if (open > close) helper(open, close + 1, cur + ")")
    }
};