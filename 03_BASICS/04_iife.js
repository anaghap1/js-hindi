// immediately invoked function epression

(function chai(){
    // named iifee
    console.log(`Db  onnected`)
})();

((name) => {
    console.log(`DB connected two ${name}`);
})('hitesh')