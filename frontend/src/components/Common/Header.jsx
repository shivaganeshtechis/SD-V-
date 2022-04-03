import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import logo from '../../assets/img/logo.svg'
import fav from '../../assets/img/favorite_white_48dp.svg'
import arroew from '../../assets/img/arrow_drop_down_white_24dp.svg'
import searchImg from '../../assets/img/search.svg' 

function Header() {
  const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const inputSearch = event => {
        setSearch(event.target.value);
    };
    const submitAction = () => {
        dispatch(push('/search/?search=' + search));
    };
  return (
    <div>
      <nav>
        <div class="left-nav">
         <img src={logo} onClick={() => dispatch(push('/'))}/>
        </div>
        <div class="right-nav">
          <div class="container">
            <form>
            <input type="text" name="search" id="ip" onChange={inputSearch} />
            {/* <img src={searchImg} alt="" onClick={submitAction}/> */}
            </form>
            <div class="cat" onClick={() => dispatch(push('/category'))}>
                <h1 onClick={() => dispatch(push('/category'))}>category</h1>
                <img src={arroew} alt="" />
            </div>

            <div class="cat">
              <h1 onClick={() => dispatch(push('/favourites'))}>Favorites</h1>
              <img src={fav} alt="" />
            </div>

          </div> 
        </div>
      </nav>
    </div>
  )
}

export default Header