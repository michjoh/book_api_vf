const nt_recursive = () => process.nextTick(nt_recursive);
nt_recursive();

// const si_recursive = () => setImmediate(si_recursive);
// si_recursive();

setInterval(() => console.log('request'), 10); // simulates other code