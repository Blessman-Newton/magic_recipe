import './Search.css';

function Search() {
    const inputType = "text"
    return (
       <form action="">
            {/* <h4>Premium Properties At Your Hands</h4> */}
            <input type={inputType} placeholder="Enter your recipe" />
       </form>
    );
};

export default Search;