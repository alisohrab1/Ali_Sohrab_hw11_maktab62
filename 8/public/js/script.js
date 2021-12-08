const data = require('/data/script.js');
console.log(data)
// data = [
//     {
//       "id": "1",
//       "name": "Ferrari enzo",
//       "details": "The Enzo Ferrari[7] (Type F140) is a mid-engine sports car manufactured by Italian automobile manufacturer Ferrari and named after the company's founder, Enzo Ferrari.[5] It was developed in 2002 using Formula One technology, such as a carbon-fibre body, F1-style automated-shift manual transmission, and carbon fibre-reinforced silicon carbide (C/SiC) ceramic composite disc brakes, as well as technologies not allowed in F1, such as active aerodynamics."
//     },
//     {
//       "id": "2",
//       "name": "Ferrari 488",
//       "details": "The Ferrari 488 (Type F142M) is a mid-engine sports car produced by the Italian automobile manufacturer Ferrari. The car replaced the 458, being the first mid-engine Ferrari to use a turbocharged V8 since the F40."
//     }
//   ]
for (car of data) {
  $("#mainBody").append(`
       
          <div class="card col-lg-3">
            <img src="/img/enzo.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${car.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/detail/1" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        
        
        `);
}
