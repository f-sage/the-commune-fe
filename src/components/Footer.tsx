import { Separator } from "@radix-ui/themes";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <Separator my="3" size="4" />
      <ul>
        <li>
          Maintained by <em>TheButterMan</em>
        </li>
        <li>2026</li>
      </ul>
    </footer>
  );
};

export default Footer;
