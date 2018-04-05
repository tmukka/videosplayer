const fn = name=>{
    console.log('Hi',name);
  }
  
  const fn1 = ()=>{
    fn2(fn);
  }
  
  const fn2 = (fun)=>{
    fun('something');
  }
  
  fn1();
  
  //https://repl.it/repls/ExaltedResponsibleArawana - use above code to check output
  //https://stackoverflow.com/questions/28909171/react-js-how-to-pass-callbacks-to-child-components