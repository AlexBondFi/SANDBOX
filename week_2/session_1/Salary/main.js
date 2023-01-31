function daySalary() {
    const salary = prompt("Your hourly salary");
    const duration = prompt("How many hours you work");
if (duration<=7) {console.log (duration*salary);}
else if (duration<=9) {console.log (7*salary+(duration-7)*1.5*salary);}
else {console.log (10*salary+(duration-9)*2*salary);}
}
daySalary ();