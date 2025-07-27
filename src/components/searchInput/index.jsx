import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';
import { useRef } from 'react';

function SearchInput({ onChange, hideBoolan = () => {}, value, placeholder }) {
    const inputRef = useRef();
    const handleChange = (val) => {
        onChange?.(val);
    };
    const handleDelete = () => {
        onChange?.('');
        inputRef.current.focus();
    };
    return (
        <div className="">
            <span className="relative">
                <input
                    onFocus={() => {
                        hideBoolan();
                    }}
                    className="accent-white dark:accent-black bg-white dark:bg-black dark:text-white  rounded-2xl py-2 text-md px-10 focus:outline-none"
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    ref={inputRef}
                    placeholder={placeholder}
                />
                {value && (
                    <FontAwesomeIcon
                        className="absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer "
                        icon={faXmark}
                        onClick={() => handleDelete()}
                    />
                )}
            </span>
        </div>
    );
}

export default SearchInput;
