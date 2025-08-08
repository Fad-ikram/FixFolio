const Template = ({Label , alt , caption}) => {
  return (
    <li>
      <figure class="flex flex-col bg-white rounded-md border border-purple overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src={Label}
          alt={alt}
          class="h-50 w-full object-cover"
        />
        <figcaption class="text-center text-xl font-bold text-dark-purple p-4 bg-cyan">
{caption}      </figcaption>
      </figure>
    </li>
  );
};

export default Template;
