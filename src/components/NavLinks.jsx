import { useStore } from '@nanostores/react';
import { isDarkMode } from '../store/darkModeStore';

export const NavLinks = () => {
  const navLinks = [
    {
      name: 'Home',
      url: "/"
    },
    {
      name: 'About',
      url: "/about"
    },
    {
      name: 'Blogs',
      url: "/blogs"
    },
  ];
  
  const isDarkModeOn = useStore(isDarkMode);

  return (
    <>
    <nav>
    <ul className="flex">
    {
      navLinks.map((links, index) => {
        return <li className="mr-7 last:mr-7" key={index}>
        <a href={links.url} title={ links.name } className="hover:underline">{ links.name }</a>
        </li>
      })
    }
    </ul>
    </nav>
    <div>
    <input type="checkbox" name="darkmode" id="darkmode" onClick={() => isDarkMode.set(!isDarkModeOn)} />
    </div>
    </>
    )
  }
  
  