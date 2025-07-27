import { useEffect, useState } from 'react';
import SearchBar from '../../../components/SearchBar';
import Button from '../../../components/button';
import { characterSearch } from '../../../apiServices/characterSearchApi';

function ApiSearch({ onResult }) {
    const [inputValue, setInputValue] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await characterSearch(100);
                setInputValue(res.items);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleClick = (e) => {
        onResult(e);
        setSearchValue('');
    };

    const filteredData = inputValue.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <SearchBar onSearchChange={setSearchValue} searchValue={searchValue} dataList={inputValue}>
            {filteredData.map((e) => {
                return (
                    <Button
                        className="ps-4 mb-2 hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer"
                        key={e.id}
                        onClick={() => handleClick(e.id)}
                    >
                        {e.name}
                    </Button>
                );
            })}
        </SearchBar>
    );
}

export default ApiSearch;
