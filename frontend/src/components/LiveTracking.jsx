import React, { useState, useEffect } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 28.6139,
    lng: 77.2090
};

const LiveTracking = () => {
    const [ currentPosition, setCurrentPosition ] = useState(center);
    const [ mapError, setMapError ] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            }, (error) => {
                console.warn('Geolocation error:', error.message);
            });

            const watchId = navigator.geolocation.watchPosition((position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            }, (error) => {
                console.warn('Geolocation watch error:', error.message);
            });

            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, []);

    // Fallback clean animated map background if Google Maps JS API is not activated in Google Cloud Console
    if (mapError) {
        return (
            <div className='h-full w-full relative bg-gray-100 flex items-center justify-center overflow-hidden'>
                <img 
                    className='h-full w-full object-cover' 
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" 
                    alt="Map background" 
                />
            </div>
        )
    }

    return (
        <LoadScript 
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            onError={() => setMapError(true)}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
            >
                <Marker position={currentPosition} />
            </GoogleMap>
        </LoadScript>
    )
}

export default LiveTracking