import Image from "next/image";
import { FaFolder } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <FaFolder size={24}/>
          <span>Folder</span>
        </li>
      </ul>
    </main>
  );
}
