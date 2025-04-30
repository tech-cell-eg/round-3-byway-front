type CourseStickyCardImageProps = {
  courseThumbnail: string;
};

function CourseStickyCardImage({
  courseThumbnail,
}: CourseStickyCardImageProps) {
  return (
    <div className="rounded-small overflow-hidden">
      <img
        src={courseThumbnail}
        alt="course thumbnail"
        className="w-full h-auto object-cover "
        loading="lazy"
      />
    </div>
  );
}

export default CourseStickyCardImage;
