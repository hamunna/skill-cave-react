<Nav className="ms-auto h4">
    <Nav.Link href="#features" className="mx-3 h5">
        {search}
    </Nav.Link>

    {/* {!user?.email ? ( */}
    <Nav.Link as={Link} to="/signIn">
        {userIcon}
    </Nav.Link>
    {/* ) : ( */}
    {/* //Show this part if a user Logged In */}
    <NavDropdown
        className="theme-secondary-text"
        title={userIcon}
        id="navbarScrollingDropdown"
    >
        <img
            className="d-block mx-auto"
            style={{
                width: "60px",
                borderRadius: "50%",
            }}
            // src={user?.photoURL}
            alt=""
        />

        <p className="px-2">
            Hello,{" "}
            <span style={{ fontSize: "12px" }}>
                {/* {user?.displayName} */}
            </span>
        </p>

        <NavDropdown.Item as={Link} to="/myOrders">
            My Orders
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item as={Link} to="/addNewService">
            Add New Service
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item as={Link} to="/manageAllOrders">
            Manage All Orders
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <button
            className="btn w-100 p-0 bg-warning"
            // onClick={logOut}
        >
            <NavDropdown.Item>LogOut</NavDropdown.Item>
        </button>
    </NavDropdown>
    {/* )} */}
</Nav>;
