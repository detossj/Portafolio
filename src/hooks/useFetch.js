
const getData = async() => {

    try {
        const resp = await fetch('https://raw.githubusercontent.com/detossj/Portafolio/refs/heads/main/public/pages.json')
        const data = await resp.json();

        return data;
        
    } catch (error) {
        console.log(error)
    }
}