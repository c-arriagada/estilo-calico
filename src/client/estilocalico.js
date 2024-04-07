const getBios = async() => {
    const response = await fetch('https://app.estilocalico.com/bios')
    const bios = response.json()
    return bios;
}

const getVideos = async() => {
    const response = await fetch('https://app.estilocalico.com/videos')
    const videos = response.json()
    return videos;
}

export {
    getBios,
    getVideos
}