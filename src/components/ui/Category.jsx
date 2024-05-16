function Category({ catagory: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col group  items-center text-center gap-y-2 p-4 transition hover:bg-purple-50"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded border border-gray-200"
      />
      <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight ">
        {title}
      </span>
    </a>
  );
}

export default Category;
