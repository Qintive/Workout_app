import { useAuth } from "../../../hooks/useAuth";
import styles from "./Header.module.scss";
import { FiArrowLeft } from "react-icons/fi";
import Hamburger from "../Hamburger/Hamburger";


const Header = ({ backLink }) => {
  /* TODO: React router useHistory */

  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      <button onClick={() => {}}>
        <FiArrowLeft />
      </button>
      {/* User profile */}
      <Hamburger />
    </header>
  );
};

export default Header;
