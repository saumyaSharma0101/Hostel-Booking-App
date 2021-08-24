import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
  const { user, signout } = props;

  return (
    <>
      <div id="head" className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div>
            <img src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='30px' height='30px' viewBox='0 0 121 121' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EGroup%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='11' transform='translate(-85.000000, -444.000000)'%3E %3Cg id='Group' transform='translate(85.000000, 444.000000)'%3E %3Cpath d='M121,0 L121,60.5 C121,93.9132274 93.9132274,121 60.5,121 C27.0867726,121 0,93.9132274 0,60.5 C0,27.0867726 27.0867726,0 60.5,0 L60.5,0 L121,0 Z' id='Combined-Shape' fill='%236BA9E1'%3E%3C/path%3E %3Cpath d='M29.9991305,9.00050709 L29.9991305,112.999493 C12.0495586,102.530897 0,83.1625463 0,61 C0,38.8374537 12.0495586,19.4691028 29.9991305,9.00050709 Z' id='Combined-Shape' fill='%23719DE6'%3E%3C/path%3E %3Cpath d='M61,0 L61,121 C49.6896363,121 39.0947971,117.976087 30.0000026,112.702639 L30.0000026,8.2973615 C38.8225978,3.18174225 49.0567914,0.18302114 59.986416,0.00810527147 L61,0 Z' id='Combined-Shape' fill='%2352D2CE'%3E%3C/path%3E %3Cpath d='M60.4333989,0 L109.000019,97.0028949 C103.306307,104.571975 95.8797728,110.766798 87.3086261,114.999938 L33.0002978,6.5288324 C40.9599303,2.49511474 49.9294828,0.161945428 59.4295193,0.00812199514 L60.4333989,0 Z' id='Combined-Shape' fill='%2349E1C7'%3E%3C/path%3E %3Cpath d='M121,0 L121,60.4437296 C121,82.9590366 108.515898,102.599042 90.0012292,112.999886 L90,0 L121,0 Z' id='Combined-Shape' fill='%2356CAD1'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E" />
            <b style={{ marginLeft: "10px", color: "black" }}>Newton School</b>
          </div>
        </Link>

        {user ? (
          <span id="username">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {user}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={signout}>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        ) : (
          <div></div>
        )}
      </div>

      <hr />
    </>
  );
}

export default Header;
