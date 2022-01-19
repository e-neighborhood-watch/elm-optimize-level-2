var $elm$core$List$map = F2(
  function (f, xs) {
	  if (xs.b) {
		  var result = _List_Cons(f(xs.a), _List_Nil);
		  var final = result;
		  xs = xs.b;
		  for (;xs.b; xs = xs.b) {
		    final.b = _List_Cons(f(xs.a), _List_Nil);
		    final = final.b;
		  }
		  return result;
	  } else {
		  return _List_Nil;
	  }
  });
