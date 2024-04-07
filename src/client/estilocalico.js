const getBios = async() => {
    const response = await fetch('https://app.estilocalico.com/bios')
    const bios = response.json()
    return bios;
}

export {
    getBios
}