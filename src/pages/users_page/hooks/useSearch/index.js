import React, { useEffect, useState } from 'react';

export const useSearch = ({data, updateStore}) => {

    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const searchAction = () => {
        const searchResult = data.reduce((acc, item) => {
            const { name, location, age } = item;
            if ((name && name.toLowerCase().includes(search))
                || (location && location.toLowerCase().includes(search))
                || (age && age.toLowerCase().includes(search))) {
                acc.push(item);
                return acc
            }
            return acc
        }, [])

        updateStore({ searchResult })
    }

    useEffect(() => {
        searchAction();
    }, [search])

    return (
        <div className="input-form">
            <label>Поиск</label>
            <input
                placeholder="Ввод..."
                value={search || ''}
                className="input"
                onChange={handleChange}
            />
        </div>
    );
}