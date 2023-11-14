import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  fontsize: 10px;
`;

const ImageIcon = styled.img`
  width: 100px;
`;

const Li = styled.li``;

const H5 = styled.h5`
  display: inline;
`;

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sell Tickets", href: "tickets/new" },
    currentUser && { label: "My Orders", href: "/orders" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <Li key={href} className="nav-item">
          <StyledLink className="nav-link" href={href}>
            {label}
          </StyledLink>
        </Li>
      );
    });

  return (
    <div className="container">
      <nav className="navbar navbar-white bg-white">
        <Link className="navbar-brand" href="/">
          <ImageIcon src="../static/bm-white-blue.png" href="" />
          <H5> Ticket Swaps </H5>
        </Link>

        <div className="d-flex justify-content-end">
          <ul className="nav d-flex align-items-center">{links}</ul>
        </div>
      </nav>
    </div>
  );
};
