export default createIteratorObject(report) {
    const allEmpKeys = Object.keys(report.allEmployees);
    const derivedEmp = [];

    for (const keey of allEmpKeys){
        derivedEmp.push(...report.allEmployees[keey]);
    }

    return derivedEmp;
}