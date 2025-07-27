import ProductsHeader from '../Layouts/Components/ProductsHeader';
import ApiSearch from '../Layouts/Components/ApiSearch';
import SearchRender from '../Layouts/Components/SearchRender';
import { useState } from 'react';

function Products() {
    const [matchingId, setMatchingId] = useState(1);
    
    return (
        <div>
            <ProductsHeader />
            <ApiSearch onResult={setMatchingId} />
            <SearchRender Id={matchingId} />
        </div>
    );
}

export default Products;
