import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css';
import {Link} from 'react-router-dom';

export default function Nav({onSearch, logout}){

    
    return(
        <div className={styles.divNav} >
            <div className={styles.linksDiv}>
                <Link className={styles.links} to='/about'>About</Link>
                <Link className={styles.links} to='/home'>Home</Link>
                <button onClick={logout} className={styles.button}>Logout</button>
            </div>
            <SearchBar onSearch={onSearch} />
        </div>

    )
};