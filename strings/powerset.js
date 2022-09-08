

	function printPowerSet(set, set_size)
	{

		/*
		* set_size of power set of a set with set_size n is (2**n -1)
		*/
		var pow_set_size = parseInt(Math.pow(2, set_size));
		var counter, j;

		/*
		* Run from counter 000..0 to 111..1
		*/
		for (counter = 0; counter < pow_set_size; counter++)
		{
            let a ='';
			for (j = 0; j < set_size; j++)
			{
				/*
				* Check if jth bit in the counter is set If set then print jth element from set
				*/
				if ((counter & (1 << j)) > 0)
					a = a+set[j]
			}
            console.log(a);
             a ='';

		}
	}

	// Driver program to test printPowerSet
		let set = [ 'a', 'b', 'c' ];
		printPowerSet(set, 3);

        010


