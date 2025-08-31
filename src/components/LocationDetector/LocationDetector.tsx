import  { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


const LocationDetector = () => {
    const [location, setLocation] = useState()
    console.log(location);
    
    useEffect(() => {
        const findUserCoordinates = () => {
        if (navigator.geolocation) {
            try {
                navigator.geolocation.getCurrentPosition((position) => {
                // console.log(position.coords.latitude, position.coords.longitude);
                const bdcAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longtitude=${position.coords.longitude}`
                getAPI(bdcAPI)
            })
            } catch (error: any) {
                toast.error(error.message)
            }
        } else {
            toast.error("Location couldn't be detected by your browser")
        }
    }
    findUserCoordinates();
    }, [])
    const getAPI = (bdcAPI) => {
        http.open("GET", bdcAPI)
        http.send()
        http.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
                setLocation(this.responseText)
            }
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default LocationDetector
