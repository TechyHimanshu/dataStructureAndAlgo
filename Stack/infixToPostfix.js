	/* Javascript implementation to convert
	infix expression to postfix*/
	
	//Function to return precedence of operators
	function prec(c) {
		if(c == '^')
			return 3;
		else if(c == '/' || c=='*')
			return 2;
		else if(c == '+' || c == '-')
			return 1;
		else
			return -1;
	}

	// The main function to convert infix expression
	//to postfix expression
	function infixToPostfix(s) {

		let st = []; //For stack operations, we are using C++ built in stack
		let result = "";

		for(let i = 0; i < s.length; i++) {
			let c = s[i];

			// If the scanned character is
			// an operand, add it to output string.
			if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
				result += c;

			// If the scanned character is an
			// ‘(‘, push it to the stack.
			else if(c == '(')
				st.push('(');

			// If the scanned character is an ‘)’,
			// pop and to output string from the stack
			// until an ‘(‘ is encountered.
			else if(c == ')') {
				while(st[st.length - 1] != '(')
				{
					result += st[st.length - 1];
					st.pop();
				}
				st.pop();
			}

			//If an operator is scanned
			else {
				while(st.length != 0 && prec(s[i]) <= prec(st[st.length - 1])) {
					result += st[st.length - 1];
					st.pop();
				}
				st.push(c);
			}
		}

		// Pop all the remaining elements from the stack
		while(st.length != 0) {
			result += st[st.length - 1];
			st.pop();
		}

		console.log(result);
	}
	
	let exp = "a+b*(c^d-e)^(f+g*h)-i";
	// infixToPostfix(exp);

// This code is contributed by decode2207.

function precedence(ip) {
	if(ip === "^")
		return 3
	else if(ip === "*" || ip === "/")
		return 2
	else if(ip === "+" || ip === "-")
		return 1
	else 
		return -1
}

function infixToPostFix(ip){
	let stack = []
	let postFix = ""

	for(let i =0; i<ip.length; i++){
		if(ip[i]>='a' && ip[i]<='z' || ip[i]>="A" && ip[i]<="Z" || ip[i]>=0 && ip[i]<= 9){
			postFix += ip[i]
		}

		else if(ip[i] == "("){
			stack.push(ip[i])
		}

		else if(ip[i]==")"){
			while(stack[stack.length-1]!= "("){
				postFix += stack[stack.length-1]
				stack.pop()
			}
			stack.pop()
		}

		else{
			while(stack.length !=0 && precedence(ip[i])<=precedence(stack[stack.length -1])){
				postFix += stack[stack.length -1]
				stack.pop()
			}
			stack.push(ip[i])
		}

	}

	while(stack.length){
		postFix += stack[stack.length -1]
		stack.pop()
	}

	console.log(postFix)
}

// let exp = "a+b*(c^d-e)^(f+g*h)-i";
infixToPostFix(exp);