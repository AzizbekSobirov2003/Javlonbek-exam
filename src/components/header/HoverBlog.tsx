// next
import Link from "next/link";
import stati from "@/app/stati/page";

// new type forn props
interface HoverBlogProps {
  isHoverBlog: boolean;
  handleMouseEnterBlog: () => void;
  handleMouseLeaveBlog: () => void;
}

const HoverBlog: React.FC<HoverBlogProps> = ({
  isHoverBlog,
  handleMouseEnterBlog,
  handleMouseLeaveBlog,
}) => {
  return (
    <div
      className={`${isHoverBlog !== true ? "hidden" : "block"} absolute right-0 top-5`}
      onMouseEnter={handleMouseEnterBlog}
      onMouseLeave={handleMouseLeaveBlog}
    >
      <ul>
        <li className="rounded-[8px] border-2 bg-white p-3 text-[14px]">
          <Link href="../stati">Статьи</Link>
        </li>
      </ul>
    </div>
  );
};

export default HoverBlog;
