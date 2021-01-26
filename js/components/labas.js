function labas(data) {
    for (let i = 0; i < data.length; i++) {
        const person = data[i];

        console.log(`Hi, my name is ${person.name} and I like ${person.fruit} ♥`);
    }
}

export { labas }