const average = (x = 5, y = 4) => {
    return (x + y) / 2;
}

const greeter = (name)=> {
    return `Hello ${name}`
}

export { average };
export default greeter;