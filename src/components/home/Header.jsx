import Bio from './Bio';
import './Home.css';

const Header = () => {
  return (
    <>
      <div id="header">
        <div className="header-text">
          <div> Brooklyn A. Montgomery PhD Student</div>
          <div>
            PhD StudentSyracuse UniversityDepartment of Geography and the
            Environment
          </div>
        </div>
      </div>
      <Bio />
    </>
  );
};
export default Header;
