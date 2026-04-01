type OfferingCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function OfferingCard({
  image,
  title,
  description,
}: OfferingCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img src={image} className="w-full h-[450px] object-cover" />
        <div className="absolute bottom-0 w-full text-white text-center py-3">
          {title}
        </div>
      </div>
      <div className="max-h-0 overflow-hidden bg-white group-hover:max-h-40 transition-all duration-500">
        <p className="p-4 text-base text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
}
