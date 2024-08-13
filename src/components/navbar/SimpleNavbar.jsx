import React, { useState } from 'react'
import Icon from '../../assets/icon.png'
import SearchBar from '../searchbar/SearchBar'
import { useNavigate } from 'react-router-dom'
import ProfileInfo from '../profile/ProfileInfo'

const SimpleNavbar = ({ userInfo, onSearch, handleClearSearch }) => {

    const [searchQuery, setSearchQuery] = useState()

    const navigate = useNavigate()

    const handleSearch = () => {
        if (searchQuery) {
            onSearch(searchQuery)
        }
    };

    const onClearSearch = () => {
        setSearchQuery('');
        handleClearSearch()
    }
    return (
        <div className='bg-white flex items-center justify-between px-6 py-5 drop-shadow'>
            <h2 className='font-bold text-2xl flex justify-center items-center gap-2 cursor-pointer' onClick={() => navigate('/')}><span><img src={Icon} alt="icon" width={30} /></span> LearnVista</h2>

            <SearchBar />
            <ProfileInfo />
        </div>
    )
}

export default SimpleNavbar