import { Button, Navbar } from "keep-react";

import { ShoppingCart } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../redux/api/usersApi";
import { logout } from '../../redux/slice/authSlice';


const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/auth');
    } catch (err) {
      console.error(err);
    }
  };

  return (


    <Navbar fluid={true}>
      <Navbar.Container className="container mx-aut flex items-center justify-between  h-[100px]">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Brand>
            <Link to="/" className="text-3xl font-bold hidden lg:block ">App <span className="text-green-600 "> Logo</span></Link>
          </Navbar.Brand>
        

        </Navbar.Container>
        <Navbar.Brand>
          <Link to="/" className=" text-2xl font-bold lg:hidden ">App <span className="text-green-600"> Logo</span></Link>
        </Navbar.Brand>
        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Link to="/">Home</Link>
            <Link to="/">Products</Link>
            <Link to="/auth">Sign Up</Link>
            <Link to="/auth">Login</Link>

          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
              <Link to="product" className="font-semibold text-lg">Products</Link>
            {
              userInfo ? <button onClick={logoutHandler} className="font-semibold text-lg"> LogOut</button> : <Link to="auth" className="font-semibold text-lg"> Sign Up</Link>
            }


          </Navbar.Container>

          <Button size="xs" type="outlineGray" className="bg-green-500 hover:bg-green-700 text-white font-semibold">
            <span>
              <ShoppingCart className="font-bold " size={20} color="#FFFFFF" />
            </span>
            <span className="ml-1 font-semibold ">10</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>

  )
}

export default Header