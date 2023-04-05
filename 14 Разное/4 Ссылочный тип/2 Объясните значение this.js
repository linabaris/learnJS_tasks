obj.go();  // (1) [object Object] this ссылается на obj
(obj.go)();  // (2) [object Object] this ссылается на obj
(method = obj.go)();   // (3) undefined сначала переменноц method присваивается код метода, затем выозов, this утерян
(obj.go || obj.stop)(); // (4) undefined так же теряется this