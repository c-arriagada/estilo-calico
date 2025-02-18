const getBios = async() => {
    const response = await fetch(`${BACKEND_URL}/bios`)
    const bios = response.json()
    return bios;
}

const getVideos = async() => {
    const response = await fetch(`${BACKEND_URL}/videos`)
    const videos = response.json()
    return videos;
}

export {
    getBios,
    getVideos
}