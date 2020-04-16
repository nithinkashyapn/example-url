const si = require('systeminformation');

let main = async () => {
    let cpu = await si.cpu();
    let memory = await si.mem();
    console.log(cpu, memory)
}

main()