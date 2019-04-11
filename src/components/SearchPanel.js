import React from 'react';

const SearchPanel = () => {
    const searchText = 'Нажмите сюда для поиска';
    const searchStyle = {
        fontSize: '25px'
    }
    return <input 
        style={searchStyle} 
        placeholder={searchText}/>
}


export default SearchPanel;