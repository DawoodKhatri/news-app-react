const StoryCard = ({
  title,
  time,
  url,
  icon,
}: {
  title: string;
  time: number;
  url: string;
  icon: string;
}) => {
  return (
    <li className="space-y-4 border-2 border-primary p-4 rounded-md shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all ease-in-out duration-150">
      <iframe
        src={url}
        width="100%"
        scrolling="no"
        role="iframe"
        sandbox="allow-same-origin allow-scripts"
        className="rounded-md aspect-video pointer-events-none border"
      ></iframe>

      <div className="flex justify-between items-center">
        <img src={icon} className="size-8 rounded-full" />

        <p className="text-sm text-gray-500">
          {new Date(time * 1000).toDateString()}
        </p>
      </div>

      <p className="text font-semibold">{title}</p>

      <div className="flex justify-end">
        <a
          href={url}
          target="_blank"
          className="text-primary hover:underline decoration-primary"
        >
          Read More
        </a>
      </div>
    </li>
  );
};

export default StoryCard;
