import React from 'react';



const SearchBox = ({searchfield, searchChange}) => {
return (
    <div classname= 'pa2'>
<input
className='pa3 ba b--green bg-lightest-blue'
 type='search'
 placeholder='Search Robots' 
onChange={searchChange}
/>
</div>
);


}

export default SearchBox;